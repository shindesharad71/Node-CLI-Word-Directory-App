const ora = require("ora");
const axios = require('axios');
const API_KEY = require('./apiKey') || 'Please Provide API Key';

// Constants
const constants = require("./constants");
const commands = constants.Commands;

module.exports = async function performWordAction(wordAction, commandWord) {
  const spinner = ora("Loading...").start();
  if (wordAction) {
    switch (wordAction) {
      case commands.DEFINITION:
        await findDefinition(commandWord);
        break;
      case commands.SYNONYM:
        await findSynonym(commandWord);
        break;
      case commands.ANTONYMS:
        await findAntonym(commandWord);
        break;
      case commands.EXAMPLE:
        await findExample(commandWord);
        break;
      case commands.PLAY:
        await findPlayGame(commandWord);
        break;
      default:
        break;
    }
  }
  spinner.succeed("Finished");
  return false;
};

async function findDefinition(commandWord) {
  console.log("findDefinition");
}

async function findSynonym(commandWord) {
  console.log("findDefinition");
}

async function findAntonym(commandWord) {
  console.log("findDefinition");
}

async function findExample(commandWord) {
  console.log("findDefinition");
}

async function findPlayGame(commandWord) {
  console.log("findDefinition");
}
