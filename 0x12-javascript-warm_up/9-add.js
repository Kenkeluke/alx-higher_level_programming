#!/usr/bin/node
const arg = process.argv;
const a = parseInt(arg[2], 10);
const b = parseInt(arg[3], 10);
function myAddition (a, b) {
  let result;
  if (isNaN(a) || isNaN(b)) { result = 'NaN'; } else { result = a + b; }

  return console.log(result);
}
myAddition(a, b);
