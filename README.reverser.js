const fs = require("fs");
const contenido2 = fs.readFileSync(__dirname + "/README.reverse.md").toString().split("-----").reverse().join("-----");
fs.writeFileSync(__dirname + "/README.md", contenido2, "utf8");