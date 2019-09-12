'use strict';
let a = 20;
const hoist = () => {
  let a = 50;
  let b = 100;
};

hoist();

console.log(a);

console.log(b);
