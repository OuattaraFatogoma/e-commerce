const mongoose = require('mongoose');

const AdminsSchema = mongoose.Schema({
    name: {
        type: String,
        minLength: 3,
        maxLength: 50,
        required: [true, "Please enter a name"],
    },
    email: {
        type: String,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Please provide a valid email',
          ],
        required: [true, "Please enter an email"],
        unique: [true, "Email already exists"]
    },
    password: {
        type: String,
        minLength: 6,
        required: [true, "Please enter a password"],
    },
    acessLevel:{
        type: String,
        enum:{
            values: ["admin", "manager"],
            message: "Acess level must be admin or manager"
        },
        default: "admin"
    }
})

module.exports = mongoose.model('Admins', AdminsSchema);