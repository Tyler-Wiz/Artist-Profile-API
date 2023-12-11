const db = require("../../config/index");

class ChartModel {
  static async createChart(data) {
    try {
      const statement = `INSERT INTO charts(position, song_id) VALUES ($1, $2) RETURNING *`;
      const values = [data.position, data.song_id];
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
  static async findSongById(data) {
    try {
      const statement = `SELECT * FROM songs WHERE id = $1`;
      const values = [data.song_id];
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
}

module.exports = ChartModel;
