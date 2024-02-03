const {StatusCodes} = require('http-status-codes');
const Products = require('../models/products');

const getAllProducts = async (req, res) =>{
    // TODO: add limit, sort, filtering, search
    const products = await Products.find();
    res.status(StatusCodes.OK).json(products);
}

const createProduct = async (req, res) =>{
    const product = await Products.create(req.body);
    res.status(StatusCodes.CREATED).send({message: "Product created successfully", product});
}

const getProduct = async (req, res) =>{
    const {id: productId} = req.params;
    const product = await Products.find({_id: productId});
    res.status(StatusCodes.OK).json(product);
}

const updateProduct = async (req, res) =>{
    const {id: productId} = req.params;
    const product = await Products.findOneAndUpdate({_id: productId}, req.body, {new: true, runValidators: true});
    res.status(StatusCodes.OK).send({message: "Product updated successfully", product});
}

const deleteProduct = async (req, res) =>{
    const {id: productId} = req.params;
    const product = await Products.findOneAndDelete({_id: productId});
    res.status(StatusCodes.OK).send({message: "Product deleted successfully"});
}

module.exports = {getAllProducts, createProduct, getProduct, updateProduct, deleteProduct}