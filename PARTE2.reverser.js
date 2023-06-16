const fs = require("fs");
const path = require("path");
const contenido1 = fs.readFileSync(__dirname + "/PARTE2.reverse.md").toString();
const contenido2 = "![Portada](./bolsurabcn.png)\n\n\n" + "[(Cronológicamente)](./PARTE2.cronologico.md) | [(Parte 1)](./PARTE1.cronologico.md) | [(Descarga)](./PARTE2.web.pdf) | [(Actualmente)](https://github.com/allnulled/democracia-2.0/commits/main)\n\n\n" + contenido1.split("\n-----").reverse().join("\n-----");
fs.writeFileSync(__dirname + "/PARTE2.md", contenido2, "utf8");
const contenido3 = "![Portada](./bolsurabcn.png)\n\n\n" + "[(Cronológicamente)](./PARTE2.cronologico.md) | [(Parte 1)](./PARTE1.cronologico.md) | [(Descarga)](./PARTE2.web.pdf) | [(Actualmente)](https://github.com/allnulled/democracia-2.0/commits/main)\n\n\n" + contenido1;
fs.writeFileSync(__dirname + "/PARTE2.cronologico.md", contenido3, "utf8");
