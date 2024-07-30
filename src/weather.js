// This file retrieves our desired data from visualcrossing's
// weatherAPI. Exported and bundled using webpack

const getWeather = async (city) => {
    // creates url request based on city input
    const url = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/' + city + '?unitGroup=us&key=A9TGYA5G4HTQDAMUVNV8QVDNX&contentType=json';
    const weather = await fetch(url);
}