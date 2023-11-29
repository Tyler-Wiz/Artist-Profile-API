const app = require("./app");

// Listen on port 4000
const PORT = 4000 || process.env.PORT;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
