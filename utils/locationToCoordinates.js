import fetch from "node-fetch";
export const locationToCoordinates = async (location) => {
  const encodedLocation = encodeURIComponent(location);
  const geocodeApiUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedLocation}&key=${process.env.MAPS_API_KEY}&sensor=true`;

  //   try {
  //     const response = await fetch(geocodeApiUrl);
  //     const data = await response.json();

  //     const location = data.results[0].geometry.location;
  //     console.log(response);
  //     return [location.lat, location.lon];
  //   } catch (error) {
  //     return error;
  //   }
  fetch(geocodeApiUrl)
    .then((response) => response.json())
    .then((data) => {
      if (data.status === "OK") {
        const location = data.results[0].geometry.location;
        const latitude = location.lat;
        const longitude = location.lng;
        console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
      } else {
        console.log(`Geocoding failed with status: ${data}`);
        return data;
      }
    })
    .catch((error) => {
      console.error(`Error: ${error}`);
    });
};
