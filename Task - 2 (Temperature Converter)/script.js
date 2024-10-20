function convertTemperature(){
    const temperatureInput = document.getElementById("temperature").value;
    const unit = document.querySelector('input[name="unit"]:checked').value;
    const resultDiv = document.getElementById("result");

    if(temperatureInput === ""){
        resultDiv.textContent = "Please enter a valid temperature.";
        return;
    }

    const temperature = parseFloat(temperatureInput);


    if(isNaN(temperature)){
        resultDiv.textContent = "Please enter a numeric value.";
        return;
    }

    let celsius, fahrenheit, kelvin;


    if(unit === "Celsius"){
        celsius = temperature;
        fahrenheit = (temperature * 9/5) + 32;
        kelvin = temperature + 273.15;
    } 
    
    else if(unit === "Fahrenheit"){
        celsius = (temperature - 32) * 5/9;
        fahrenheit = temperature;
        kelvin = celsius + 273.15;
    } 
    
    else if(unit === "Kelvin"){
        kelvin = temperature;
        celsius = temperature - 273.15;
        fahrenheit = (celsius * 9/5) + 32;
    }


    resultDiv.innerHTML = `
        <p>${temperature} ${unit} is:</p>
        <ul>
            <li>${celsius.toFixed(2)} °C</li>
            <li>${fahrenheit.toFixed(2)} °F</li>
            <li>${kelvin.toFixed(2)} K</li>
        </ul>
    `;
}