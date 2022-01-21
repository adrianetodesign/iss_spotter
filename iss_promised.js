const request = require('request-promise-native');

const fetchMyIP = function () {
  return request(`https://api.ipify.org?format=json`);
}

/* 
 * Makes a request to freegeoip.app using the provided IP address, to get its geographical information (latitude/longitude)
 * Input: JSON string containing the IP address
 * Returns: Promise of request for lat/lon
 */
const fetchCoordsByIP = function(body) {
  let ip = JSON.parse(body).ip;
  return request(`https://api.freegeoip.app/json/${ip}?apikey=97bd2510-7a58-11ec-8a54-1df5667573f6`)
};

const fetchISSFlyOverTimes = function(body) {
  let lat = JSON.parse(body).latitude;
  let lon = JSON.parse(body).longitude;
  return request(`https://iss-pass.herokuapp.com/json/?lat=${lat}&lon=${lon}`)
}

const nextISSTimesForMyLocation = function() {
  return fetchMyIP()
  .then(fetchCoordsByIP)
  .then(fetchISSFlyOverTimes)
  .then((data) => {
    let response = JSON.parse(data).response;
    return response;
  })
}
module.exports = { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation };