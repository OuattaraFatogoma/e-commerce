

const getAllAdmins = async (req, res) =>{
    res.send("All Admins");
}

const createAdmin = async (req, res) =>{
    res.send("create Admin");
}

const updateAdmin = async (req, res) =>{
    res.send("update Admin");
}

const deleteAdmin = async (req, res) =>{
    res.send("delete Admin");
}
 
module.exports = {getAllAdmins, createAdmin, updateAdmin, deleteAdmin}