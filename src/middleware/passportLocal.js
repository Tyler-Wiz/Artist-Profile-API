const passport = require("passport");
const localStrategy = require("passport-local");
const UserModel = require("../models/user");
const { comparePasswords } = require("../utils/bcrypt");

// Set method to serialize data to store in cookie
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Set method to deserialize data stored in cookie and attach to req.user
passport.deserializeUser(async (id, done) => {
  try {
    const user = await UserModel.findUnique(id);
    if (!user) throw new Error("User not found");
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});

passport.use(
  "local",
  new localStrategy(
    { usernameField: "email" },
    async (email, password, done) => {
      try {
        const user = await UserModel.findUserByEmail(email);
        if (!user) return done(null, false);
        const isValid = await comparePasswords(password, user.password);
        if (isValid) {
          return done(null, user);
        } else {
          done(null, false);
        }
      } catch (error) {
        return done(error, null);
      }
    }
  )
);
