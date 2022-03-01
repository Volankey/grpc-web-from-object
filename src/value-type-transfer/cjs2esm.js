#!/usr/bin/env node

/* eslint @typescript-eslint/no-var-requires: "off" */
const plugin = require("babel-plugin-transform-commonjs");
const fs = require("fs");
const { transformAsync } = require("@babel/core");
const path = require("path");
const filePath = process.argv[2];
console.log("🚀 ~ file: cjs2esm.js ~ line 6 ~ filePath", filePath);

const defaults = {
  plugins: [plugin],
  sourceType: "module",
};

async function transform() {
  const p = path.resolve(filePath);
  const input = fs.readFileSync(p, "utf-8");
  const { code } = await transformAsync(input, {
    ...defaults,
    compact: false,
  });
  fs.writeFileSync(p, code);
}
transform();
