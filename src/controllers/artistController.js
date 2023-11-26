const CreateError = require("http-errors");
const ArtistModel = require("../models/artist");
const { validateArtistInput } = require("../utils/validation");

exports.create = async (req, res, next) => {
  const data = req.body;
  const { url } = data;
  try {
    const validate = await validateArtistInput(data);
    if (validate) throw CreateError(401, "Invalid Input");
    const artist = await ArtistModel.findUnique(url);
    if (artist) throw CreateError(401, "Artist Already Exists");
    const newArtist = await ArtistModel.createArtist(data);
    res.status(201).send(newArtist);
  } catch (error) {
    next(error);
  }
};

exports.getUniqueArtist = async (req, res, next) => {
  const url = req.params.id;
  try {
    const artist = await ArtistModel.findUnique(url);
    if (!artist) throw CreateError(404, "Artist Doesn't Exists");
    res.status(200).send(artist);
  } catch (error) {
    next(error);
  }
};

exports.updateArtist = async (req, res, next) => {
  try {
    const data = req.body;
    const url = req.params.id;
    const validate = await validateArtistInput(data);
    if (validate) throw CreateError(401, "Invalid Input");
    const artist = await ArtistModel.findUnique(url);
    if (!artist) throw CreateError(404, "Artist Doesn't Exists");
    await ArtistModel.updateArtist(data);
    res.send(`Artist: ${artist.artist_name} updated successfully`);
  } catch (error) {
    next(error);
  }
};

exports.deleteArtist = async (req, res, next) => {
  try {
    const url = req.params.id;
    const artist = await ArtistModel.findUnique(url);
    if (!artist) throw CreateError(404, "Artist Doesn't Exists");
    await ArtistModel.deleteArtist(url);
    res.status(200).send(`Artist: ${artist.artist_name} deleted successfully`);
  } catch (error) {
    next(error);
  }
};
