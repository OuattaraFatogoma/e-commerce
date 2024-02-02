

const getAllProducts = async (req, res) =>{
    res.send("All Products");
}

const createProduct = async (req, res) =>{
    res.send("create Product");
}

const getProduct = async (req, res) =>{
    res.send("get Product");
}

const updateProduct = async (req, res) =>{
    res.send("update Product");
}

const deleteProduct = async (req, res) =>{
    res.send("delete Product");
}

module.exports = {getAllProducts, createProduct, getProduct, updateProduct, deleteProduct}