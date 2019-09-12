'use strict';
const object = { name: 'JavaScript' };

let objectVariable = { name: 'JavaScript' };

object.name = 'Nodejs';
objectVariable.name = 'Nodejs';

console.log(object);
console.log(objectVariable);

objectVariable = { name: 'JavaScript' };

const createUser = (name, city) => {
  return {
    name,
    city
  };
};
console.log(createUser('Marcus Aurelius', 'Roma'));
