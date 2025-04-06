const apiKey = 'YOUR_NEW_API_KEY'; // Replace with your new API key

function getweather() {
    const city = document.getElementById('city').value // Trim removes extra spaces
    if (city === '') {
        alert('Please enter a city name');
        return;
    }
    const apiKey = "143e92ed12ce4a953e1d6ad622a679bb"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found or API error');
            }
            return response.json();
        })
        .then(data => displayWeather(data))
        .catch(error => {
            document.getElementById('weather-info').innerHTML = `<p style="color: red;">${error.message}</p>`;
            console.error('Error fetching weather data:', error);
        });
}

function displayWeather(data) {
    const weatherInfo = `
        <h3>${data.name}, ${data.sys.country}</h3>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
    document.getElementById('weather-info').innerHTML = weatherInfo;
}
