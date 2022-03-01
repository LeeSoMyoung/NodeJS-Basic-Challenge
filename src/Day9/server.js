'use strict';

const fs = require('fs');

const DEFAULT_VALUE = "txt default value";

let txt = DEFAULT_VALUE;

txt = fs.readFileSync('src/Day9/hello.txt', 'utf8');

console.log(txt);

txt = DEFAULT_VALUE;

fs.readFile('src/Day9/hello.txt', 'utf-8', (err, data) => {
    txt = data;
});

console.log(txt);