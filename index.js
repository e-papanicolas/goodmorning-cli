const minimist = require("minimist");

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
      console.error(`"${cmd}" is not a valid command!`);
      break;
  }
};
