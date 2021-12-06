import { createApp } from "vue";
import App from "./App.vue";
import { invoke } from "./invoker";
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
})
  .then((t) => {
    console.log(t.message);
  })
  .catch((e) => {});
createApp(App).mount("#app");
