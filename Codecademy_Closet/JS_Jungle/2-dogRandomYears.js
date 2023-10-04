//Declaring variable myAge and assigning to it a random number
const myAge = Math.floor(Math.random());

//Declaring variable earlyYears
let earlyYears = 2;

earlyYears = earlyYears * 10.5;

//Deducting 2 from myAge and assigning
//result to Variable laterYears
let laterYears = myAge - 2;

//calculating the number of dog years accounted for
laterYears /= 4;

//Assigning the addition of variables laterYears and
//earlyYears to myAgeInDogYears
let myAgeInDogYears = earlyYears + laterYears;

//Storing my name as a string to variable myName
let myName = `Blooming Howl`.toLowerCase();

//Introducing myself
console.log(
  `My name is ${myName}, I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`
);
