#!/bin/bash
set -e

echo "Building..."
npm run build

echo "Committing & pushing..."
git add -A
git commit -m "release: build and deploy" --allow-empty
git push origin main

echo "Done!"
