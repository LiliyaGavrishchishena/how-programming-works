//Identifiers

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

//Loop
const getOddNumbers = () => {
  const MIN_NUMBER = 15;
  const MAX_NUMBER = 30;

  for (let i = MIN_NUMBER; i < MAX_NUMBER; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
    continue;
  }
};
getOddNumbers();

const range = (startNumber, endNumber) => {
  for (let i = startNumber; i < endNumber; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
    continue;
  }
};
range(30, 90);
