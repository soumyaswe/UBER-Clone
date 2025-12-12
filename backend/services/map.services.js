const axios = require("axios");
const captainModel = require("../models/captain.model");

module.exports.getCoordinates = async (address) => {
    try {
        const apiKey = process.env.GOOGLE_MAPS_API;
        const response = await axios.get(
            "https://maps.googleapis.com/maps/api/geocode/json",
            {
                params: {
                    address: address,
                    key: apiKey,
                },
            }
        );

        if (
            response.data.status === "OK" &&
            response.data.results &&
            response.data.results.length > 0
        ) {
            const location = response.data.results[0].geometry.location;
            return {
                ltd: location.lat,
                lang: location.lng,
            };
        } else {
            throw new Error("No results found for the given address.");
        }
    } catch (error) {
        throw new Error("Failed to fetch coordinates: " + error.message);
    }
};

module.exports.getDistanceTime = async (origin, destination) => {
    if(!origin || !destination) {
        throw new Error("Origin and destination are required.");
    }

    const apiKey = process.env.GOOGLE_MAPS_API;

    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(origin)}&destinations=${encodeURIComponent(destination)}&key=${apiKey}`;

    try {
        const response = await axios.get(url);
        if (response.data.status === "OK") {
            if (response.data.rows[0].elements[0] === "ZERO_RESULT") {
                throw new Error("No routes found");
            } 
            return response.data.rows[0].elements[0];
        } else {
            throw new Error("Failed to fetch distance and time.");
        }
    } catch (err) {
        throw new Error("Error fetching distance and time: " + err.message);
    }
}

module.exports.getAutoSuggestions = async (input) => {
    if(!input) {
        throw new Error("Query is required");
    }

    const apiKey = process.env.GOOGLE_MAPS_API;

    const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(input)}&key=${apiKey}`;

    try {
        const response = await axios.get(url);
        if(response.data.status === "OK"){
            return response.data.predictions;
        } else {
            throw new Error("Unable to fetch suggestions");
        }
    } catch (err) {
        throw new Error("Error fetching auto suggestions");
    }
}

module.exports.getCaptainInTheRadius = async (ltd, lng, radius) => {
    const captains = await captainModel.find({
        location : {
            $geoWithin : {
                $centerSphere : [ [ ltd, lng ], radius / 6378.1 ]
            }
        }
    });

    return captains;
}