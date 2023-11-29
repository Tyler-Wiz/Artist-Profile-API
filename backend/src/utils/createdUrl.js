const CreateError = require("http-errors");

const trimAndHyphenate = (inputString) => {
  // Trim leading ,trailing spaces & Remove characters
  let cleanedString = inputString.trim().replace(/["().\-]/g, "");
  // Replace spaces with hyphens
  let hyphenatedString = cleanedString.replace(/\s+/g, "-");
  if (!hyphenatedString) throw CreateError(404, "Invalid hyphenation");
  return hyphenatedString.toLowerCase();
};

module.exports = { trimAndHyphenate };
