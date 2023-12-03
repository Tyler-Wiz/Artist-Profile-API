const { Client } = require("pg");
const { DB } = require("./config");

(async () => {
  const createDatabaseTables = [
    `CREATE TABLE IF NOT EXISTS users(
        id             SERIAL PRIMARY KEY,
        email          varchar(255) NOT NULL,
        password       varchar(255) NOT NULL,
        is_admin       boolean NOT NULL,
        created_at     TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );`,
    `CREATE TABLE IF NOT EXISTS artists(
        id             SERIAL PRIMARY KEY,
        artist_name    varchar(255) NOT NULL,
        age            varchar(255) NOT NULL,
        real_name      varchar(255) NOT NULL,
        hometown       varchar(255) NOT NULL,
        label          varchar(255) NOT NULL,
        featured_image varchar(255) NOT NULL,
        url            varchar(255) NOT NULL,
        bio            TEXT NOT NULL,
        twitter        varchar(255),
        instagram      varchar(255),
        created_at     TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );`,
    `CREATE TABLE IF NOT EXISTS songs (
        id             SERIAL   PRIMARY KEY,
        artist_id      INTEGER NOT NULL,
        song_image     TEXT NOT NULL,
        song_title     TEXT NOT NULL,
        url            varchar(255) NOT NULL,
        external_url   varchar(255) NOT NULL,
        Released       varchar(255) NOT NULL,
        created_at     TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY    (artist_id) REFERENCES artists(id) 
    );`,
    `CREATE TABLE IF NOT EXISTS albums(
        id            SERIAL PRIMARY KEY,
        artist_id     INTEGER NOT NULL,
        album_image   TEXT NOT NULL,
        album_title   TEXT NOT NULL,
        url           varchar(255) NOT NULL,
        external_url   varchar(255) NOT NULL,
        created_at    TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (artist_id) REFERENCES artists(id) 
    );`,
    `CREATE TABLE IF NOT EXISTS session (
        sid           VARCHAR(255) PRIMARY KEY,
        sess          JSON,
        expire        TIMESTAMP DEFAULT CURRENT_TIMESTAMP
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
