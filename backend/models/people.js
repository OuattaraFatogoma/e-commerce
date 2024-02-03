const bscrypt = require('bcryptjs');
const mongoose = require('mongoose');

const PeoplesSchema = mongoose.Schema({
    name: {
        type: String,
        minLength: 3,
        maxLength: 50,
        required: [true, "Please enter a name"],
    },
    email: {
        type: String,
        lowercase: true,
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
    accessLevel:{
        type: String,
        enum:{
            values: ["user","admin", "manager"],
            message: "Acess level must be admin or manager"
        },
        default: "user"
    }
})

//hash the password before save and update
PeoplesSchema.pre('save', async function(next){
    const salt = await bscrypt.genSalt(10)
    this.password = await bscrypt.hash(this.password, salt);
    next();
})



module.exports = mongoose.model('Peoples', PeoplesSchema);