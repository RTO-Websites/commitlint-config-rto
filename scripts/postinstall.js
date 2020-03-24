/**
 * Script to run after npm install
 *
 * Copy selected files to user's directory
 */

"use strict";
console.log("Starting directory:", process.env.INIT_CWD);
let gentlyCopy = require("gently-copy");
var filesToCopy = [
  process.cwd() + "/scripts/.huskyrc",
  process.cwd() + "/scripts/commitlint.config.js",
  process.cwd() + "/scripts/commitlint.scope.js",
  process.cwd() + "/scripts/commitlint.types.js"
];

// User's local directory
var userPath = process.env.INIT_CWD;

// Moving files to user's local directory
gentlyCopy(filesToCopy, userPath);
return 0;
