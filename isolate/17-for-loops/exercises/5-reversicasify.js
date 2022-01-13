// #todo

'use strict';
console.log('-- begin --');

/* Reversicasify

  you can use for loops to do some logic for each element in a string

*/

const originalString = 'abcde';
console.log('originalString:', originalString);

let reverseUpperCase = '';

for (let i = originalString.length; i > 0; i--) {
  const nextLetter = originalString[i - 1];
  reverseUpperCase = reverseUpperCase + nextLetter.toUpperCase();
}

console.assert(
  reverseUpperCase === 'EDCBA',
  'reversed string is the original reversed'
);

console.log('-- end --');
