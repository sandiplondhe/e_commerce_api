const router = require('express').Router();
const categoryController = require('../../controllers/categoryController');
router.get('/:category', categoryController.categorySearch);
module.exports = router;
