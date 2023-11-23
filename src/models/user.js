const db = require("../../config/index");

class UserModel {
  async createUser(email, password) {
    try {
      // SQL Statement
      const statement = `INSERT INTO users(email, password) VALUES($1,$2) RETURNING*`;
      const values = [email, password];
      const result = await db.query(statement, values);
      if (result.rows?.length) {
        return result.rows[0];
      }
      return null;
    } catch (error) {
      throw new Error(error);
    }
  }
  async findUnique(id) {
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
  async findUserByEmail(email) {
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

module.exports = new UserModel();
