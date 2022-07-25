const getWeather = require("../utils/weather");
const getLocation = require("../utils/location");

module.exports = async (args) => {
  try {
    const locationData = await getLocation();

    const weather = await getWeather(
      locationData.latitude,
      locationData.longitude
    );

    console.log(
      `Current conditions in ${locationData.city}, ${locationData.regionCode}:`
    );
  } catch (err) {
    console.error(err);
  }
};

// say hi
// get current time and current weather
// things i have to do today
// things on the calendar later this week
