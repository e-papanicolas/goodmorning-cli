import minimist from "minimist";
import error from "./utils/error.js";
import dotenv from "dotenv";
import world from "./cmds/world.js";
import version from "./cmds/version.js";
import help from "./cmds/help.js";

dotenv.config();

const commands = () => {
  const args = minimist(process.argv.slice(2));
  const cmd = args._[0];

  switch (cmd) {
    case "world":
      world(args);
      break;

    case "version":
      version(args);
      break;

    case "help":
      help(args);
      break;

    default:
      error(`"${cmd}" is not a valid command!`, true);
      break;
  }
};

export default commands;
