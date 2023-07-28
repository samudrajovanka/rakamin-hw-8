const PgConnection = require("../../lib/database/PgConnection");

class CategoryService {
  async getAll() {
    try {
      const { rows } = await PgConnection.pool().query('SELECT * FROM category');

      return rows;
    } catch (error) {
      throw error;
    }
  }
};

module.exports = CategoryService;
