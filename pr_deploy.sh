#!/usr/bin/env bash
if [ "$TRAVIS_PULL_REQUEST" == "false" ]; then
    echo "Not a PR. Skipping surge deployment"
    exit 0
fi

npm i -g surge
# Actual building and setup of current push or PR.
npm install
npm run build
rm -rf node_modules/
cp build/index.html

export SURGE_LOGIN=test@example.co.in
# Token of a dummy account
export SURGE_TOKEN=d1c28a7a75967cc2b4c852cca0d12206

export DEPLOY_DOMAIN=https://pr-${TRAVIS_PULL_REQUEST}-sahaayak.surge.sh
surge --project ./build --domain $DEPLOY_DOMAIN;
