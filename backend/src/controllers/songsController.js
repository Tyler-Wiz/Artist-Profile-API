const CreateError = require("http-errors");
const {
  validateSongInput,
  validateSongUpdate,
} = require("../utils/validation");
const SongsModel = require("../models/songs");
const { trimAndHyphenate } = require("../utils/createdUrl");

exports.create = async (req, res, next) => {
  try {
    // Validate Destructure the Request Body
    const validate = await validateSongInput(req.body);
    if (validate) throw CreateError(404, `${validate}`);
    // Generate Url From Song title
    const url = trimAndHyphenate(req.body.song_title);
    let song = await SongsModel.findUniqueSong(url);
    if (song) throw CreateError(404, "Song already exists");
    song = await SongsModel.createSong({ ...req.body, url });
    res.status(201).send(song);
  } catch (error) {
    next(error);
  }
};

exports.searchSong = async (req, res, next) => {
  const search = req.query.song;
  try {
    const allSongs = await SongsModel.findMany();
    const filteredSongs = allSongs.filter((song) =>
      song.song_title.toLowerCase().includes(search.toLowerCase())
    );
    if (filteredSongs.length === 0) throw CreateError(404, "Song not found");
    res.status(200).send(filteredSongs);
  } catch (error) {
    next(error);
  }
};

exports.getSingleSong = async (req, res, next) => {
  const url = req.params.id;
  try {
    const song = await SongsModel.findUniqueSong(url);
    if (!song) throw CreateError(404, "Song Doesn't exists");
    res.send(song);
  } catch (error) {
    next(error);
  }
};

exports.getAllSongsById = async (req, res, next) => {
  const artist_id = req.params.id;
  try {
    const allSongs = await SongsModel.findSongsByArtist(artist_id);
    if (!allSongs) throw CreateError(404, "No Songs Available for artist");
    res.send(allSongs);
  } catch (error) {
    next(error);
  }
};

exports.updateSong = async (req, res, next) => {
  const url = req.params.id;
  try {
    const validate = await validateSongUpdate(req.body);
    if (validate) throw CreateError(404, `${validate}`);
    let song = await SongsModel.findUniqueSong(url);
    if (!song) throw CreateError(404, "Song Doesn't exists");
    await SongsModel.updateSong({ ...req.body, url });
    res.status(201).send(`Song: ${req.body.song_title} has been updated`);
  } catch (error) {
    next(error);
  }
};

exports.deleteSong = async (req, res, next) => {
  const url = req.params.id;
  try {
    let song = await SongsModel.findUniqueSong(url);
    if (!song) throw CreateError(404, "Song Doesn't exists");
    await SongsModel.deleteSong(url);
    res.status(201).send(`Song has been deleted`);
  } catch (error) {
    next(error);
  }
};
