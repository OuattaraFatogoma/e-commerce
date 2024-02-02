

const getAllUsers = async (req, res) =>{
    res.send("All users");
}

const createUser = async (req, res) =>{
    res.send("create user");
}

const getUser = async (req, res) =>{
    res.send("get user");
}

const updateUser = async (req, res) =>{
    res.send("update user");
}

const deleteUser = async (req, res) =>{
    res.send("delete user");
}

module.exports = {getAllUsers, createUser, getUser, updateUser, deleteUser}