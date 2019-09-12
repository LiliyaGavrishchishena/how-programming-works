'use strict';
const getAverageNumber = (a, b) => {
  let average = `Average number of ${a} and ${b} is ${(a + b) / 2}`;
  return average;
};
console.log(getAverageNumber(3, 36));

const getSquareNumber = x => {
  let square = `Square number of ${x} is ${x * x}`;
  return square;
};
console.log(getSquareNumber(7));

const getCubeNumber = x => {
  let cube = `Cube number of ${x} is ${x * x * x}`;
  return cube;
};
console.log(getCubeNumber(10));

let result;
for (let i = 1; i <= 3; i++) {
  let square = getSquareNumber(i);
  let cube = getCubeNumber(i);
  result = getAverageNumber(square, cube);
}
