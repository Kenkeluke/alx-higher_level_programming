#!/usr/bin/node
const arg = process.argv;
const printableInteger = parseInt(arg[2], 10);
if (isNaN(printableInteger)) { console.log('Not a number'); } else console.log('My number: ' + printableInteger);
