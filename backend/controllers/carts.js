const {StatusCodes} = require('http-status-codes');
const Carts = require('../models/carts');


const getAllCarts = async (req, res) =>{
    const carts = await Carts.find()
    res.status(StatusCodes.OK).json(carts);
}

const createCart = async (req, res) =>{
    const cart = await Carts.create(req.body)
    res.status(StatusCodes.CREATED).send({message: "cart created successfully" , cart});
}

const getCart = async (req, res) =>{
    const cartId = req.params.id
    const cart = await Carts.find({_id: cartId});
    if(!cart) return res.status(StatusCodes.NOT_FOUND).send({message: "Cart not found"});
    res.status(StatusCodes.OK).send(cart);
}

const updateCart = async (req, res) =>{
    const cartId = req.params.id
    const cart = await Carts.findOneAndUpdate({_id: cartId}, req.body, {new: true, runValidators: true});
    if(!cart) return res.status(StatusCodes.NOT_FOUND).send({message: "Cart not found"});
    res.status(StatusCodes.OK).send({message: "cart updated successfully" , cart});
}

const deleteCart = async (req, res) =>{
    const cartId = req.params.id
    const cart = await Carts.findOneAndDelete({_id: cartId});
    if(!cart) return res.status(StatusCodes.NOT_FOUND).send({message: "Cart not found"});
    res.status(StatusCodes.OK).send({message: "cart deleted successfully"});
}

module.exports = {getAllCarts, createCart, getCart, updateCart, deleteCart}