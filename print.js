const chalk = require("chalk");

module.exports.printDefinition = async (commandWord, wordInfo) => {
  if (wordInfo && wordInfo.length) {
    console.log(
      chalk.yellow(`\nDefinition for ${chalk.bold(commandWord)} - \n`)
    );
    wordInfo.forEach((definition, i) => {
      console.log(chalk.green(`\t ${i + 1}. ${definition.text}`));
    });
  }
};

module.exports.printSynonym = async (commandWord, wordInfo) => {
  if (wordInfo && wordInfo.length) {
    console.log(
      chalk.yellow(`\nSynonym for ${chalk.yellow(commandWord)} - \n`)
    );
    const synonym = wordInfo.find(
      words => words.relationshipType === "synonym"
    );
    if (synonym && synonym.words.length) {
      synonym.words.forEach((word, i) => {
        console.log(chalk.green(`\t ${i + 1}. ${word}`));
      });
    }
  }
};

module.exports.printAntonym = async (commandWord, wordInfo) => {
    if (wordInfo && wordInfo.length) {
        console.log(
          chalk.yellow(`\nAntonym for ${chalk.yellow(commandWord)} - \n`)
        );
        const synonym = wordInfo.find(
          words => words.relationshipType === "antonym"
        );
        if (synonym && synonym.words.length) {
          synonym.words.forEach((word, i) => {
            console.log(chalk.green(`\t ${i + 1}. ${word}`));
          });
        }
      }
};

module.exports.printExample = async (commandWord, wordInfo) => {
    if (wordInfo.examples && wordInfo.examples.length) {
        console.log(
          chalk.yellow(`\nExample for ${chalk.yellow(commandWord)} - \n`)
        );
        wordInfo.examples.forEach((example, i) => {
          console.log(chalk.green(`\t ${i + 1}. ${example.text}`));
        });
      }
};

module.exports.printDefinition = async (commandWord, wordInfo) => {
  if (wordInfo && wordInfo.length) {
    console.log(
      chalk.yellow(`\nDefinition for ${chalk.bold(commandWord)} - \n`)
    );
    wordInfo.forEach((definition, i) => {
      console.log(chalk.green(`\t ${i + 1}. ${definition.text}`));
    });
  }
};
