#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# place .nojekyll to bypass Jekyll processing
echo > .nojekyll

# if you are deploying to a custom domain

git init
git checkout -B main
git add -A
git commit -m 'deploy'

# if you are deploying to https://ajparejo.github.io

# if you are deploying to https://ajparejo.github.io/react-heroes-spa

cd -