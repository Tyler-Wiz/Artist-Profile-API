const ChartModel = require("../models/chart");
const CreateError = require("http-errors");

exports.create = async (req, res, next) => {
  try {
    const song = await ChartModel.findSongById(req.body);
    if (!song) throw CreateError(404, "Song Doesn't exists");
    await ChartModel.createChart(req.body);
    res.status(201).send("chart created successfully");
  } catch (error) {
    next(error);
  }
};
