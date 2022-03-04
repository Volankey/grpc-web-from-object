const { exec } = require("child_process");
const {
  pbValueTypeTransfer,
  cjs2esm,
  grpcWebClientTransform,
} = require("value-type-transfer");
const { join } = require("path");

exec(
  'protoc --proto_path=../ -I./ -I. --js_out=import_style=commonjs:"./src/proto" --grpc-web_out=import_style=typescript,mode=grpcwebtext:"./src/proto" "../echo.proto"',
  (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }

    console.log("exec success");
    pbValueTypeTransfer(join(__dirname, "../src/proto/echo_pb.js"));
    // if you use vite, transform to esm
    cjs2esm(join(__dirname, "../src/proto/echo_pb.js"));
    grpcWebClientTransform(
      join(__dirname, "../src/proto/EchoServiceClientPb.ts")
    );
  }
);
