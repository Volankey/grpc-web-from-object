<script setup lang="ts">
import { ref } from 'vue';
import { invoke } from './invoke';
import { CancelToken } from '@volankey/grpc-web-invoker';
const result = ref('');
const sending = ref(false);

type UnPromise<P extends Promise<any>> = P extends Promise<infer R> ? R : never;

function doEcho(mockDelay?: number) {
  // cancel
  const cancelToken = CancelToken.source();
  const timeoutAbort = new Promise((resolve, reject) => {
    if (!mockDelay) {
      return;
    }
    setTimeout(() => {
      cancelToken.cancel();
      resolve(new Error('Cancel By Client' + ', mock-delay is ' + mockDelay));
    }, 2000);
  }).then((e) => {
    alert((e as Error).message);
    return Promise.reject(e);
  });
  console.log('mock-delay: ', mockDelay);
  sending.value = true;
  result.value = '';
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
      keyScroeMap: [
        ['ss', { name: 'nihao', score: '30' }],
        ['ssg', { name: 'nihao', score: '30' }],
      ],
      keyvalueMap: [
        ['1', '1'],
        ['2', '2'],
      ],
      oneOfSample: {
        name: '红红火火',
      },
    },
    {
      'mock-delay': mockDelay || 0,
    },
    {
      cancelToken: cancelToken.token,
    },
  ).catch((e) => {
    console.error('error', e);
  });

  Promise.race([invokePromise, timeoutAbort])
    .then((t) => {
      const resp = (t as UnPromise<typeof invokePromise>).resp;
      console.log(resp);
      result.value = JSON.stringify(resp, null, ' ');
    })
    .catch((e) => {
      console.error('error', e);
    })
    .finally(() => {
      sending.value = false;
    });
}
</script>

<template>
  <button style="margin-right: 20px" @click="doEcho()">
    {{ sending ? 'Invoking...' : 'Do Echo' }}
  </button>
  <button @click="doEcho(3000)">
    {{ sending ? 'Invoking...' : 'Do Echo Delay 3000ms Cancel' }}
  </button>
  <pre>
    {{ result }}
  </pre>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 30px;
}
</style>
