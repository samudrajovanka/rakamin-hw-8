const PgConnection = require("../../lib/database/PgConnection");

class FilmService {
  async getAll() {
    try {
      const { rows } = await PgConnection.pool().query('SELECT * FROM film');

      return rows;
    } catch (error) {
      throw error;
    }
  }

  async getById(id) {
    try {
      const { rows } = await PgConnection.pool().query('SELECT * FROM film WHERE film_id = $1', [id]);

      return rows[0];
    } catch (error) {
      throw error;
    }
  }

  async getByCategory(categoryId) {
    try {
      const { rows } = await PgConnection.pool().query(`
        SELECT f.* FROM film_category fc
          INNER JOIN category c
            ON fc.category_id = c.category_id
          INNER JOIN film f
            ON fc.film_id = f.film_id
          WHERE c.category_id = $1`,
        [categoryId]
      );

      return rows;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = FilmService;
