const router = require('express').Router();
const CartController = require('../../controllers/cartController');
const verifyToken = require('../../middleware/auth');

router.post('/:productId', verifyToken, CartController.postCartItem);
router.get('/', verifyToken, CartController.getCartItem);
router.delete('/:productId', verifyToken, CartController.deleteCartItem);

module.exports = router;
