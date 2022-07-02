const axios = require('axios');
const getStorageData = require('./getStorageData');

const secret = 'AIzaSyCg6O22nD-Tpam6DP4aZG-Y7a51xDGvMQg';

const getPlaces = async (start, end) => {
  let data = getStorageData(start, end);

  let results = await Promise.all(
    data.map(async (one) => {
      let elemResult = await axios.get(
        `https://maps.googleapis.com/maps/api/place/details/json?place_id=${one.place_id}&key=${secret}`
      );
      return {
        status: elemResult.data.status,
        result: elemResult.data.result,
        verified: one.email_1.status === 'RECEIVING',
        links: {
          facebook: one.facebook,
          youtube: one.youtube,
          twitter: one.twitter,
          instagram: one.instagram,
          goto: one.location_link,
        },
      };
    })
  );
  return results;
};

const getPlaceImages = async (size, reference) => {
  let results = await axios.get(
    `https://maps.googleapis.com/maps/api/place/photo?maxwidth=${size}&photo_reference=${reference}&key=${secret}`
  );
  return results.data;
};

module.exports = { getPlaces, getPlaceImages };
