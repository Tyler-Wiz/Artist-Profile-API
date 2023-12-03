const CreateError = require("http-errors");
const ArtistModel = require("../models/artist");
const SongsModel = require("../models/songs");
const { validateArtistInput } = require("../utils/validation");
const { trimAndHyphenate } = require("../utils/createdUrl");

exports.create = async (req, res, next) => {
  const {
    artist_name,
    real_name,
    label,
    instagram,
    twitter,
    hometown,
    bio,
    age,
  } = req.body;
  const featured_image = req.Location;
  const data = {
    featured_image,
    artist_name,
    real_name,
    label,
    instagram,
    twitter,
    hometown,
    bio,
    age,
  };
  try {
    const url = trimAndHyphenate(artist_name);
    const validate = await validateArtistInput(data);
    if (validate) throw CreateError(404, `${validate}`);
    const artist = await ArtistModel.findUnique(url);
    if (artist) throw CreateError(401, "Artist Already Exists");
    const newArtist = await ArtistModel.createArtist({ ...data, url });
    res.status(201).send(newArtist);
  } catch (error) {
    next(error);
  }
};
exports.getAllArtist = async (req, res, next) => {
  const searchKeyword = req.query.artist;
  try {
    const allArtist = await ArtistModel.findMany();
    if (searchKeyword) {
      filteredArtist = allArtist.filter((artist) =>
        artist.artist_name.toLowerCase().includes(searchKeyword.toLowerCase())
      );
      if (filteredArtist.length === 0)
        throw CreateError(404, `${searchKeyword} not found`);
      res.status(200).send(filteredArtist);
    } else {
      res.send(allArtist);
    }
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
  const {
    artist_name,
    real_name,
    label,
    instagram,
    twitter,
    hometown,
    bio,
    featured_image,
    age,
  } = req.body;
  try {
    const url = req.params.id;
    if (req.body.image) {
      const featured_image = req.Location;
      const data = {
        featured_image,
        artist_name,
        real_name,
        label,
        instagram,
        twitter,
        hometown,
        bio,
        age,
      };
      const validate = await validateArtistInput(data);
      if (validate) throw CreateError(404, `${validate}`);
      const artist = await ArtistModel.findUnique(url);
      if (!artist) throw CreateError(404, "Artist Doesn't Exists");
      await ArtistModel.updateArtist({ ...data, url });
      res
        .status(201)
        .send(`Artist: ${artist.artist_name} updated successfully`);
    } else {
      const data = {
        featured_image,
        artist_name,
        real_name,
        label,
        instagram,
        twitter,
        hometown,
        bio,
        age,
      };
      const validate = await validateArtistInput(data);
      if (validate) throw CreateError(404, `${validate}`);
      const artist = await ArtistModel.findUnique(url);
      if (!artist) throw CreateError(404, "Artist Doesn't Exists");
      await ArtistModel.updateArtist({ ...data, url });
      res.send(`Artist: ${artist.artist_name} updated successfully`);
    }
  } catch (error) {
    next(error);
  }
};

exports.deleteArtist = async (req, res, next) => {
  try {
    const url = req.params.id;
    const artist = await ArtistModel.findUnique(url);
    if (!artist) throw CreateError(404, "Artist Doesn't Exists");
    const artistSongs = await SongsModel.findSongsByArtist(artist.id);
    if (artistSongs)
      throw CreateError(404, "Artist With Songs Can't Be Deleted");
    await ArtistModel.deleteArtist(url);
    res.status(200).send(`Artist: ${artist.artist_name} deleted successfully`);
  } catch (error) {
    next(error);
  }
};
