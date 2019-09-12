'use strict';

let name = 'Liliya';
const YEAR_OF_BIRTH = 1983;

const greeting = name => {
  console.log(`Greetings, ${name}, it's me!`);
};
greeting('Liliya');
greeting(name);

const getYears = YEAR_OF_BIRTH => {
  console.log(`My year of birth is ${YEAR_OF_BIRTH}.`);
};
getYears(YEAR_OF_BIRTH);
