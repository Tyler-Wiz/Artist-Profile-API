const createError = require("http-errors");

const protectedAdminRoutes = (req, res, next) => {
  const user = req.user;
  try {
    if (!user) {
      throw createError(401, "Unauthorized Access");
    } else if (!user.is_admin) {
      throw createError(401, "Unauthorized Access");
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { protectedAdminRoutes };
