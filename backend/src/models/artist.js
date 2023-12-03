const db = require("../../config/index");

class ArtistModel {
  static async createArtist(data) {
    try {
      //SQL Statement
      const statement = `INSERT INTO artists(artist_name,real_name,age,hometown,
                         label,featured_image,url,bio,twitter,instagram) 
                         VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) RETURNING *`;
      const values = [
        data.artist_name,
        data.real_name,
        data.age,
        data.hometown,
        data.label,
        data.featured_image,
        data.url,
        data.bio,
        data.twitter,
        data.instagram,
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
  static async findMany() {
    try {
      // SQL statement
      const statement = `SELECT id, created_at::date, artist_name, url, real_name, label FROM artists `;
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
  static async findUnique(url) {
    try {
      // SQL Statement
      const statement = `SELECT * FROM artists WHERE url = $1`;
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
  static async updateArtist(data) {
    try {
      // Generate SQL statement
      const statement = `UPDATE artists SET artist_name = $2,real_name = $3,
                        hometown = $4,label = $5, featured_image = $6,
                        bio = $7, twitter = $8,instagram = $9, age = $10
                        WHERE url = $1`;
      const values = [
        data.url,
        data.artist_name,
        data.real_name,
        data.hometown,
        data.label,
        data.featured_image,
        data.bio,
        data.twitter,
        data.instagram,
        data.age,
      ];
      const result = await db.query(statement, values);
      if (result.rows?.length) {
        // Return the first row that matches
        return result.rows[0];
      }
      return null;
    } catch (error) {
      throw new Error(error);
    }
  }
  static async deleteArtist(url) {
    try {
      // SQL Statement
      const statement = `DELETE FROM artists WHERE url = $1`;
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
}

module.exports = ArtistModel;
