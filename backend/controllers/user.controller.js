const userModel = require('../models/user.model');
const userService = require('../services/user.service');
const {validationResult} = require('express-validator');
const blacklistTokenModel = require('../models/blacklistToken.model');

module.exports.registerUser = async (req, res, next) => {
    const error = validationResult(req);

    if(!error.isEmpty()) {
        res.status(400).json({
            error : error.array()
        });
    }

    const {fullname, email, password} = req.body;
    
    const isUserAlreadyExist = await userModel.findOne({email});
    if(isUserAlreadyExist) {
        res.status(400).json({message : "User already exists"});
    }

    const hashedPassword = await userModel.hashPassword(password);

    const user = await userService.createUser({
        firstname : fullname.firstname,
        lastname : fullname.lastname,
        email,
        password : hashedPassword
    })

    const token = user.generateAuthToken();

    res.status(201).json({token, user});
}

module.exports.loginUser = async (req, res, next) => {
    const error = validationResult(req);

    if(!error.isEmpty()) {
        res.status(400).json({
            error : error.array()
        });
    }

    const {email, password} = req.body;
    
    const user = await userModel.findOne({email}).select('+password');
    if(!user) {
        return res.status(401).json({
            message : "Invalid email or password"
        });
    }
    const isMatch = await user.comparePassword(password, user.password);


    if(!isMatch) {
        return res.status(401).json({
            message : "Invalid email or password"
        });
    }

    const token = user.generateAuthToken();

    res.cookie('token', token);

    res.status(200).json({token, user});
}

module.exports.getUserProfile = async (req, res, next) => {
    res.status(200).json({user : req.user});
}

module.exports.logOutUser = async (req, res, next) => {
    res.clearCookie('token');

    const token = req.cookies.token || req.headers.authorization.split(' ')[1];

    await blacklistTokenModel.create({token});

    res.status(200).json({ message : "Logged out successfully"});
};