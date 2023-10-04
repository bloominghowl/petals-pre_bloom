//Converting Kelvin to Celsius; then Newton.

const kelvin = 293;

//Converting Kelvin to Celsius.
const celsius = kelvin - 273;

//Calculating for Newton.
let newton = celsius * (33 / 100);

//Rounding result down with '.floor()' method.
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton`);
