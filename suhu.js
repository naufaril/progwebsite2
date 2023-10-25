function convert() {
    var inputSuhu = document.getElementById('inputSuhu').value;

    var reamur = (inputSuhu * 4) / 5;
    document.getElementById('resultReamur').textContent = 'Reamur: ' + reamur + ' °R';

    var fahrenheit = (inputSuhu * 9) / 5 + 32;
    document.getElementById('resultFahrenheit').textContent = 'Fahrenheit: ' + fahrenheit + ' °F';

    var kelvin = parseFloat(inputSuhu) + 273.15;
    document.getElementById('resultKelvin').textContent = 'Kelvin: ' + kelvin + ' K';
  }