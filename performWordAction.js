const ora = require("ora");
const axios = require("axios");
const API_KEY = require("./apiKey");

const API_BASE_URL = "https://fourtytwowords.herokuapp.com";

// Constants
const constants = require("./constants");
const commands = constants.Commands;

module.exports = async function performWordAction(wordAction, commandWord) {
  try {
    let wordInfo;
    if (wordAction) {
      switch (wordAction) {
        case commands.DEFINITION:
          wordInfo = await findDefinition(commandWord);
          break;
        case commands.SYNONYM:
          wordInfo = await findSynonym(commandWord);
          break;
        case commands.ANTONYMS:
          wordInfo = await findAntonym(commandWord);
          break;
        case commands.EXAMPLE:
          wordInfo = await findExample(commandWord);
          break;
        case commands.PLAY:
          wordInfo = await findPlayGame(commandWord);
          break;
        default:
          break;
      }
    } else {
      wordInfo = await getWordOfTheDay();
    }
    printOutput(wordAction, commandWord, wordInfo);
    return false;
  } catch (error) {
    console.error(error.data ? error.data : error);
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

function printOutput(wordAction, commandWord, wordInfo) {
  console.log(wordInfo);
}
