const fs = require('fs');
const PgConnection = require('./PgConnection');
require('dotenv').config();

const seeding = async () => {
  if (process.env.NODE_ENV !== 'production') {
    try {
      const seedQuery = fs.readFileSync('./src/lib/database/data/seeding.sql', { encoding: 'utf8' });
      const result = await PgConnection.pool().query(seedQuery);

      console.log('Seeding Completed!');
      console.log(result)
    } catch (error) {
      console.log('Error while seeding database!');
      console.error(error);
    } finally {
      PgConnection.pool().end()
    }
  }
};

seeding();
