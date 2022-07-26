module.exports = async (location) => {
  const currentResponse = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=${location}`
  );
  const forecastResponse = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHER_API_KEY}&q=${location}&days=2`
  );

  const currentResult = await currentResponse.json();
  const forecastResult = await forecastResponse.json();

  const currentData = {
    temp: currentResult.current.temp_f,
    conditions: currentResult.current.condition.text,
    feelsLike: currentResult.current.feelslike_f,
  };

  const forecastData = {
    today: {
      maxTemp: forecastResult.forecast.forecastday[0].day.maxtemp_f,
      minTemp: forecastResult.forecast.forecastday[0].day.mintemp_f,
      chanceOfRain:
        forecastResult.forecast.forecastday[0].day.daily_chance_of_rain,
      chanceOfSnow:
        forecastResult.forecast.forecastday[0].day.daily_chance_of_snow,
      conditions: forecastResult.forecast.forecastday[0].day.condition.text,
      sunrise: forecastResult.forecast.forecastday[0].astro.sunrise,
      sunset: forecastResult.forecast.forecastday[0].astro.sunset,
      moonPhase: forecastResult.forecast.forecastday[0].astro.moon_phase,
    },
    tomorrow: {
      maxTemp: forecastResult.forecast.forecastday[1].day.maxtemp_f,
      minTemp: forecastResult.forecast.forecastday[1].day.mintemp_f,
      chanceOfRain:
        forecastResult.forecast.forecastday[1].day.daily_chance_of_rain,
      chanceOfSnow:
        forecastResult.forecast.forecastday[1].day.daily_chance_of_snow,
      conditions: forecastResult.forecast.forecastday[1].day.condition.text,
    },
  };

  return [currentData, forecastData];
};
