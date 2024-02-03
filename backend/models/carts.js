const mongoose = require('mongoose');

const CartsSchema = mongoose.Schema({
    userId : {
        type: mongoose.Types.ObjectId,
        ref:'Users',
    },
    products: [{
        product: {
            type: mongoose.Types.ObjectId,
            ref:'Products',
        },
        amount: Number,
    }],
    totalPrice: Number,
    isPurshase: Boolean,
}, {timestamps: true})

module.exports = mongoose.model('Carts', CartsSchema);