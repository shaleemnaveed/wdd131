const temperature = parseFloat(document.getElementById('temp').textContent);
const windspeed = parseFloat(document.getElementById('speed').textContent);

const windchill = document.getElementById('windchill');
if (temperature <= 10 && windspeed >= 4.8) {
    windchill.textContent = calculateWindChill(temperature, windspeed);
}
else {
    windchill.textContent = "N/A";
}


function calculateWindChill(temperature, windspeed) {
    return 13.12
        + (0.6215 * temperature)
        - (11.37 * (windspeed ** 0.16))
        + (0.3965 * temperature * (windspeed ** 0.16));
}