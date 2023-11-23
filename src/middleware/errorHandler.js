const errorHandler = (error, req, res, next) => {
  res.status(error.status).json({
    errorMessage: error.message,
    status: error.status,
  });
};

module.exports = { errorHandler };
