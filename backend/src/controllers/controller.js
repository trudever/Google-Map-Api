const place = require('../helpers/googleplace');

exports.googleplace = async (req, res) => {
  let { start, end } = req.params;
  let results = await place.getPlaces(start, end);
  res.send(results);
};

exports.googleplaceimage = async (req, res) => {
  let { size, reference } = req.params;
  let results = await place.getPlaceImages(size, reference);
  res.send({ source: results });
};
