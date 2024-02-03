

const getAllCarts = async (req, res) =>{
    res.send("All Carts");
}

const createCart = async (req, res) =>{
    res.send("create Cart");
}

const getCart = async (req, res) =>{
    res.send("get Cart");
}

const updateCart = async (req, res) =>{
    res.send("update Cart");
}

const deleteCart = async (req, res) =>{
    res.send("delete Cart");
}

module.exports = {getAllCarts, createCart, getCart, updateCart, deleteCart}