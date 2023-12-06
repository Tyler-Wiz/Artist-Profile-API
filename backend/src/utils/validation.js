const joi = require("joi");
const CreateError = require("http-errors");

const trimErrorMessage = (errorMessage) => {
  let error = errorMessage.trim().replace(/["().\\-]/g, "");
  return error;
};

exports.validateAuthInput = async (data) => {
  const schema = joi.object().keys({
    email: joi
      .string()
      .trim()
      .min(6)
      .max(40)
      .required()
      .email({
        minDomainSegments: 2,
        tlds: {
          allow: ["com", "net", "in", "co"],
        },
      }),
    password: joi.string().trim().max(40).required(),
    is_admin: joi.number().required(),
    username: joi.string().required(),
  });
  // Check for valid email and password
  const { error } = schema.validate(data);
  if (error) throw CreateError(401, "Invalid Email,Password & Admin ");
  // Trim Input
  const trimmedData = await schema.validateAsync(data);
  // Return trimmed data
  return trimmedData;
};

exports.validateArtistInput = async (data) => {
  const schema = joi.object().keys({
    artist_name: joi.string().required(),
    real_name: joi.string().required(),
    hometown: joi.string().required(),
    label: joi.string().required(),
    featured_image: joi.string().required(),
    bio: joi.string().required(),
    age: joi.string().required(),
    twitter: joi.string(),
    instagram: joi.string(),
  });
  // Check for valid email and password
  const { error } = schema.validate(data);
  if (error) return trimErrorMessage(error.details[0].message).toUpperCase();
};

exports.validateSongInput = async (data) => {
  const schema = joi.object().keys({
    artist_id: joi.number().min(1).required(),
    released: joi.number().min(4).required(),
    song_image: joi.string().min(2).required(),
    song_title: joi.string().min(2).required(),
    external_url: joi.string().min(2).required(),
  });
  // Check for valid email and password
  const { error } = schema.validate(data);
  if (error) return trimErrorMessage(error.details[0].message).toUpperCase();
};

exports.validateSongUpdate = async (data) => {
  const schema = joi.object().keys({
    song_image: joi.string().required(),
    song_title: joi.string().required(),
    released: joi.string().required(),
    external_url: joi.string().required(),
  });
  // Check for valid email and password
  const { error } = schema.validate(data);
  if (error) return trimErrorMessage(error.details[0].message);
};

exports.validateAlbumUpdate = async (data) => {
  const schema = joi.object().keys({
    album_image: joi.string().required(),
    album_title: joi.string().required(),
    external_url: joi.string().required(),
    released: joi.string().required(),
  });
  // Check for valid email and password
  const { error } = schema.validate(data);
  if (error) return trimErrorMessage(error.details[0].message);
};

exports.validateAlbumInput = async (data) => {
  const schema = joi.object().keys({
    artist_id: joi.number().required(),
    album_image: joi.string().required(),
    album_title: joi.string().required(),
    external_url: joi.string().required(),
    released: joi.string().required(),
  });
  // Check for valid email and password
  const { error } = schema.validate(data);
  if (error) return trimErrorMessage(error.details[0].message);
};
