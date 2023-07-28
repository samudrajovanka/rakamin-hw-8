const CategoryService = require("../../services/databases/CategoryService");

exports.getAll = async (req, res) => {
  try {
    const categoryService = new CategoryService();

    const categories = await categoryService.getAll();

    res.status(200).json({
      success: true,
      message: 'Successfully retrieved all categories',
      data: {
        categories
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
