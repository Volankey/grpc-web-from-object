# Happy Grpc Web

## Run Demo

### Clone

```shell
git clone xxx
```

### Install

```shell
pnpm install
```

### generate protobuf for js

```
cd example/frontend
pnpm gen-proto
```

### start backend

```
cd example/backend/echo/node-server
node server.js
```

### start envoy

```
cd example/backend/docker/envoy
sh run.sh
```

### build invoker & start frontend

```
cd src/invoker
pnpm dev:example
```

### open browser see the result

http://localhost:3000/

## Invoker-grpc

Support Typescript & Easy to invoke grpc method from web

### Install
npm
```
npm install invoker-grpc
```

yarn
```
yarn add invoker-grpc
```
pnpm
```
pnpm install invoker-grpc
```
### Usage
```
import { EchoServiceClient } from "../proto/EchoServiceClientPb";
import { createInvoker } from "invoker-grpc";

const client = new EchoServiceClient("http://localhost:8080", null);

const invoke = createInvoker(client).invoke;

invoke("echo", {
    message: "hello volankey",
    student: {
      favoratesList: ["basketball", "football"],
      name: "volankey",
      sex: "man",
    },
    suject: {
      liberalArtsList: [{ name: "piano", score: "12" }],
      scienceList: [{ name: "math", score: "23" }],
    },
    'keyScroeMap':[['ss',{'name':'nihao','score':'30'}]],
    'keyvalueMap':[['1','1']],
    'oneOfSample':{
      name:'红红火火',
      // or

      // 'subMessage':{
      //   'name':'a1',
      //   'score':'100'
      // }
    }
  })
  .then((t) => {
    console.log(t.resp);
    result.value = JSON.stringify(t.resp,null,' ')
  })
  .catch((e) => {});
```

## value-type-transfer

### Usage

```js
const {
  pbValueTypeTransfer,
  cjs2esm,
  grpcWebClientTransform,
} = require("value-type-transfer");

pbValueTypeTransfer(join(__dirname, "../src/proto/echo_pb.js"));
// if you use vite, transform to esm
cjs2esm(join(__dirname, "../src/proto/echo_pb.js"));
grpcWebClientTransform(join(__dirname, "../src/proto/EchoServiceClientPb.ts"))
```



# TO-DO

- [ ] Support CommonJs generated by grpc-web
- [ ] Use Vite plugin to transform `/_pb.js/`
- [ ] Support Cancel Request
