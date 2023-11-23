const joi = require("joi");
const CreateError = require("http-errors");

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
    password: joi.string().trim().min(6).max(40).required(),
  });
  // Check for valid email and password
  const { error } = schema.validate(data);
  if (error) throw CreateError(401, "Invalid Email or Password");
  // Trim Input
  const trimmedData = await schema.validateAsync(data);
  // Return trimmed data
  return trimmedData;
};
