const convertToCelsius = function(degreeF) {
  let celsius = 5 / 9 * (degreeF - 32);
  return Math.round(celsius * 10) / 10;
};

const convertToFahrenheit = function(degreeC) {
  let fahrenheit = degreeC * 9 / 5 + 32;
  return Math.round(fahrenheit * 10) / 10;
};

convertToCelsius(32);
convertToCelsius(100);
convertToCelsius(-100);

convertToFahrenheit(0);
convertToCelsius(73.2);
convertToCelsius(-10);

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
