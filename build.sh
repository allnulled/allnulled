#!/usr/bin/bash

# La reversa:
node README.reverser.js

# El HTML:
markdown README.reverse.md > README.reverse.html

# El HTML completo:
node wrap_readme_html.js

# El PDF:
wkhtmltopdf README.reverse.html --encoding 'utf-8' README.reverse.pdf
