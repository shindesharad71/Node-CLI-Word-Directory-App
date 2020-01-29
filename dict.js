#!/usr/bin/env node

// Packages
const chalk = require("chalk");
const minimist = require("minimist");
const ora = require("ora");

// Constants
const constants = require("./constants");

const commandConstants = constants.Commands;
const validCommands = constants.ValidCommands;

const args = minimist(process.argv.slice(2));
const commandInput = args._[0];

if (commandInput && validCommands.includes(commandInput)) {
    console.log(commandInput);
} else {
    console.log('Play word of the day');
}
