const express = require("express");
const Auth = require("./src/routes/auth");
const { errorHandler } = require("./src/middleware/errorHandler");
const expressConfig = require("./config/express");
require("./src/middleware/passportLocal");

const app = express();

// Apply express configurations
expressConfig(app);

app.get("/", (req, res) => {
  res.send(`Welcome to the server`);
});

// Apply routes -----------------------------
app.use("/api/auth", Auth);

// Apply Error Handler Middleware -----------
// app.use(errorHandler);

// Listen on port 4000
const PORT = 4000 || process.env.PORT;
app.listen(PORT, (err) => {
  console.log(`listening on port ${PORT}`);
});
