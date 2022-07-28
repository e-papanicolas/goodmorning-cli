import getWeather from "../utils/weather.js";
import getLocation from "../utils/location.js";

const helloWorld = async (args) => {
  try {
    const locationData = await getLocation();

    const weather = await getWeather(locationData.region);
    // console.log(weather);
    let current = weather[0];
    let forecast = weather[1];

    console.log(`Today in ${locationData.city}, ${locationData.regionCode}...`);
    console.log(
      `${current.conditions} and currently ${current.temp} F, but it feels like ${current.feelsLike} F.`
    );
    console.log(
      `Today's low is ${forecast.today.minTemp} F with a high of ${forecast.today.maxTemp} F.`
    );
    console.log(
      `${forecast.today.conditions} throughout the day, a ${forecast.today.chanceOfRain}% chance of rain & a ${forecast.today.chanceOfSnow}% chance of snow.`
    );

    console.log(
      `The sun rises today at ${forecast.today.sunrise} and sets at ${forecast.today.sunset}.`
    );
    console.log(`The moon tonight is a ${forecast.today.moonPhase}.`);
    console.log("As for tomorrow...");
    console.log(
      `A low of ${forecast.tomorrow.minTemp} F with a high of ${forecast.tomorrow.maxTemp} F.`
    );
    console.log(
      `${forecast.tomorrow.conditions} tomorrow, with a ${forecast.tomorrow.chanceOfRain}% chance of rain & a ${forecast.tomorrow.chanceOfSnow}% chance of snow!`
    );
  } catch (err) {
    console.error(err);
  }
};

export default helloWorld;
