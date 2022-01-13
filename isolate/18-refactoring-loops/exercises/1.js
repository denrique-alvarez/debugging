// #todo

'use strict';
console.log('-- begin --');

const school = 'HackYourFuture';

for (const letter of school) {
  console.log(letter);
}

// write this for...of loop as a for loop:

for (let i = 0; i < school.length; i++) {
  let letter = school[i];
  console.log(letter);
}

// write this for loop as a while loop:

let letter = 0;
while (letter < school.length) {
  console.log(school[letter]);
  letter++;
}

console.log('-- end --');
