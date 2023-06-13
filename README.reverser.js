const fs = require("fs");
const path = require("path");
const contenido1 = fs.readFileSync(__dirname + "/README.reverse.md").toString();
const contenido2 = "![Portada](./Imperio-1.png)\n\n\n" + "[(Cronológicamente)](./README.cronologico.md) | [(Descarga)](./README.web.pdf) | [(Actualmente)](https://github.com/allnulled/democracia-2.0/commits/main)\n\n\n" + contenido1.split("\n-----").reverse().join("\n-----");
fs.writeFileSync(__dirname + "/README.md", contenido2, "utf8");
const contenido3 = "![Portada](./Imperio-1.png)\n\n\n" + "[(Cronológicamente)](./README.cronologico.md) | [(Descarga)](./README.web.pdf) | [(Actualmente)](https://github.com/allnulled/democracia-2.0/commits/main)\n\n\n" + contenido1;
fs.writeFileSync(__dirname + "/README.cronologico.md", contenido3, "utf8");
