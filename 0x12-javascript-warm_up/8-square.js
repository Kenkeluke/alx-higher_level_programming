#!/usr/bin/node
const arg = process.argv;
const squareRoot = parseInt(arg[2], 10);
if (isNaN(squareRoot)) { console.log('Missing size'); } else {
  let square = '';
  for (let i = 0; i < squareRoot; i++) {
    for (let j = 0; j < squareRoot; j++) { square += 'X'; }
    square += '\n';
  }
  console.log(square);
}
