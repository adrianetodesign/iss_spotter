const { nextISSTimesForMyLocation } = require('./iss_promised');

nextISSTimesForMyLocation()
.then(response => {
  for (obj of response) {
    console.log(`Next pass at ${Date(obj.risetime)} for ${obj.duration} seconds!`)
  };
})
.catch((error) => {
  console.log("Something went wrong: ", error.message);
});