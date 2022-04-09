const router = require('express').Router();
const ProductController = require('../../controllers/productController');
const parser = require('../../utils/cloudinaryConfig');
const auth = require('../../middleware/auth');
router.get('/', ProductController.getProductsList);
router.get('/:id', ProductController.singleProduct);
router.post('/', auth, parser.single('img'), ProductController.addProduct);
module.exports = router;
