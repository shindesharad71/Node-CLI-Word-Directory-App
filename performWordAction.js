// Constants
const constants = require("./constants");
const commands = constants.Commands;

module.exports = async function performWordAction(wordAction, commandWord) {
  console.log(wordAction);
  console.log(commandWord);
  if (wordAction) {
    switch (wordAction) {
      case commands.DEFINITION:
        await findDefinition(commandWord);
        break;
      case commands.SYNONYM:
        await findDefinition(commandWord);
        break;
      case commands.ANTONYMS:
        await findDefinition(commandWord);
        break;
      case commands.EXAMPLE:
        await findDefinition(commandWord);
        break;
      case commands.PLAY:
        await findDefinition(commandWord);
        break;
      default:
        break;
    }
  }
  return false;
};

async function findDefinition(commandWord) {
  console.log("findDefinition");
}
