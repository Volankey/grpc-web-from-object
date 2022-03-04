<script setup lang="ts">
import { ref } from 'vue';
import { invoke } from './invoke';

const result = ref('');

function doEcho() {
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
    },
  })
    .then((t) => {
      console.log(t.resp);
      result.value = JSON.stringify(t.resp, null, ' ');
    })
    .catch((e) => {});
}
</script>

<template>
  <button @click="doEcho">Do Echo</button>
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
