const bodyParser = require("body-parser");
const session = require("express-session");
const passport = require("passport");

module.exports = (app) => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use(
    session({
      secret: "secret",
      resave: true,
      saveUninitialized: true,
      cookie: {
        httponly: false,
        secure: false,
        sameSite: "none",
        expires: 7 * 24 * 3600 * 1000,
      },
    })
  );

  app.use(passport.initialize());
  app.use(passport.session());

  return app;
};
