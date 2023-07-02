const fs = require("fs");
const path = require("path");
const contenido1 = fs.readFileSync(__dirname + "/PARTE1.reverse.md").toString();
const separador_temporal = "[(Cronológicamente)](./PARTE1.cronologico.md) | [(Descarga)](./PARTE1.web.pdf) | [(Actualmente)](https://github.com/allnulled/democracia-2.0/commits/main)\n\n\n";
const contenido2 = "![Portada](./Imperio-1.png)\n\n\n" + contenido1.split("\n-----").reverse().join("\n-----");
fs.writeFileSync(__dirname + "/PARTE1.md", contenido2, "utf8");
const contenido3 = "![Portada](./Imperio-1.png)\n\n\n" + contenido1;
fs.writeFileSync(__dirname + "/PARTE1.cronologico.md", contenido3, "utf8");
