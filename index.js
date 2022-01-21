// index.js
const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
//   myIP = ip;
// });

fetchCoordsByIP("this is not an IP", (err, coords) => {
  if (err) {
    console.log(`Issue grabbing coordinates.`, err);
    return;
  }
  console.log(`Coordinates for our ip Address:`, coords);
});