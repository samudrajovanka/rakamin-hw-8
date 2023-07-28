const router = require('express').Router();
const filmController = require('../controllers/film.controller');

router.get('/', filmController.getAll);
router.get('/:id', filmController.getById);

module.exports = router;
