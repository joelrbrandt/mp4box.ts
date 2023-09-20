#! /bin/bash

pushd mp4box.js

npm install
npx grunt

MP4BOX_JS_SHA=$(git rev-parse HEAD)
echo "new SHA: ${MP4BOX_JS_SHA}"

popd

pushd mp4box.ts

echo "export const MP4BOX_JS_SHA=\"${MP4BOX_JS_SHA}\"" > ./src/mp4boxJsSha.ts
npm run clean
npm run build

popd