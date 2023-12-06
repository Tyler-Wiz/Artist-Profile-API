const db = require("../../config/index");

class UserModel {
  static async createUser(email, password, is_admin, username) {
    try {
      // SQL Statement
      const statement = `INSERT INTO users(email, password,is_admin) VALUES($1,$2, $3, $4) RETURNING*`;
      const values = [email, password, is_admin, username];
      const result = await db.query(statement, values);
      if (result.rows?.length) {
        return result.rows[0];
      }
      return null;
    } catch (error) {
      throw new Error(error);
    }
  }
  static async findUnique(id) {
    try {
      //SQL Statement
      const statement = `SELECT * FROM users WHERE id = $1`;
      const values = [id];
      const result = await db.query(statement, values);
      if (result.rows?.length) {
        return result.rows[0];
      }
      return null;
    } catch (error) {
      throw new Error(error);
    }
  }
  static async findUserByEmail(email) {
    try {
      //Sql Statement
      const statement = `SELECT * FROM users WHERE email = $1`;
      const values = [email];
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

module.exports = UserModel;
