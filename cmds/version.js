import version from "../package.json" assert { type: "json" };

const getVersion = (args) => {
  console.log(`v${version}`);
};

export default getVersion;
