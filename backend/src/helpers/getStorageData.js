const getStorageData = (start, end) => {
  var data;
  if (!data) {
    data = require('../storage/data.json');
  }
  return data.slice(start, end);
};

module.exports = getStorageData;
