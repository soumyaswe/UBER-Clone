const rideService = require('../services/ride.services');
const {validationResult} = require('express-validator');

module.exports.createRide = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }

    const {pickup, destination, vehicleType} = req.body;

    try {
        const ride = await rideService.createRide(pickup, destination, vehicleType, req.user._id);
        return res.status(201).json(ride);
    } catch(err) {
        return res.status(500).json({error: err.message});
    }
}

module.exports.getFare = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }
    
    const {pickup, destination} = req.query;

    try {
        const fare = await rideService.getFare(pickup, destination);
        return res.status(200).json(fare);
    } catch(err) {
        return res.status(500).json({error: err.message});
    }
}