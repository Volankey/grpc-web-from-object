<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { invoke } from "./invoker/index";
import {ref} from 'vue'

const result = ref('')


function doEcho(){
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
    'keyvalueMap':[['1','1']]
  })
  .then((t) => {
    console.log(t.message);
    result.value = JSON.stringify(JSON.parse(t.message),null,' ')
  })
  .catch((e) => {});
}

</script>

<template>
  <button @click="doEcho">do echo</button>
  <pre>
    {{result}}
  </pre>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
