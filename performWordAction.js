const ora = require("ora");
const axios = require("axios");
const chalk = require("chalk");
const API_KEY = require("./apiKey");
const {
  printDefinition,
  printSynonym,
  printAntonym,
  printExample
} = require("./print");

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
          await printDefinition(commandWord, wordInfo);
          break;
        case commands.SYNONYM:
          wordInfo = await findAndAntonymSynonym(commandWord);
          await printSynonym(commandWord, wordInfo);
          break;
        case commands.ANTONYMS:
          wordInfo = await findAndAntonymSynonym(commandWord);
          await printAntonym(commandWord, wordInfo);
          break;
        case commands.EXAMPLE:
          wordInfo = await findExample(commandWord);
          await printExample(commandWord, wordInfo);
          break;
        case commands.PLAY:
          wordInfo = await findPlayGame(commandWord);
          console.log(
            chalk.yellow(`\nDefinition for ${chalk.yellow(commandWord)} -\n`)
          );
          break;
        default:
          await performWordAction(commands.DEFINITION, wordAction);
          await performWordAction(commands.SYNONYM, wordAction);
          await performWordAction(commands.ANTONYMS, wordAction);
          await performWordAction(commands.EXAMPLE, wordAction);
          break;
      }
    } else {
      wordInfo = await getWordOfTheDay();
      if (wordInfo.word) {
        console.log(
          chalk.cyan(`\nWord of the day is - ${chalk.bold(wordInfo.word)}`)
        );
        await performWordAction(wordInfo.word, null);
      }
    }
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

async function findAndAntonymSynonym(commandWord) {
  const wordSynonym = await axios.get(
    `${API_BASE_URL}/word/${commandWord}/relatedWords?api_key=${API_KEY}`
  );
  return wordSynonym.data;
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
  // console.log(wordInfo);

  if (wordAction) {
    switch (wordAction) {
      case commands.PLAY:
        break;
      default:
        break;
    }
  }
}
