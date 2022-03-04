/* eslint @typescript-eslint/no-var-requires: "off" */
const plugin = require("babel-plugin-transform-commonjs");
const fs = require("fs");
const { transformAsync } = require("@babel/core");
const path = require("path");

const defaults = {
  plugins: [plugin],
  sourceType: "module",
};

async function cjs2esm(filePath) {
  console.log("🚀 ~ file: cjs2esm.js ~ line 6 ~ filePath", filePath);

  const p = path.resolve(filePath);
  const input = fs.readFileSync(p, "utf-8");
  const { code } = await transformAsync(input, {
    ...defaults,
    compact: false,
  });
  fs.writeFileSync(p, code);
}

module.exports = { cjs2esm }