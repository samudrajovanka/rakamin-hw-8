const FilmService = require("../../services/databases/FilmService");

exports.getAll = async (req, res) => {
  try {
    const filmService = new FilmService();

    const { category_id: categoryId } = req.query;
    if (categoryId) {
      const films = await filmService.getByCategory(categoryId);

      return res.status(200).json({
        success: true,
        message: 'Successfully retrieved all films',
        data: {
          films
        },
      });
    }

    const films = await filmService.getAll();

    res.status(200).json({
      success: true,
      message: 'Successfully retrieved all films',
      data: {
        films
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

exports.getById = async (req, res) => {
  try {
    const filmService = new FilmService();

    const filmId = req.params.id;
    const film = await filmService.getById(filmId);

    if (!film) {
      return res.status(404).json({
        success: false,
        message: 'Film not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Successfully retrieved film',
      data: {
        film
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
}
