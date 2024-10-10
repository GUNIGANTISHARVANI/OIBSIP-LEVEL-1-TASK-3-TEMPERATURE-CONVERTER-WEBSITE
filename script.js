document.getElementById('convertButton').addEventListener('click', function() {
    const temperatureInput = parseFloat(document.getElementById('temperatureInput').value);
    const unit = document.querySelector('input[name="unit"]:checked').value;
    let convertedTemperature;
    let resultUnit;

    if (isNaN(temperatureInput)) {
        document.getElementById('result').innerText = "Please enter a valid number.";
        return;
    }

    if (unit === 'C') {
        // Celsius to Fahrenheit and Kelvin
        convertedTemperature = (temperatureInput * 9/5) + 32; // Celsius to Fahrenheit
        resultUnit = '°F';
        document.getElementById('result').innerText = `${temperatureInput} °C = ${convertedTemperature.toFixed(2)} ${resultUnit}`;

        convertedTemperature = temperatureInput + 273.15; // Celsius to Kelvin
        resultUnit = 'K';
        document.getElementById('result').innerText += ` | ${temperatureInput} °C = ${convertedTemperature.toFixed(2)} ${resultUnit}`;
    } else if (unit === 'F') {
        // Fahrenheit to Celsius and Kelvin
        convertedTemperature = (temperatureInput - 32) * 5/9; // Fahrenheit to Celsius
        resultUnit = '°C';
        document.getElementById('result').innerText = `${temperatureInput} °F = ${convertedTemperature.toFixed(2)} ${resultUnit}`;

        convertedTemperature = (temperatureInput - 32) * 5/9 + 273.15; // Fahrenheit to Kelvin
        resultUnit = 'K';
        document.getElementById('result').innerText += ` | ${temperatureInput} °F = ${convertedTemperature.toFixed(2)} ${resultUnit}`;
    } else if (unit === 'K') {
        // Kelvin to Celsius and Fahrenheit
        convertedTemperature = temperatureInput - 273.15; // Kelvin to Celsius
        resultUnit = '°C';
        document.getElementById('result').innerText = `${temperatureInput} K = ${convertedTemperature.toFixed(2)} ${resultUnit}`;

        convertedTemperature = (temperatureInput - 273.15) * 9/5 + 32; // Kelvin to Fahrenheit
        resultUnit = '°F';
        document.getElementById('result').innerText += ` | ${temperatureInput} K = ${convertedTemperature.toFixed(2)} ${resultUnit}`;
    }
});
