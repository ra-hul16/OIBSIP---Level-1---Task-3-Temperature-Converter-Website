function convertTemperature() {
    const temperatureInput = document.getElementById("temperature");
    const result = document.getElementById("result");
    const unitRadio = document.querySelector('input[name="unit"]:checked');
  
    if (!unitRadio) {
      result.textContent = "Please select a unit (Celsius or Fahrenheit).";
      return;
    }
  
    const temperature = parseFloat(temperatureInput.value);
    const unit = unitRadio.value;
  
    if (unit === "celsius") {
      const fahrenheit = (temperature * 9/5) + 32;
      result.textContent = `${temperature}°C is ${fahrenheit.toFixed(2)}°F`;
    } else {
      const celsius = (temperature - 32) * 5/9;
      result.textContent = `${temperature}°F is ${celsius.toFixed(2)}°C`;
    }
  }