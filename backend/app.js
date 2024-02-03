require('dotenv').config();
const express = require('express');
const usersRoute = require('./routes/users');
const productsRoute = require('./routes/products');
const adminsRoute = require('./routes/admins');
const cartsRoute = require('./routes/carts');
const invoicesRoute = require('./routes/invoices');
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



//Connect database and listen at port
const start = async () => {
    try {
        // connectDB
        app.listen(port, console.log(`Server is listening on port ${port}`));
    } catch (error) {
        console.log(error);
    }
}
start();
