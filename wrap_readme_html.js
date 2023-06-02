const fs = require("fs");
const path = require("path");
const contenido = fs.readFileSync(path.resolve(__dirname, "README.reverse.html")).toString();
const contenido_2 = `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Currículum</title>
  <style>
  @font-face {
    font-family: Roboto;
    src: url("./Roboto/Roboto-Regular.ttf");
  }
  html {
    text-align: center;
    background-color: #222;
  }
  body {
    display: inline-block;
    background-color: #FFF;
    font-family: Roboto;
    max-width: 800px;
    font-size: 12px;
    border-right: 1px solid #333;
    border-left: 1px solid #333;
    padding: 4px;
    text-align: left;
  }
  body > p {
    
  }
  body > blockquote {
    margin: 0;
  }
  body > blockquote > p {
    font-weight: bold;
    color: #ad86a4;
  }
  img {
    display: inline-block;
    width: auto;
    max-width: 800px;
  }
  </style>
  
</head>
<body>
${contenido}
</body>
</html>`;
fs.writeFileSync(path.resolve(__dirname, "README.reverse.html"), contenido_2, "utf8");