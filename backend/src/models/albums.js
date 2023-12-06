const db = require("../../config/index");

class AlbumModel {
  // Create a new album
  static async createAlbum(data) {
    try {
      //SQL statement
      const statement = `INSERT INTO albums(artist_id, album_image, album_title,external_url, url, released) 
                         VALUES($1, $2, $3, $4, $5, $6) RETURNING *`;
      const values = [
        data.artist_id,
        data.album_image,
        data.album_title,
        data.external_url,
        data.url,
        data.released,
      ];
      const result = await db.query(statement, values);
      if (result.rows?.length) {
        return result.rows[0];
      } else {
        return null;
      }
    } catch (error) {
      throw new Error(error);
    }
  }
  static async findUniqueAlbum(url) {
    try {
      // SQL statement
      const statement = `SELECT a.album_image, a.album_title,a.external_url,
                         a.artist_id, ar.artist_name, a.url, a.released
                        FROM albums a
                        JOIN artists ar ON a.artist_id = ar.id
                        WHERE a.url = $1`;
      const values = [url];
      const result = await db.query(statement, values);
      if (result.rows?.length) {
        return result.rows[0];
      }
      return null;
    } catch (error) {
      throw new Error(error);
    }
  }
  static async findMany() {
    try {
      // SQL statement
      const statement = `SELECT al.url, al.album_title As title, al.released as "released date",
                        a.artist_name as artist
                        FROM albums al
                        JOIN artists a ON a.id = al.artist_id`;
      const values = [];
      const result = await db.query(statement, values);
      if (result.rows?.length) {
        return result.rows;
      }
      return null;
    } catch (error) {
      throw new Error(error);
    }
  }
  static async findManyByArtistId(artist_id) {
    try {
      // SQL statement
      const statement = `SELECT a.album_image, a.album_title,a.external_url, 
                         a.artist_id, ar.artist_name, a.url
                        FROM albums a
                        JOIN artists ar ON a.artist_id = ar.id
                        WHERE a.artist_id = $1`;
      const values = [artist_id];
      const result = await db.query(statement, values);
      if (result.rows?.length) {
        return result.rows;
      }
      return null;
    } catch (error) {
      throw new Error(error);
    }
  }
  static async deleteAlbum(url) {
    try {
      // SQL statement
      const statement = `DELETE FROM albums WHERE url = $1`;
      const values = [url];
      const result = await db.query(statement, values);
      if (result.rows?.length) {
        return true;
      }
      return false;
    } catch (error) {
      throw new Error(error);
    }
  }

  static async updateAlbum(data) {
    try {
      // SQL statement
      const statement = `UPDATE albums SET album_image = $1, 
                         album_title = $2, external_url = $3, released = $4
                         WHERE url = $5`;
      const values = [
        data.album_image,
        data.album_title,
        data.external_url,
        data.released,
        data.url,
      ];
      const result = await db.query(statement, values);
      if (result.rows?.length) {
        return result.rows[0];
      }
      return null;
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = AlbumModel;
