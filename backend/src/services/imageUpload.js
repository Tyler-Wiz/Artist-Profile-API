const AWS = require("aws-sdk");
require("aws-sdk/lib/maintenance_mode_message").suppress = true;

// Configure AWS
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

exports.uploadImage = async (req, res, next) => {
  const s3 = new AWS.S3({ params: { Bucket: "tooxclusive-artist-profile" } });
  const { image, name } = req.body;
  const buf = Buffer.from(
    image.replace(/^data:image\/\w+;base64,/, ""),
    "base64"
  );

  // Clean the image name
  let cleanedImageName = name.trim().replace(/["()\-]/g, "");
  // Add hyphens to the name
  let hyphenateImageName = cleanedImageName.replace(/\s+/g, "-").toLowerCase();

  // Create a Unique ID for the image
  const day = new Date().getHours() + 1;
  const month = new Date().getMonth() + 1;
  const Key = `${day}-${month}-${hyphenateImageName}`;

  const data = {
    Key,
    Body: buf,
    ContentEncoding: "base64",
    ContentType: "image/jpeg",
    ACL: "public-read",
  };
  try {
    const { Location } = await s3.upload(data).promise();
    req.Location = Location;
    next();
  } catch (error) {
    next(error);
  }
};
