#!/usr/bin/node
const arg = process.argv;
if (arg[2] != null && arg[3] != null) { console.log(arg[2] + ' is ' + arg[3]); } else if (arg[2] != null && arg[3] == null) { console.log(arg[2] + ' is undefined'); } else console.log('undefined is undefined');
