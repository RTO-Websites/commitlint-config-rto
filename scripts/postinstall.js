/**
 * Script to run after npm install
 *
 * Copy selected files to user's directory
 */

"use strict";

var ncp = require("ncp").ncp;

ncp.limit = 16;

ncp(".", userPath);

var filesToCopy = new RegExp("(commitlint..*.js)|.huskyrc", "ig");

// User's local directory
var userPath = process.env.INIT_CWD;

// Moving files to user's local directory

ncp(".", userPath, { clobber: false, filter: filesToCopy });
