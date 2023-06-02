#!/usr/bin/bash

# La reversa:
node README.reverser.js

# El HTML:
markdown README.cronologico.md > README.web.html

# El HTML completo:
node wrap_readme_html.js

# El PDF:
wkhtmltopdf README.web.html --encoding 'utf-8' README.web.pdf
