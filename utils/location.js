module.exports = async () => {
  const key = "b9a79676297caf177dc8dbda71917ce2184b2a2be168cff494c765b7";
  const response = await fetch(`https://api.ipdata.co?api-key=${key}`);

  const result = await response.json();
  // console.log(result);
  const data = {
    city: result.city,
    region: result.region,
    regionCode: result.region_code,
    country: result.country_name,
    latitude: result.latitude,
    longitude: result.longitude,
    timezone: result.time_zone,
  };

  return data;
};
