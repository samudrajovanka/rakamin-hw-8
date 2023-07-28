const fs = require('fs');
const PgConnection = require('./PgConnection');

if (process.env.NODE_ENV !== 'production') {
  const seedQuery = fs.readFileSync('./src/lib/database/data/seeding.sql', { encoding: 'utf8' });
  PgConnection.pool().query(seedQuery, (err, res) => {
      if (err) {
        console.log('Error while seeding database!');
        console.error(err);
      } else {
        console.log('Seeding Completed!');
        console.log(res)
      }

      PgConnection.pool().end()
  });
}
