#!/usr/bin/node
const arg = process.argv;
if (arg[2] != null && arg[3] != null) {console.log(arg[2] + ' is ' + arg[3]);}
else console.log('You have to enter at least two arguments');
