## grpc-web-pb-transform

transform the pb.js file which generate by protoc and grpc-web

### Install

```bash
npm install @volankey/grpc-web-pb-transform -D
```

### Usage

```js
const { pbValueTypeTransfer, cjs2esm } = require('value-type-transfer');

pbValueTypeTransfer(join(__dirname, '../src/proto/echo_pb.js'));
// NOTE: if you use grpc-web 1.4.x, you need to use clientCompatibleGrpcWeb
// ref:https://github.com/grpc/grpc-web/releases/tag/1.4.0
clientCompatibleGrpcWeb(join(__dirname, '../src/proto/EchoServiceClientPb.ts'));
// if you use vite, transform to esm
cjs2esm(
  [
    join(__dirname, '../src/proto/echo_pb.js'),
    join(__dirname, '../src/proto/EchoServiceClientPb.ts'),
  ],
  join(__dirname, '../src/proto'),
);
```
