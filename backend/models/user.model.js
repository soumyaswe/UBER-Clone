const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
   
    fullname : {
        firstname : {
            type : String,
            required : true,
            minlength : [3, "First name should have minimum 3 characters"]
        },
        
        lastname : {
            type : String,
            minlength : [3, "Last name should have minimum 3 characters"]
        },

    },

    email : {
        type : String,
        required : true,
        unique : true,
        minlength : [13, "Email should have minimum 13 characters"]
    },

    password : {
        type : String,
        required : true,
        minlength : [5, "Password should have minimum 5 characters"],
        select : false
    },

    socketId : {
        type : String
    }
})

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({_id : this._id}, process.env.JWT_SECRET, {expiresIn : '24h'});
    return token;
};

userSchema.methods.comparePassword = async (password,hashPassword) => {
    return await bcrypt.compare(password, hashPassword);
};

userSchema.statics.hashPassword = async (password) => {
    return await bcrypt.hash(password, 10);
};

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;