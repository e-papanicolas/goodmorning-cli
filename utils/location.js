const getLocation = async () => {
  const response = await fetch(
    `https://api.ipdata.co?api-key=${process.env.IP_API_KEY}`
  );

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

export default getLocation;
