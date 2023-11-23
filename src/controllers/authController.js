const CreateError = require("http-errors");
const { passwordHash } = require("../utils/bcrypt");
const { validateAuthInput } = require("../utils/validation");
const UserModel = require("../models/user");

exports.create = async (req, res, next) => {
  try {
    // Validate the userInput
    const data = await validateAuthInput(req.body);
    // destructure req body
    const { email, password } = data;
    // Check if user already exists
    const user = await UserModel.findUserByEmail(email);
    if (user) throw CreateError(400, `User With Email ${email} already exists`);
    // Hash password with bcrypt password
    const hashedPassword = await passwordHash(password, 10);
    //Create a new user
    const newUser = await UserModel.createUser(email, hashedPassword);
    //Send the new user
    res.send(newUser);
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    res.send(req.user);
  } catch (error) {
    next(error);
  }
};
