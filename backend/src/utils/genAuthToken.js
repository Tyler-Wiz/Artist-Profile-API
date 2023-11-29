const jwt = require("jsonwebtoken");

const genAuthToken = (user) => {
  const secretKey = process.env.JWTSECRET_KEY;

  const token = jwt.sign(
    {
      id: user.id,
      email: user.email,
      password: user.password,
      created_at: user.created_at,
      is_admin: user.is_admin,
    },
    secretKey
  );

  return token;
};

module.exports = genAuthToken;
