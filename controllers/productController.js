const db = require('../models');
const Products = db.products;

// @get ProductList
const getProductsList = async (req, res) => {
    if (req.query.page === undefined) {
        const products = await Products.findAll();
        return res.json({ ProductList: products });
    } else {
        await Products.findAndCountAll()
            .then((data) => {
                const limit = 5;
                const page = req.query.page;
                const pages = Math.ceil(data.count / limit);
                const offset = limit * (page - 1);
                Products.findAll({
                    limit: limit,
                    offset: offset,
                }).then((products) => {
                    return res.json({
                        ProductList: products,
                        count: data.count,
                        pages: pages,
                    });
                });
            })
            .catch(() => {
                res.status(500).send('Internal server errror');
            });
    }
};

//@single product
const singleProduct = async (req, res) => {
    const product = await Products.findOne({
        where: { id: req.params.id },
    });
    if (product != null) {
        res.status(200).send({ product: product });
    } else {
        res.status(404).send({ error: 'Product not found' });
    }
};

//@add Product
const addProduct = async (req, res) => {
    const productObj = {};
    const { title, description, category, price, count } = req.body;
    if (req.body) {
        productObj.name = title;
        productObj.description = description;
        productObj.category = category;
        productObj.price = price;
        productObj.imageUrl = req.file.path;
        productObj.count = count;
    }
    await Products.create(productObj)
        .then(() =>
            res.status(200).send({ success: 'Product added successfully' })
        )
        .catch((err) =>
            res
                .status(200)
                .send({ error: 'Something went wrong' + err.message })
        );
};

module.exports = {
    getProductsList,
    singleProduct,
    addProduct,
};
