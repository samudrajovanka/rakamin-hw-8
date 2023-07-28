const Pool = require('pg').Pool

class PgConnection {
  static #instance = null;

  static pool() {
    if (PgConnection.#instance === null) {
      const pool = new Pool({
        user: process.env.PG_USER,
        host: process.env.PG_HOST,
        database: process.env.PG_DATABASE,
        password: process.env.PG_PASSWORD,
        port: 5432,
      });

      PgConnection.#instance = pool;
    }

    return PgConnection.#instance;
  }
};

module.exports = PgConnection;
