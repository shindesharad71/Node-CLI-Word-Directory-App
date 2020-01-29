// Constants
const constants = require("./constants");
const commands = constants.Commands;

export async function performWordAction(wordAction) {
  if (wordAction) {
    switch (wordAction) {
      case commands.DEFINITION:
        break;
      case commands.SYNONYM:
        break;
      case commands.ANTONYMS:
        break;
      case commands.EXAMPLE:
        break;
      case commands.PLAY:
        break;
      default:
        break;
    }
  }
}
