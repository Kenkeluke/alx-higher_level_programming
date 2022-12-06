#!/usr/bin/node
const arg = process.argv;
const a = parseInt(arg[2], 10);
function factorialFun (a) {
  if (a === 0 || isNaN(a)) {
    return 1;
  }
  return a * (factorialFun(a - 1));
}
console.log(factorialFun(a));
