const express = require('express')

const fs = require('fs');

let data = fs.readFileSync('textForTask1.txt',{encoding:'utf8'});

console.log(data)