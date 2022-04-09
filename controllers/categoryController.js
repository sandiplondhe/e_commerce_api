const db = require('../models');
const Products = db.products;

// @get category
const categorySearch = async (req, res) => {
    const product = await Products.findAll({
        where: { category: req.params.category },
    });
    if (product != null) {
        res.status(200).send({ product: product });
    } else {
        res.status(404).send({ error: 'category not found' });
    }
};
module.exports = { categorySearch };
