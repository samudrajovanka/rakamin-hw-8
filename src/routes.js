const filmsRoute = require('./api/routes/film.route');
const categoryRoute = require('./api/routes/category.route');

const routes = [
  {
    url: '/api/films',
    api: filmsRoute,
  },
  {
    url: '/api/categories',
    api: categoryRoute,
  }
];

module.exports = routes;
