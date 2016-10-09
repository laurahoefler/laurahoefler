#!/bin/bash
GH_REPO=${GH_REPO:-$(node -e 'process.stdout.write(require("./package.json").repository)')}
cd dist
$(npm bin)/rimraf .git
git init
git config user.name "Deploy User"
git config user.email "deploy@laurahoefler.github.io"
git add .
git commit -m "Deploy to GitHub Pages"
git push --force --quiet "https://${GH_TOKEN}${GH_REPO}" master
