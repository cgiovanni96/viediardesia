const cave = require("./cave.json");
const fs = require("fs");

function jsonToFile(cave) {
  const ret = cave.features.map((c) => {
    let stringify = "{\n";
    stringify += "name: '" + c.properties.name + "',\n";
    stringify += "image: '',\n";
    stringify += "icon: 'cave',\n";
    stringify += "position: {\n";
    stringify +=
      "longitude: " +
      c.geometry.coordinates[0] +
      "," +
      "latitude:" +
      c.geometry.coordinates[1] +
      "},\n";
    stringify += "text: {\n " + 'it: "' + c.properties.name + '"} \n';
    stringify = stringify + "\n},\n\n";
    // console.log(stringify);
    fs.writeFileSync("./result.js", stringify, { flag: "a" });
    return stringify;
  });
}

console.log("STARTING");

jsonToFile(cave);

console.log("DONE");
