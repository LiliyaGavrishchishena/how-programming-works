'use strict';
const hash = {
  Marcus: { name: 'Marcus', phone: '+380445554433' },
  Octavianus: { name: 'Octavianus', phone: '+380445554444' }
};

const findPhoneByNameInHash = name => {
  for (const key in hash) {
    const person = hash[key];
    if (person.name === name) console.log(person.phone);
  }
};

findPhoneByNameInHash('Marcus');
findPhoneByNameInHash('Octavianus');
