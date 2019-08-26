#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

"use strict";

const fs = require("fs");
const output = fs.readFileSync("data/output", "utf8");
console.log(output);
