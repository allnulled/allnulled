#!/usr/bin/bash

# La reversa:
node PARTE2.reverser.js

# El HTML:
markdown PARTE2.cronologico.md > PARTE2.web.html

# El HTML completo:
node wrap_readme_html.PARTE2.js

# El PDF:
wkhtmltopdf PARTE2.web.html --encoding 'utf-8' PARTE2.web.pdf

# El README principal:

cp PARTE2.md README.md