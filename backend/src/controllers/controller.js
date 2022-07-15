const place = require('../helpers/googleplace')

exports.googleplace = async (req, res) => {
  let { start, end, search } = req.body
  let results = await place.getPlaces(start, end, search)
  res.send(results)
}

exports.googleplaceimage = async (req, res) => {
  let { size, reference } = req.params
  let results = await place.getPlaceImages(size, reference)
  res.send({ source: results })
}

exports.getNearTemple = async (req, res) => {
  let { lat, lng } = req.params
  try {
    let result = await place.getNearPlaces(lat, lng)
    res.status(200).send(result)
  } catch (error) {
    console.log(error)
    res.status(500).send({
      message: error.message || 'Something went wrong, please try again!',
    })
  }
}
