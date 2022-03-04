#!/usr/bin/env sh

npm run build

mv dist docs

git add .
git commit -m 'deploy'

