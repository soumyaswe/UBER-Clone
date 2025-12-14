const rideModel = require("../models/ride.model");
const mapService = require("./map.services");
const crypto = require("crypto");

const getFare = async (pickup, destination) => {
  if (!pickup || !destination) {
    throw new Error("Pickup and destination are required");
  }

  const distanceTime = await mapService.getDistanceTime(pickup, destination);

  const baseFare = {
    auto: 30,
    car: 50,
    moto: 20,
  };
  const perKmRate = {
    auto: 10,
    car: 15,
    moto: 8,
  };
  const perMinRate = {
    auto: 2,
    car: 3,
    moto: 1.5,
  };

  const fare = {};
  for (const type of Object.keys(baseFare)) {
    fare[type] = Number(
      (
        baseFare[type] +
        (distanceTime.distance.value / 1000) * perKmRate[type] +
        (distanceTime.duration.value / 60) * perMinRate[type]
      ).toFixed(2)
    );
  }
  return fare;
};

module.exports.getFare = getFare;

const getOtp = (num) => {
  return crypto.randomInt(Math.pow(10, num - 1), Math.pow(10, num)).toString();
};

module.exports.createRide = async (pickup, destination, vehicleType, user) => {
  if (!pickup || !destination || !vehicleType) {
    throw new Error("All fields are required");
  }

  const fare = await getFare(pickup, destination);
  const distanceTime = await mapService.getDistanceTime(pickup, destination);

  const ride = await rideModel.create({
    user,
    pickup,
    destination,
    otp: getOtp(4),
    fare: fare[vehicleType],
    distance: distanceTime.distance.text,
    duration: distanceTime.duration.text,
  });

  return ride;
};

module.exports.confirmRide = async ({rideId, captain}) => {
  if (!rideId || !captain) {
    throw new Error("Ride Id or Captain Id is required");
  }

  await rideModel.findOneAndUpdate({
    _id : rideId
  }, {
    captain : captain._id,
    status : 'accepted'
  });

  const ride = await rideModel.findOne({_id : rideId}).populate('user');

  return ride;
}
