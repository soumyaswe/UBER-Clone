const express = require('express');
const router = express.Router();
const  {body} = require('express-validator');
const captainController = require('../controllers/captain.controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.post('/register', [
    body('email').isEmail().withMessage("Invalid Email"),
    body('fullname.firstname').isLength({min : 3}).withMessage("First name should have minimum 3 characters"),
    body('password').isLength({min : 5}).withMessage("Password should have minimum 5 characters"),
    body('vehicle.color').isLength({min : 3}).withMessage("Color should have minimum 3 characters"),
    body('vehicle.plate').isLength({min : 3}).withMessage("Plate should have minimum 3 characters"),
    body('vehicle.capacity').isLength({min : 1}).withMessage("Capacity must be atleast 1"),
    body('vehicle.vehicleType').isLength({min : 3}).withMessage("Vehicle type should have minimum 3 characters"),
],
    captainController.registerCaptain
);

router.post('/login', [
    body('email').isEmail().withMessage("Invalid Email"),
    body('password').isLength({min : 5}).withMessage("Password should have minimum 5 characters")
],
    captainController.loginCaptain
);

router.get('/profile', authMiddleware.authCaptain , captainController.getCaptainProfile);

router.get('/logout', authMiddleware.authCaptain, captainController.logoutCaptain);

module.exports = router;