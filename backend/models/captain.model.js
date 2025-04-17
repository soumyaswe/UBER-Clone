const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const captainSchema = new mongoose.Schema({
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
        lowercase : true,
        minlength : [13, "Email should have minimum 13 characters"],
        match : [/.+@.+\..+/, "Please enter a valid email"]
    },

    password : {
        type : String,
        required : true,
        minlength : [5, "Password should have minimum 5 characters"],
        select : false
    },

    socketID : {
        type : String
    },

    status : {
        type : String,
        enum : ['active', 'inactive'],
        default : 'inactive'
    },

    vehicle : {
        color : {
            type : String,
            required : true,
            minlength : [3, "Color should have minimum 3 characters"]
        },

        plate : {
            type : String,
            required : true,
            minlength : [3, "Plate should have minimum 3 characters"]
        },

        capacity : {
            type : Number,
            required : true,
            minlength : [1, "Capacity must be atleast 1"]
        },

        vehicleType : {
            type : String,
            required : true,
            enum : ['car', 'bike', 'auto']
        },

    
    },

    location : {
        lat : {
            type : Number,
        },
        long : {
            type : Number,
        }
    },
});

captainSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({_id : this._id}, process.env.JWT_SECRET, {expiresIn : '24h'});
    return token;
};

captainSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

captainSchema.statics.hashPassword = async (password) => {
    return await bcrypt.hash(password, 10);
};

const captainModel = mongoose.model('captain', captainSchema);

module.exports = captainModel;
