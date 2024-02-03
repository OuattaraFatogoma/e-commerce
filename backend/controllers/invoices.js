

const getAllInvoices = async (req, res) =>{
    res.send("All Invoices");
}

const createInvoice = async (req, res) =>{
    res.send("create Invoice");
}

const getInvoice = async (req, res) =>{
    res.send("get Invoice");
}

const updateInvoice = async (req, res) =>{
    res.send("update Invoice");
}

const deleteInvoice = async (req, res) =>{
    res.send("delete Invoice");
}

module.exports = {getAllInvoices, createInvoice, getInvoice, updateInvoice, deleteInvoice}