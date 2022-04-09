const db = require('../models');
const Products = db.products;
const Users = db.users;
const Cart = db.cart;

const postCartItem = async (req, res) => {
    const productId = req.params.productId;
    const product = await Products.findOne({
        where: { id: productId },
        attributes: ['id', 'name', 'price'],
    });
    const user = await Users.findOne({ where: { email: req.user.email } });
    const cartItem = {
        product_id: product.id,
        name: product.name,
        price: product.price,
        user_id: user.id,
    };
    await Cart.create(cartItem)
        .then(() =>
            res
                .status(200)
                .send({ success: 'Product added into cart successfully' })
        )
        .catch((err) =>
            res
                .status(200)
                .send({ error: 'Something went wrong' + err.message })
        );
};

const getCartItem = async (req, res) => {
    const cartDetails = await Cart.findAll();
    return res.json({ success: cartDetails });
};

const deleteCartItem = async (req, res) => {
    await Cart.destroy({ cart: req.params.productId });
    return res.json({ success: 'Cart Item deleted successfully' });
};

module.exports = { postCartItem, getCartItem, deleteCartItem };
