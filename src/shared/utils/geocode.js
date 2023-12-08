import { REACT_GOOGLE_MAPS_API_KEY } from "../environments/google-maps";

export default async function geocodeLocations(location) {
    try {
        const response = await fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
                location
            )}&key=${process.env.REACT_GOOGLE_MAPS_API_KEY}`
        );

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        if (data.status === "OK") {
            const location = data.results[0].geometry.location;
            return { lat: location.lat, lng: location.lng };
        } else {
            console.error("Error geocoding address:", data.status);
        }
    } catch (error) {
        console.error("Error:", error.message);
    }
}
