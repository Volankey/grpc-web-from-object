/* eslint @typescript-eslint/no-var-requires: "off" */
const fs = require('fs');
// const { transformAsync } = require("@babel/core");
const path = require('path');
const esbuild = require('esbuild');

const externalCjsToEsmPlugin = (external) => ({
  name: 'external',
  setup(build) {
    let escape = (text) =>
      `^${text.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')}$`;
    let filter = new RegExp(external.map(escape).join('|'));
    build.onResolve({ filter: /.*/, namespace: 'external' }, (args) => ({
      path: args.path,
      external: true,
    }));
    build.onResolve({ filter }, (args) => ({
      path: args.path,
      namespace: 'external',
    }));
    build.onLoad({ filter: /.*/, namespace: 'external' }, (args) => ({
      contents: `export * from ${JSON.stringify(args.path)}`,
    }));
  },
});
async function cjs2esm(entryPoints, outdir) {
  console.log('🚀 ~ file: cjs2esm.js ~ line 24 ~ cjs2esm ~ outdir', outdir);
  await esbuild.build({
    format: 'esm',
    bundle: true,
    plugins: [externalCjsToEsmPlugin(['google-protobuf'])],
    entryPoints,
    outdir,
    allowOverwrite: true,
  });
}
module.exports = { cjs2esm };
