const rideService = require('../services/ride.services');
const {validationResult} = require('express-validator');
const mapService = require('../services/map.services');
const {sendMessageToSocketId} = require('../socket');
const rideModel = require('../models/ride.model');

module.exports.createRide = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }

    const {pickup, destination, vehicleType} = req.body;

    try {
        const ride = await rideService.createRide(pickup, destination, vehicleType, req.user._id);
        res.status(201).json(ride);

        const pickupCoords = await mapService.getCoordinates(pickup);

        console.log(pickupCoords)

        const captainsInRadius = await mapService.getCaptainInTheRadius(pickupCoords.ltd, pickupCoords.lang, 2); 

        ride.otp = "";

        const rideData = await rideModel.findOne({_id: ride._id}).populate('user');

        captainsInRadius.map(captain => {
            sendMessageToSocketId(captain.socketId, {
                event: 'new-ride',
                data: rideData
            })
        });
        
        // console.log(captainsInRadius)

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

module.exports.confirmRide = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }

    const {rideId} = req.body;

    try {
        const ride = await rideService.confirmRide({rideId, captain: req.captain});

        sendMessageToSocketId(ride.user.socketId, {
            event : 'ride-confirmed',
            data : ride
        });

        return res.status(200).json(ride);
    } catch(err) {
        return res.status(500).json({error: err.message});
    }
}