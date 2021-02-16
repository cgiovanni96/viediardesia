const percorso = require("./percorso-6.json");
const fs = require("fs");

function jsonToFile(arg) {
  const reversed = arg.features[0].geometry.coordinates[0].reverse();

  fs.writeFileSync("./reversed.js", JSON.stringify(reversed), function (err) {
    if (err) {
      console.log("Error");
    }
  });
}

console.log("🚀 STARTING");

jsonToFile(percorso);

console.log("🛑 DONE");
