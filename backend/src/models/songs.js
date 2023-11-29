const db = require("../../config/index");

class SongsModel {
  static async createSong(data) {
    try {
      //SQL statement
      const statement = `INSERT INTO songs (artist_id, song_image, song_title,external_url,  url) 
                         VALUES($1, $2, $3, $4, $5) RETURNING *`;
      const values = [
        data.artist_id,
        data.song_image,
        data.song_title,
        data.external_url,
        data.url,
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
  static async findSongsByArtist(artist_id) {
    try {
      // SQL statement
      const statement = `SELECT s.song_image, s.song_title, a.artist_name, s.url 
                        FROM songs s 
                        JOIN artists a ON s.artist_id = a.id
                        WHERE s.artist_id = $1
                        `;
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
  static async findUniqueSong(url) {
    try {
      // SQL statement
      const statement = `SELECT * FROM songs WHERE url = $1`;
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
  static async updateSong(data) {
    try {
      // SQL statement
      const statement = `UPDATE songs SET song_image = $1, song_title = $2, external_url =$3 WHERE url = $4`;
      const values = [
        data.song_image,
        data.song_title,
        data.external_url,
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
  static async deleteSong(url) {
    try {
      //SQL statement
      const statement = `DELETE FROM songs WHERE url = $1`;
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
      //SQL statement
      const statement = `SELECT s.song_title, s.song_image, s.url, a.artist_name
                        FROM songs s
                        JOIN artists a ON s.artist_id = a.id `;
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
}

module.exports = SongsModel;
