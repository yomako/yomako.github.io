#!/usr/bin/env sh

npm run build

mv dist docs
cp CNAME docs/CNAME

git add .
git commit -m 'deploy'
git push origin main
