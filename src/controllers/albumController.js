const CreateError = require("http-errors");
const AlbumModel = require("../models/albums");
const {
  validateAlbumInput,
  validateAlbumUpdate,
} = require("../utils/validation");
const { trimAndHyphenate } = require("../utils/createdUrl");

exports.createAlbum = async (req, res, next) => {
  try {
    const validate = await validateAlbumInput(req.body);
    if (validate) throw CreateError(404, `${validate}`);
    const url = trimAndHyphenate(req.body.album_title);
    let album = await AlbumModel.findUniqueAlbum(url);
    if (album) throw CreateError(404, `Album ${req.body.album_title} exists`);
    album = await AlbumModel.createAlbum({ ...req.body, url });
    res.status(201).send(album);
  } catch (error) {
    next(error);
  }
};

exports.getSingleAlbum = async (req, res, next) => {
  try {
    const url = req.params.id;
    let album = await AlbumModel.findUniqueAlbum(url);
    if (!album) throw CreateError(404, `Album Doesn't exists`);
    res.status(200).send(album);
  } catch (error) {
    next(error);
  }
};

exports.getAllAlbums = async (req, res, next) => {
  const search = req.query.album;
  try {
    const albums = await AlbumModel.findMany();
    if (search) {
      const filteredAlbum = albums.filter((album) =>
        album.album_title.toLowerCase().includes(search.toLowerCase())
      );
      if (filteredAlbum.length === 0) throw CreateError(404, "Album not found");
      res.send(filteredAlbum);
    } else {
      res.status(200).send(albums);
    }
  } catch (error) {
    next(error);
  }
};

exports.getArtistsAlbums = async (req, res, next) => {
  const artist_id = req.params.id;
  try {
    const artistAlbums = await AlbumModel.findManyByArtistId(artist_id);
    if (!artistAlbums) throw CreateError(404, `Album Doesn't exists`);
    res.send(artistAlbums);
  } catch (error) {
    next(error);
  }
};

exports.deleteAlbum = async (req, res, next) => {
  try {
    const url = req.params.id;
    let album = await AlbumModel.findUniqueAlbum(url);
    if (!album) throw CreateError(404, `Album Doesn't exists`);
    await AlbumModel.deleteAlbum(url);
    res.send(`Album has been deleted successfully`);
  } catch (error) {
    next(error);
  }
};

exports.updateAlbum = async (req, res, next) => {
  try {
    const url = req.params.id;
    let album = await AlbumModel.findUniqueAlbum(url);
    if (!album) throw CreateError(404, `Album Doesn't exists`);
    const validate = await validateAlbumUpdate(req.body);
    if (validate) throw CreateError(404, `${validate}`);
    await AlbumModel.updateAlbum({ ...req.body, url });
    res.send("Album updated successfully");
  } catch (error) {
    next(error);
  }
};
