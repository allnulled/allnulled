const fs = require("fs");
const path = require("path");
const contenido1 = fs.readFileSync(__dirname + "/README.reverse.md").toString();
const contenido2 = "![Portada](./Imperio-1.png)\n\n\n" + "[(Cronológicamente)](./README.reverse.md)\n\n\n" + contenido1.split("\n-----").reverse().join("\n-----");
fs.writeFileSync(__dirname + "/README.md", contenido2, "utf8");
