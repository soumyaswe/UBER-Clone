const mapService = require("../services/map.services");
const { validationResult } = require("express-validator");

module.exports.getCoordinates = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { address } = req.query;

  try {
    const coordinates = await mapService.getCoordinates(address);
    res.status(200).json(coordinates);
  } catch (err) {
    res.status(404).json({ message: "Coordinates not found" });
  }
};

module.exports.getDistanceTime = async (req, res, next) => {
  try {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ errors: error.array() });
    }

    const { origin, destination } = req.query;

    const distanceTime = await mapService.getDistanceTime(origin, destination);

    return res.status(200).json(distanceTime);
  } catch (err) {
    return res.status(404).json({ message: "Distance and time not found" });
  }
};

module.exports.getAutoSuggestions = async (req, res, next) => {
  try {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ errors: error.array() });
    }

    const { input } = req.query;

    const autoSuggestion = await mapService.getAutoSuggestions(input);

    return res.status(200).json(autoSuggestion);
  } catch (err) {
    throw new Error("Error fetching auto suggestions");
  }
};
