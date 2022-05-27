## grpc-web-invoker

Support Typescript & Easy to invoke grpc method(fromObject) from web

### Install

```bash
npm install @volankey/grpc-web-invoker
```

### Usage

```ts
import { EchoServiceClient } from '../proto/EchoServiceClientPb';
import {
  createInvoker,
  GetInvokeMethodParams,
} from '@volankey/grpc-web-invoker';

type TEchoParams = GetInvokeMethodParams<EchoServiceClient, 'echo'>;

const client = new EchoServiceClient('http://localhost:8080', null);

const invoke = createInvoker(client).invoke;

invoke('echo', {
  message: 'hello volankey',
  student: {
    favoratesList: ['basketball', 'football'],
    name: 'volankey',
    sex: 'man',
  },
  suject: {
    liberalArtsList: [{ name: 'piano', score: '12' }],
    scienceList: [{ name: 'math', score: '23' }],
  },
  keyScroeMap: [['ss', { name: 'nihao', score: '30' }]],
  keyvalueMap: [['1', '1']],
  oneOfSample: {
    name: '红红火火',
    // or

    // 'subMessage':{
    //   'name':'a1',
    //   'score':'100'
    // }
  },
})
  .then((t) => {
    console.log(t.resp);
    result.value = JSON.stringify(t.resp, null, ' ');
  })
  .catch((e) => {});
```

#### Add MetaData

```ts
import { EchoServiceClient } from './proto/EchoServiceClientPb';
import { createInvoker } from '@volankey/grpc-web-invoker';

const client = new EchoServiceClient('http://localhost:8080', null);
enableDevTools([client]);
const invoker = createInvoker(client);
invoker.setGlobalMetaData('token', 'xxx'); // set global metadata
const invoke = invoker.invoke;

invoke(
  'echo',
  {
    message: 'hello volankey',
    student: {
      favoratesList: ['basketball', 'football'],
      name: 'volankey',
      sex: 'man',
    },
    suject: {
      liberalArtsList: [{ name: 'piano', score: '12' }],
      scienceList: [{ name: 'math', score: '23' }],
    },
    keyScroeMap: [['ss', { name: 'nihao', score: '30' }]],
    keyvalueMap: [['1', '1']],
    oneOfSample: {
      name: '红红火火',
    },
  },
  {
    'mock-delay': mockDelay || 0, // custom metadata
  },
);
```

#### Cancel Request

```ts
import { CancelToken } from '@volankey/grpc-web-invoker';
const cancelToken = CancelToken.source(); // generage cancelToken
const timeoutAbort = new Promise((resolve, reject) => {
  setTimeout(() => {
    cancelToken.cancel(); // cancel request after 2000ms
    resolve(new Error('Cancel By Client' + ', mock-delay is ' + mockDelay));
  }, 2000);
}).then((e) => {
  alert((e as Error).message);
  return Promise.reject(e);
});
const invokePromise = invoke(
  'echo',
  {
    message: 'hello volankey',
    student: {
      favoratesList: ['basketball', 'football'],
      name: 'volankey',
      sex: 'man',
    },
    suject: {
      liberalArtsList: [{ name: 'piano', score: '12' }],
      scienceList: [{ name: 'math', score: '23' }],
    },
    keyScroeMap: [['ss', { name: 'nihao', score: '30' }]],
    keyvalueMap: [['1', '1']],
    oneOfSample: {
      name: '红红火火',
    },
  },
  {
    'mock-delay': 3000,
  },
  {
    cancelToken: cancelToken.token, // pass the token to invoke
  },
);
Promise.race([invokePromise, timeoutAbort])
  .then((t) => {
    const resp = (t as UnPromise<typeof invokePromise>).resp;
    console.log(resp);
    result.value = JSON.stringify(resp, null, ' ');
  })
  .catch((e) => {
    console.error(e);
  })
  .finally(() => {
    sending.value = false;
  });
```
