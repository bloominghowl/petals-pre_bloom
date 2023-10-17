//write a program that will register runners for a race and give them instructions on race day.

let raceNumber = Math.floor(Math.random() * 1000);

const earlyRegistrant = true;
const age = 18;

if (earlyRegistrant && age > 18){
  raceNumber += 1000;
} 
if (earlyRegistrant && age > 18){
  console.log(`You're in! Race starts at 9:30 am, and your number is: ${raceNumber}.`);
} else if (!earlyRegistrant && age > 18){
  console.log(`You're in! Race starts at 11:00 am, and your number is: ${raceNumber}.`);
} else if (earlyRegistrant || !earlyRegistrant && age < 18){
  console.log(`You are in! Race starts at 12:30 pm, your race number is: ${raceNumber}`);
}
else{
  console.log('Please visit the registration desk.')
}
