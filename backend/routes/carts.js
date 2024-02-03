const express = require('express');
const {getAllCarts, createCart, getCart, updateCart, deleteCart} = require('../controllers/carts')
const router = express.Router();


router.route('/').get(getAllCarts).post(createCart);
router.route('/:id').get(getCart).patch(updateCart).delete(deleteCart);

module.exports = router;