const apiKey = 'd2afa54b34376f228fd884f59c7aed06'; 

async function getWeather() {
    const city = document.getElementById('city-input').value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            document.getElementById('location').innerText = 'Location: Not found';
            document.getElementById('temperature').innerText = 'Temperature: N/A';
            document.getElementById('description').innerText = 'Description: N/A';
            return;
        }
        const data = await response.json();

        document.getElementById('location').innerText = `Location: ${data.name}, ${data.sys.country}`;
        document.getElementById('temperature').innerText = `Temperature: ${data.main.temp} °C`;
        document.getElementById('description').innerText = `Description: ${data.weather[0].description}`;
    } catch (error) {
        // Fallback to not showing error messages but default values
        document.getElementById('location').innerText = 'Location: Not found';
        document.getElementById('temperature').innerText = 'Temperature: N/A';
        document.getElementById('description').innerText = 'Description: N/A';
    }
}