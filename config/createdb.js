const { Client } = require("pg");
const { DB } = require("../config");

(async () => {
  const createDatabaseTables = [
    `CREATE TABLE IF NOT EXISTS users(
        id             SERIAL PRIMARY KEY,
        email          varchar(255) NOT NULL,
        password       varchar(255) NOT NULL,
         created_at   TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );`,
    `CREATE TABLE IF NOT EXISTS artists(
        id             SERIAL PRIMARY KEY,
        artist_name    varchar(255) NOT NULL,
        real_name      varchar(255) NOT NULL,
        hometown       varchar(255) NOT NULL,
        label          varchar(255) NOT NULL,
        featured_image varchar(255) NOT NULL,
         created_at   TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );`,
    `CREATE TABLE IF NOT EXISTS socials(
        id SERIAL PRIMARY KEY,
        artist_id  SERIAL NOT NULL,
        twitter varchar(255) NOT NULL,
        instagram varchar(255) NOT NULL,
        tikTok varchar(255) NOT NULL,
        created_at   TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (artist_id) REFERENCES artists(id) 
    );`,
    `CREATE TABLE IF NOT EXISTS artist_bio(
        id SERIAL PRIMARY KEY,
        artist_id SERIAL NOT NULL,
        bio TEXT NOT NULL,
        created_at   TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (artist_id) REFERENCES artists(id) 
    );`,
    `CREATE TABLE IF NOT EXISTS songs (
        id SERIAL PRIMARY KEY,
        artist_id SERIAL NOT NULL,
        song_image TEXT NOT NULL,
        song_title TEXT NOT NULL,
       created_at   TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (artist_id) REFERENCES artists(id) 
    );`,
    `CREATE TABLE IF NOT EXISTS albums(
        id SERIAL PRIMARY KEY,
        artist_id SERIAL NOT NULL,
        album_image TEXT NOT NULL,
       album_title TEXT NOT NULL,
       created_at   TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (artist_id) REFERENCES artists(id) 
    );`,
  ];

  try {
    const db = new Client({
      user: DB.PG_USER,
      host: DB.PG_HOST,
      database: DB.PG_DATABASE,
      password: DB.PG_PASSWORD,
      port: DB.PG_PORT,
      ssl: true,
    });

    await db.connect();

    for (const query of createDatabaseTables) {
      await db.query(query);
    }

    await db.end();
  } catch (error) {
    console.log("ERROR CREATING ONE OR MORE TABLES: ", error);
  }
})();
