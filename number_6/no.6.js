function convertToFahrenheit() {
    
    const celsius = parseFloat(document.getElementById("celsiusInput").value);

    // Check if the input is a valid number
    if (isNaN(celsius)) {
        document.getElementById("fahrenheitResult").textContent = "Please enter a valid number.";
        return;
    }

    const fahrenheit = (celsius * 9 / 5) + 32;

    document.getElementById("fahrenheitResult").textContent = `${celsius}°C is equal to ${fahrenheit.toFixed(2)}°F.`;
}
