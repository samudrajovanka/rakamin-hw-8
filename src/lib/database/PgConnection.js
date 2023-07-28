const Pool = require('pg').Pool

class PgConnection {
  static #instance = null;

  static pool() {
    if (this.#instance === null) {
      const pool = new Pool({
        user: 'postgres',
        host: 'localhost',
        database: 'dvdrental',
        password: '#Psql11534990',
        port: 5432,
      });

      this.#instance = pool;
    }

    return this.#instance;
  }
};

module.exports = PgConnection;
