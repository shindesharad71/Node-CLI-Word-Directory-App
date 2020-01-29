#!/usr/bin/env node

// Packages
const chalk = require("chalk");
const minimist = require("minimist");
const ora = require("ora");

// Constants
const commandConstants = require("./constants");

const args = minimist(process.argv.slice(2));
const commandInput = args._[0] || commandConstants.Commands.HELP;
console.log(commandInput);
