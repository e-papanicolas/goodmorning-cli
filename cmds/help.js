const menus = {
  main: `
    goodmorning [command] <options>

    me .............. get my day
    version ............ show package version
    help ............... show help menu for a command`,

  me: `
    goodmorning me <options>

    --location, -l ..... the location to use`,
};

const getHelp = (args) => {
  const subCmd = args._[0] === "help" ? args._[1] : args._[0];

  console.log(menus[subCmd] || menus.main);
};

export default getHelp;
