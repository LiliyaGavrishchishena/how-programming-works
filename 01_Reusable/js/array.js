'use strict';
let phoneBook = [
  { name: 'Marcus', phone: '+380445554433' },
  { name: 'Octavianus', phone: '+380445554444' }
];

const findPhoneByName = name => {
  for (const person of phoneBook) {
    if (person.name === name) {
      return person.phone;
    }
  }
};
console.log(findPhoneByName('Marcus'));
