#!/bin/bash
cd dist
$(npm bin)/rimraf .git
git init
git config user.name "Travis CI"
git config user.email "travis@laurahoefler.github.io"
git add .
git commit -m "Deploy to GitHub Pages"
git push --force "https://${GH_TOKEN}@${GH_REF}" master
