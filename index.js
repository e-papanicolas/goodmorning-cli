const minimist = require("minimist");
const error = require("./utils/error");

module.exports = () => {
  const args = minimist(process.argv.slice(2));
  const cmd = args._[0];

  switch (cmd) {
    case "me":
      require("./cmds/me")(args);
      break;

    case "version":
      require("./cmds/version")(args);
      break;

    case "help":
      require("./cmds/help")(args);
      break;

    default:
      error(`"${cmd}" is not a valid command!`, true);
      break;
  }
};
