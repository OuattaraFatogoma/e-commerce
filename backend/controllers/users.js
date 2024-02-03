const {StatusCodes} = require('http-status-codes');
const Peoples = require('../models/people');


const getAllUsers = async (req, res) =>{
    const users = await Peoples.find({accessLevel: 'user'})
    res.status(StatusCodes.OK).json(users);
}

const createUser = async (req, res) =>{
    const user = await Peoples.create(req.body)
    res.status(StatusCodes.CREATED).send({message: "User created successfully", user});
}

const getUser = async (req, res) =>{
    const userId = req.params.id;
    const user = await Peoples.findOne({_id: userId});
    if(!user) return res.status(StatusCodes.NOT_FOUND).send({message: "User Not found"});
    res.status(StatusCodes.OK).send(user);
}

const updateUser = async (req, res) =>{
    const userId = req.params.id;
    const user = await Peoples.findOneAndUpdate({_id: userId}, req.body, {new: true, runValidators: true});
    if(!user) return res.status(StatusCodes.NOT_FOUND).send({message: "User Not found"});
    res.status(StatusCodes.OK).send({message: "User updated successfully", user});
}

const deleteUser = async (req, res) =>{
    const userId = req.params.id;
    const user = await Peoples.findOneAndDelete({_id: userId});
    if(!user) return res.status(StatusCodes.NOT_FOUND).send({message: "User Not found"});
    res.status(StatusCodes.OK).send({message: "User deleted successfully"});
}

module.exports = {getAllUsers, createUser, getUser, updateUser, deleteUser}