const ora = require("ora");
const axios = require("axios");
const chalk = require("chalk");
const API_KEY = require("./apiKey");

const API_BASE_URL = "https://fourtytwowords.herokuapp.com";

// Constants
const constants = require("./constants");
const commands = constants.Commands;
const spinner = ora();

module.exports = async function performWordAction(wordAction, commandWord) {
  try {
    let wordInfo;

    if (wordAction) {
      switch (wordAction) {
        case commands.DEFINITION:
          wordInfo = await findDefinition(commandWord);
          console.log(
            chalk.yellow(`\nDefinition for ${chalk.bold(commandWord)} - \n`)
          );
          break;
        case commands.SYNONYM:
          wordInfo = await findSynonym(commandWord);
          console.log(
            chalk.yellow(`\nSynonym for ${chalk.yellow(commandWord)} - \n`)
          );
          break;
        case commands.ANTONYMS:
          wordInfo = await findAntonym(commandWord);
          console.log(
            chalk.yellow(`\nAntonym for ${chalk.yellow(commandWord)} - \n`)
          );
          break;
        case commands.EXAMPLE:
          wordInfo = await findExample(commandWord);
          console.log(
            chalk.yellow(`\nExample for ${chalk.yellow(commandWord)} - \n`)
          );
          break;
        case commands.PLAY:
          wordInfo = await findPlayGame(commandWord);
          console.log(
            chalk.yellow(`\nDefinition for ${chalk.yellow(commandWord)} -\n`)
          );
          break;
        default:
          break;
      }
    } else {
      wordInfo = await getWordOfTheDay();
    }
    printOutput(wordInfo, wordAction);
    return false;
  } catch (error) {
    spinner.fail(error.response.data.error);
  }
};

async function findDefinition(commandWord) {
  const wordDefinition = await axios.get(
    `${API_BASE_URL}/word/${commandWord}/definitions?api_key=${API_KEY}`
  );
  return wordDefinition.data;
}

async function findSynonym(commandWord) {
  const wordSynonym = await axios.get(
    `${API_BASE_URL}/word/${commandWord}/relatedWords?api_key=${API_KEY}`
  );
  return wordSynonym.data;
}

async function findAntonym(commandWord) {
  const wordAntonym = await axios.get(
    `${API_BASE_URL}/word/${commandWord}/definitions?api_key=${API_KEY}`
  );
  return wordAntonym.data;
}

async function findExample(commandWord) {
  const wordExample = await axios.get(
    `${API_BASE_URL}/word/${commandWord}/examples?api_key=${API_KEY}`
  );
  return wordExample.data;
}

async function findPlayGame(commandWord) {
  const wordPlayGame = await axios.get(
    `${API_BASE_URL}/word/${commandWord}/definitions?api_key=${API_KEY}`
  );
  return wordPlayGame.data;
}

async function getWordOfTheDay() {
  const randomWord = await axios.get(
    `${API_BASE_URL}/words/randomWord?api_key=${API_KEY}`
  );
  return randomWord.data;
}

function printOutput(wordInfo, wordAction) {
  if (wordAction) {
    switch (wordAction) {
      case commands.DEFINITION:
        break;
      case commands.SYNONYM:
        break;
      case commands.ANTONYMS:
        break;
      case commands.EXAMPLE:
        if(wordInfo.examples && wordInfo.examples.length) {
          wordInfo.examples.forEach((example, i) => {
            console.log(chalk.green(`\t ${i+1}. ${example.text}`));
          });
        }
        break;
      case commands.PLAY:
      default:
        break;
    }
  }
  // console.log(title);
  // console.log(wordInfo);
}
