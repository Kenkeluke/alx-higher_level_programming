#!/usr/bin/node
const arg = process.argv;
const squareRoot = parseInt(arg[2], 10);
if (isNaN(squareRoot)) { console.log('Missing size'); } else {
  let square ='';
  let i = 0;
  while (i < squareRoot) {
     for (let j = 0; j < squareRoot; j++) { square += 'X'; }
     i++
     if (i < squareRoot) square +='\n';
  }
  console.log(square);

}