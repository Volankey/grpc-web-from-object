const { exec } = require('child_process');
const {
  pbValueTypeTransfer,
  cjs2esm,
} = require('@volankey/grpc-web-pb-transform');
const { join } = require('path');
const startTime = Date.now();
console.log(new Date().toLocaleString(), 'start handle pb files...');
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
    pbValueTypeTransfer(join(__dirname, '../src/proto/echo_pb.js'));
    // if you use vite, transform to esm
    cjs2esm(
      [
        join(__dirname, '../src/proto/echo_pb.js'),
        join(__dirname, '../src/proto/EchoServiceClientPb.ts'),
      ],
      join(__dirname, '../src/proto'),
    );
    console.log(
      new Date().toLocaleString(),
      'done in ' + (Date.now() - startTime) + ' ms',
    );
  },
);
