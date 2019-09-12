'use strict';

const getOddNumbers = () => {
  const MIN_NUMBER = 15;
  const MAX_NUMBER = 25;

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
range(30, 40);
