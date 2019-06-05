#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

'use strict';

const fs = require('fs');
const path = require('path');
const output = fs.readFileSync(path.join(`import.meta.url`, '../data', 'output'), 'utf8');
console.log(output);
