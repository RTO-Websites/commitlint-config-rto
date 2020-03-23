/**
 * Script to run after npm install
 *
 * Copy selected files to user's directory
 */

"use strict";

import gentlyCopy from "gently-copy";

var filesToCopy = [
  "../commitlint.config.js",
  "../commitlint.scope.js",
  "../commitlint.types.js",
  "../.huskyrc"
];

// User's local directory
var userPath = process.env.INIT_CWD;

// Moving files to user's local directory
gentlyCopy(filesToCopy, userPath);
