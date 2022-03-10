import { createInvoker } from '../src/grpc-web-invoker/index';
import { EchoServiceClient } from '../example/frontend/src/proto/EchoServiceClientPb.js';

const client = new EchoServiceClient('http://localhost:8080', null);
//@ts-ignore
const enableDevTools = window.__GRPCWEB_DEVTOOLS__ || (() => {});
enableDevTools([client]);
const invoke = createInvoker(client).invoke;

test('test invoker', async () => {
  const result = await invoke('echo', {
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
  });
  expect(result.resp).toEqual({
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
  });
});
