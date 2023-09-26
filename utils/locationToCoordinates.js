import fetch from "node-fetch";

export const locationToCoordinates = async (location) => {
  const encodedLocation = encodeURIComponent(location);
  const apiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${encodedLocation}&key=${process.env.MAPS_API_KEY}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (response.ok) {
      const firstResult = data.results[0];

      if (firstResult) {
        const { geometry } = firstResult;
        const { lat, lng } = geometry;

        return [lat, lng];
      } else {
        throw new Error("No results found");
      }
    } else {
      throw new Error(data.error);
    }
  } catch (error) {
    throw new Error(error.message);
  }
};
