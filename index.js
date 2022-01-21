// index.js
const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require('./iss');
const { fetchISSFlyOverTimes } = require('./iss');
const { nextISSTimesForMyLocation } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
//   myIP = ip;
// });

// fetchCoordsByIP("this is not an IP", (err, coords) => {
//   if (err) {
//     console.log(`Issue grabbing coordinates.`, err);
//     return;
//   }
//   console.log(`Coordinates for our ip Address:`, coords);
// });

// fetchISSFlyOverTimes({latitude: 10, longitude: "invalid data"}, (err, coords) => {
//   if (err) {
//     console.log(`Issue grabbing coordinates.`, err);
//     return;
//   }
//   console.log(`Coordinates for our ip Address:`, coords);
// });

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  console.log(passTimes);
});