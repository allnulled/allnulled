const fs = require("fs");
const contenido2 = "[Cronológicamente.](./README.reverse.md)\n\n\n" + fs.readFileSync(__dirname + "/README.reverse.md").toString().split("\n-----").reverse().join("\n-----");
fs.writeFileSync(__dirname + "/README.md", contenido2, "utf8");