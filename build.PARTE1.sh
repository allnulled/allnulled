#!/usr/bin/bash

# La reversa:
node PARTE1.reverser.js

# El HTML:
markdown PARTE1.cronologico.md > PARTE1.web.html

# El HTML completo:
node wrap_readme_html.PARTE1.js

# El PDF:
wkhtmltopdf PARTE1.web.html --encoding 'utf-8' PARTE1.web.pdf

# El README principal:

cp PARTE1.cronologico.md README.PARTE1.md