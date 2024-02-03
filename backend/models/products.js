const mongoose = require('mongoose');

const ProductsSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please enter a title"],
    },
    price: {
        type: Number,
        required: [true, "Please enter a price"],
    },
    description: {
        type: String,
        required: [true, "Please enter a description"],
    },
    category: {
        type: String,
        required: [true, "Please enter a categorie"],
    },
    image: {
        type: String,
        required: [true, "Please enter a image url"],
    },
    rating: {
        rate: {
            type: Number,
            default: 4,
            max: 5,
            min: 1,
        },
        count: {
            type: Number,
            default: 1
        },
    }
}, {timestamps: true})

module.exports = mongoose.model('Products', ProductsSchema);