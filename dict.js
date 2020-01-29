#!/usr/bin/env node

// Packages
const chalk = require("chalk");
const minimist = require("minimist");

// Constants
const constants = require("./constants");
const performWordAction = require("./performWordAction");
const validCommands = constants.ValidCommands;

const args = minimist(process.argv.slice(2));
const commandWordAction = args._[0];
const commandWord = args._[1];

if (commandWordAction) {
  performWordAction(commandWordAction, commandWord);
} else {
  console.log("Play word of the day");
}
