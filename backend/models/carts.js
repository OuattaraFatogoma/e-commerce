const mongoose = require('mongoose');

const CartsSchema = mongoose.Schema({
    userId : {
        type: mongoose.Types.ObjectId,
        ref:'Peoples',
    },
    products: [{
        product: {
            type: mongoose.Types.ObjectId,
            ref:'Products',
        },
        amount: Number,
    }],
    totalPrice: Number,
    isPurshase: {
        type: Boolean,
        required: [true, "Please add thid field"]
    },
}, {timestamps: true})

module.exports = mongoose.model('Carts', CartsSchema);