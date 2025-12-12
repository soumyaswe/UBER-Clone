const mongoose = require('mongoose');

const rideSchema = new mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'user',
        required : true
    },
    captain : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'captain',
    
    },
    pickup : {
        type : String,
        length : {min : 3},
        required : true
    },
    destination : {
        type : String,
        length : {min : 3},
        required : true
    },
    fare : {
        type : Number,
        required : true
    },
    status : {
        type : String,
        enum : ['pending', 'accepted', 'in-progress', 'completed', 'cancelled'],
        default : 'pending'
    },
    duration : {
        type : Number
    },
    distance : {
        type : Number
    },
    paymentId : {
        type : String
    },
    orderId : {
        type : String
    },
    signature : {
        type : String
    },
    otp : {
        type : String,
        required : true,
        select : false
    }
})

const rideModel = mongoose.model('ride', rideSchema);

module.exports = rideModel;