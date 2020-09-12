//Action on click button
async function receiveWeather(event) {

    const baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip=';
    const apiKey = '&appid=3b3e88109bef8fb5d11b3cbf5f2f5be2';
    const zipCode = 10009;
    const url = baseURL + zipCode + apiKey + "&units=metric";

    const weather = await fetch(url);
    try {
        const weatherJson = await weather.json();
        document.getElementById('weather').innerHTML = weatherJson.main.temp;
    } catch (error) {
        console.log('error', error);
    }
}

export { receiveWeather }