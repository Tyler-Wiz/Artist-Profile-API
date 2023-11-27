const express = require("express");
const Auth = require("./src/routes/auth");
const Artist = require("./src/routes/artist");
const albumRouter = require("./src/routes/album");
const Songs = require("./src/routes/songs");
const expressConfig = require("./config/express");
const SwaggerConfig = require("./config/swagger");

const app = express();

// Apply express configurations
expressConfig(app);

// Apply Swagger configurations
SwaggerConfig(app);

app.get("", (req, res) => {
  res.status(200);
  res.send(`Welcome to the server`);
});

// Apply routes -----------------------------
app.use("/api/auth", Auth);
app.use("/api/artist", Artist);
app.use("/api/songs", Songs);
app.use("/api/albums", albumRouter);

// Error Handler -----------
app.use((error, req, res, next) => {
  res.status(error.status).json({
    errorMessage: error.message,
    status: error.status,
  });
});

module.exports = app;
