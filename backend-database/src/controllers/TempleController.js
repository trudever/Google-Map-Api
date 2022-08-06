const db = require('../models');
const Temple = db.Temple;

exports.add = async (req, res) => {
  if (req.body.name === '') res.status(200).send({ message: 'Empty temple' });
  try {
    const one = await Temple.findOne({ where: { name: req.body.name } });
    if (one === null) {
      await Temple.create(req.body);
      res.status(200).send({ message: 'Successfully created a temple' });
    } else res.status(200).send({ message: 'Duplicate temple' });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.read = async (req, res) => {
  let { start, end, search, current } = req.body;
  const { status, keyword, country, state, city, category } = search.search;
  const { countryName, lat, lng } = current.current;
  if (!countryName.includes('United States') && !countryName.includes('US')) {
    res.status(200).send([]);
    return;
  }

  let data = await Temple.findAll();
  let result = [];
  data.map((item, index) => {
    if (
      item.business_status.toUpperCase().includes(status.toUpperCase()) &&
      item.full_address.toUpperCase().includes(state.toUpperCase()) &&
      item.full_address.toUpperCase().includes(city.toUpperCase()) &&
      item.full_address.toUpperCase().includes(country.toUpperCase()) &&
      item.name.toUpperCase().includes(keyword.toUpperCase())
    ) {
      result.push(item);
    }
  });

  const result1 = [];
  if ((lat !== 0) & (lng !== 0)) {
    if (!countryName.includes('United States') && !countryName.includes('US')) {
      res.status(200).send([]);
      return;
    }
    const nearPlaces = await getNearPlaces(lat, lng);
    result.map((item, index) => {
      nearPlaces.map((place, i) => {
        if (item.latitude === place.lat && item.longitude === place.lng)
          result1.push(item);
      });
    });
    result = result1;
  }

  result = result.slice(start, end);
  res.status(200).send(result);
};

exports.getNearTemple = async (req, res) => {
  let { lat, lng } = req.params;
  try {
    let result = await getNearPlaces(lat, lng);
    res.status(200).send(result);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: error.message || 'Something went wrong, please try again!',
    });
  }
};

exports.findAll = async (req, res) => {
  const result = await Temple.findAll();
  res.status(200).send(result);
};

exports.update = async (req, res) => {};

exports.delete = async (req, res) => {
  const { id } = req.params;
};

const getNearPlaces = async (lat, lng) => {
  let datas = await Temple.findAll();
  let response = [];
  let distances = [];
  datas.map(async (data, index) => {
    let loc = { lat: data.latitude, lng: data.longitude };
    let distance = calcCrow(loc.lat, loc.lng, lat, lng);
    response.push(loc);
    distances.push(distance);
  });
  let nearPlaces = [];
  let min1 = 0;
  min1 = Math.min(...distances);
  distances.map((distance, index) => {
    if (min1 === distance) {
      nearPlaces.push(response[index]);
      distances[index] = '300000';
    }
  });
  min1 = Math.min(...distances);
  distances.map((distance, index) => {
    if (min1 === distance) {
      nearPlaces.push(response[index]);
      distances[index] = '300000';
    }
  });
  min1 = Math.min(...distances);
  distances.map((distance, index) => {
    if (min1 === distance) {
      nearPlaces.push(response[index]);
      distances[index] = '300000';
    }
  });
  return nearPlaces;
};

function calcCrow(lat1, lon1, lat2, lon2) {
  var R = 6371; // km
  var dLat = toRad(lat2 - lat1);
  var dLon = toRad(lon2 - lon1);
  var lat1 = toRad(lat1);
  var lat2 = toRad(lat2);

  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;
  return d;
}

// Converts numeric degrees to radians
function toRad(Value) {
  return (Value * Math.PI) / 180;
}
