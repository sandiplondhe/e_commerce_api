const db = require('../models');
const Products = db.Products;
const Reviews = db.reviews;

const addReview = async (req, res) => {
    const reviews = await Reviews.findAndCountAll({
        include: Products,
    });
    res.status(200).send({ success: reviews });
};

module.exports = { addReview };
