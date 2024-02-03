require('dotenv').config();
require('express-async-errors');
const express = require('express');
const mongoose = require('mongoose');

//import routes
const usersRoute = require('./routes/users');
const productsRoute = require('./routes/products');
const adminsRoute = require('./routes/admins');
const cartsRoute = require('./routes/carts');
const invoicesRoute = require('./routes/invoices');
// import middlwares 
const notFoundMiddleware = require('./middleware/notFound');
const errorHandlerMiddleware = require('./middleware/errorHandler');

const app = express();
const port = process.env.PORT || 5000


// middlewares
app.use(express.json());


//routes

app.use('/api/v1/users', usersRoute);
app.use('/api/v1/products', productsRoute);
app.use('/api/v1/admins', adminsRoute);
app.use('/api/v1/carts', cartsRoute);
app.use('/api/v1/invoices', invoicesRoute);

app.use(errorHandlerMiddleware);
app.use(notFoundMiddleware);


//Connect database and listen at port
const start = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Database connection established");
        app.listen(port, console.log(`Server is listening on port ${port}`));
    } catch (error) {
        console.log(error.message);
    }
}
start();
