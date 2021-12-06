const $ = require("gogocode");
const fs = require("fs");
const { exec } = require("child_process");
const path = require("path");

const filePath = process.argv[2];

const code = fs.readFileSync(filePath, "utf-8");
console.log("🚀 ~ file: grpc-web-client-transform.js ~ line 9 ~ code", code);

const AST = $(code, {
  parseOptions: {
    comments: true,
  },
});
// import * as echo_pb from './echo_pb'; => import echo_pb from './echo_pb';
const res = AST.replace(`import * as $_$1 from '$_$2'`, (match) => {
  const v1 = match[1][0].value;
  const v2 = match[2][0].value;
  const reg = /_pb/;
  if (reg.test(v1) && reg.test(v2)) {
    return `import ${v1} from '${v2}';`;
  }
  return `import * as $_$1 from '$_$2'`;
})
  .root()
  .before(`/* eslint-disable */\n`)
  .before("//@ts-nocheck\n")
  .generate({
    isPretty: false,
  });
fs.writeFileSync(filePath, res, "utf-8");
