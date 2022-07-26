const getWeather = require("../utils/weather");
const getLocation = require("../utils/location");

module.exports = async (args) => {
  try {
    const locationData = await getLocation();

    const weather = await getWeather(locationData.region);
    // console.log(weather);
    let current = weather[0];
    let forecast = weather[1];

    console.log(`Today in ${locationData.city}, ${locationData.regionCode}:`);
    console.log(
      `It is ${current.conditions} and ${current.temp} F, but it feels like ${current.feelsLike} F.`
    );
    console.log(
      `Today's low is ${forecast.today.minTemp} F with a high of ${forecast.today.maxTemp} F.`
    );
    console.log(`Conditions are ${forecast.today.conditions}.`);
    console.log(
      `Chances of rain are ${forecast.today.chanceOfRain}% and chances of snow are ${forecast.today.chanceOfSnow}%.`
    );
    console.log(
      `The sun rises today at ${forecast.today.sunrise} and sets at ${forecast.today.sunset}.`
    );
    console.log(`The moon tonight is a ${forecast.today.moonPhase}.`);
    console.log(
      `Tomorrow's low is ${forecast.tomorrow.minTemp} F with a high of ${forecast.tomorrow.maxTemp} F.`
    );
    console.log(
      `${forecast.tomorrow.conditions} tomorrow, with an ${forecast.tomorrow.chanceOfRain}% chance of rain & an ${forecast.tomorrow.chanceOfSnow}% chance of snow!`
    );
  } catch (err) {
    console.error(err);
  }
};

// say hi
// get current time and current weather
// things i have to do today
// things on the calendar later this week
