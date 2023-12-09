const CreateError = require("http-errors");
const { passwordHash } = require("../utils/bcrypt");
const { validateAuthInput } = require("../utils/validation");
const UserModel = require("../models/user");
const genAuthToken = require("../utils/genAuthToken");

exports.create = async (req, res, next) => {
  try {
    // Validate the userInput
    const data = await validateAuthInput(req.body);
    if (!data) throw CreateError(400, `Input invalid`);
    // destructure req body
    const { email, password, is_admin, username } = data;
    // Check if user already exists
    const user = await UserModel.findUserByEmail(email);
    if (user) throw CreateError(400, `User With Email already exists`);
    // Hash password with bcrypt password
    const hashedPassword = await passwordHash(password, 10);
    //Create a new user
    const newUser = await UserModel.createUser(
      email,
      hashedPassword,
      is_admin,
      username
    );
    //Send the new user
    const token = genAuthToken(newUser);
    res.send(token);
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    const token = genAuthToken(req.user);
    res.send(token);
  } catch (error) {
    next(error);
  }
};
