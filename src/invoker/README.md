# Happy Grpc Web

Support Typescript & Easy to invoke grpc method from web

## install

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

## usage

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
