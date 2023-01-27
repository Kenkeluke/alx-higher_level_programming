#!/usr/bin/node
const arg = process.argv;
const positiveC = 'C is fun';
const numberOfOcurrence = parseInt(arg[2], 10);
if (isNaN(numberOfOcurrence)) { console.log('Missing number of occurrences'); } else {
  let i = 0;
  while (i < numberOfOcurrence) {
    console.log(positiveC);
    i++;
  }
}
