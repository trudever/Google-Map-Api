const axios = require('axios')
const fs = require('fs')
const { getAllData, getJSONData } = require('./getStorageData')

const secret = 'AIzaSyDMknZo9IwmJxhValQrdZWfhR4pPy97IF0'

const getPlaces = async (start, end, search, current) => {
  // // let data = getStorageData(start, end)
  // let data = getJSONData()
  // let results = await Promise.all(
  //   data.map(async (one) => {
  //     let elemResult = await axios.get(
  //       `https://maps.googleapis.com/maps/api/place/details/json?place_id=${one.place_id}&key=${secret}`
  //     )
  //     if (elemResult) {
  //       return {
  //         status: elemResult.data.status,
  //         result: { ...elemResult.data.result, email: one.email_1 },
  //         verified: one.email_1.status === 'RECEIVING',
  //         links: {
  //           facebook: one.facebook,
  //           youtube: one.youtube,
  //           twitter: one.twitter,
  //           instagram: one.instagram,
  //           goto: one.location_link,
  //         },
  //       }
  //     }
  //   })
  // )
  // fs.writeFile('/mapinfo.json', JSON.stringify(results), (err) => {
  //   if (err) {
  //     console.error(err)
  //   }
  // })
  // // return results
  const { status, keyword, country, state, city, category } = search.search
  const { countryName, lat, lng } = current.current
  console.log(countryName)
  if (!countryName.includes('United States') && !countryName.includes('US'))
    return []
  let data = getAllData()
  let result = []
  data.map((item, index) => {
    const test = JSON.stringify(item)

    if (
      item.business_status.toUpperCase().includes(status.toUpperCase()) &&
      item.state.toUpperCase().includes(state.toUpperCase()) &&
      item.city.toUpperCase().includes(city.toUpperCase()) &&
      item.country.toUpperCase().includes(country.toUpperCase()) &&
      item.name.toUpperCase().includes(keyword.toUpperCase())
    ) {
      result.push(item)
    }
  })

  const result1 = []
  if ((lat !== 0) & (lng !== 0)) {
    const nearPlaces = await getNearPlaces(lat, lng)
    console.log(nearPlaces)
    result.map((item, index) => {
      nearPlaces.map((place, i) => {
        if (item.latitude === place.lat && item.longitude === place.lng)
          result1.push(item)
      })
    })
    console.log(result1)
    result = result1
  }

  result = result.slice(start, end)
  return result
}

const getPlaceImages = async (size, reference) => {
  // let results = await axios.get(
  //   `https://maps.googleapis.com/maps/api/place/photo?maxwidth=${size}&photo_reference=${reference}&key=${secret}`
  // )
  // return results.data
}

const getNearPlaces = async (lat, lng) => {
  let datas = getAllData()
  let response = []
  let distances = []
  datas.map(async (data, index) => {
    let loc = { lat: data.latitude, lng: data.longitude }
    let distance = calcCrow(loc.lat, loc.lng, lat, lng)
    response.push(loc)
    distances.push(distance)
  })
  // console.log(distances)
  let nearPlaces = []
  let min1 = 0
  min1 = Math.min(...distances)
  distances.map((distance, index) => {
    if (min1 === distance) {
      nearPlaces.push(response[index])
      distances[index] = '300000'
    }
  })
  min1 = Math.min(...distances)
  distances.map((distance, index) => {
    if (min1 === distance) {
      nearPlaces.push(response[index])
      distances[index] = '300000'
    }
  })
  min1 = Math.min(...distances)
  distances.map((distance, index) => {
    if (min1 === distance) {
      nearPlaces.push(response[index])
      distances[index] = '300000'
    }
  })
  // console.log(nearPlaces)
  return nearPlaces
}

function calcCrow(lat1, lon1, lat2, lon2) {
  var R = 6371 // km
  var dLat = toRad(lat2 - lat1)
  var dLon = toRad(lon2 - lon1)
  var lat1 = toRad(lat1)
  var lat2 = toRad(lat2)

  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2)
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  var d = R * c
  return d
}

// Converts numeric degrees to radians
function toRad(Value) {
  return (Value * Math.PI) / 180
}

module.exports = { getPlaces, getPlaceImages, getNearPlaces }
