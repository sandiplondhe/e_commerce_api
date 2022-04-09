require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// DB connection
require('./models');

app.get('/', (res) => {
    return res.json({ message: 'Home Page' });
});
// Api routes
app.use('/api/user/', require('./api/Users'));
app.use('/api/products/', require('./api/Products'));
app.use('/api/cart/', require('./api/Cart'));
app.use('/api/category/', require('./api/Category'));
app.use('/api/reviews', require('./api/Reviews'));

app.listen(process.env.PORT, () => {
    console.log(`Server is started ${process.env.PORT}`);
});
