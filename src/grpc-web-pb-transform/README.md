## grpc-web-pb-transform

transform the pb.js file which generate by protoc and grpc-web

### Install

```bash
npm install @volankey/grpc-web-pb-transform -D
```

### Usage

```js
const {
  pbValueTypeTransfer,
  cjs2esm,
  grpcWebClientTransform,
} = require('value-type-transfer');

pbValueTypeTransfer(join(__dirname, '../src/proto/echo_pb.js'));
// if you use vite, transform to esm
cjs2esm(
  [
    join(__dirname, '../src/proto/echo_pb.js'),
    join(__dirname, '../src/proto/EchoServiceClientPb.ts'),
  ],
  join(__dirname, '../src/proto'),
);
grpcWebClientTransform(join(__dirname, '../src/proto/EchoServiceClientPb.ts'));
```
