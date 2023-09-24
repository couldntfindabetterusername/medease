import fetch from 'node-fetch';

async function geocodeLocation(location) {
    const apiKey = '22499183e6384f8b9be718c8bfc0b62e'; // Replace with your OpenCage API key
    const encodedLocation = encodeURIComponent(location);
    const apiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${encodedLocation}&key=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (response.ok) {
            // Successful response
            const firstResult = data.results[0];
            if (firstResult) {
                const { geometry } = firstResult;
                const { lat, lng } = geometry;
                return { latitude: lat, longitude: lng };
            } else {
                throw new Error('No results found');
            }
        } else {
            // Handle API error
            throw new Error(data.error);
        }
    } catch (error) {
        // Handle fetch or other errors
        throw new Error(error.message);
    }
}

// Example usage:
geocodeLocation('1600 Amphitheatre Parkway, Mountain View, CA')
    .then(coordinates => {
        console.log('Coordinates:', coordinates);
    })
    .catch(error => {
        console.error('Error:', error);
    });


// import fetch from "node-fetch";
// export const locationToCoordinates = async (location) => {
//   const encodedLocation = encodeURIComponent(location);
//   const geocodeApiUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedLocation}&key=${process.env.MAPS_API_KEY}&sensor=true`;

//   //   try {
//   //     const response = await fetch(geocodeApiUrl);
//   //     const data = await response.json();

//   //     const location = data.results[0].geometry.location;
//   //     console.log(response);
//   //     return [location.lat, location.lon];
//   //   } catch (error) {
//   //     return error;
//   //   }
//   fetch(geocodeApiUrl)
//     .then((response) => response.json())
//     .then((data) => {
//       if (data.status === "OK") {
//         const location = data.results[0].geometry.location;
//         const latitude = location.lat;
//         const longitude = location.lng;
//         console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
//       } else {
//         console.log(`Geocoding failed with status: ${data}`);
//         return data;
//       }
//     })
//     .catch((error) => {
//       console.error(`Error: ${error}`);
//     });
// };
