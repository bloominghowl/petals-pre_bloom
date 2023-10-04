//converting Kelvin to Celsius, then to Fahrenheit.

//Declaring var kelvin.
const kelvin = 293;

//Converting Kelvin to Celsius.
const celsius = kelvin - 273;

//Calculating for Fahrenheit.
let fahrenheit = celsius * (9 / 5) + 32;

//Rounding down result with '.floor()' method.
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
