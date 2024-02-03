require('dotenv').config();
const mongoose = require('mongoose');
const Products = require('./models/products');
const productsjson = require('./products.json')

const populate = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("DB connection established");
        await Products.create(productsjson);
        console.log("Products created");
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

populate();