import { createApp } from "vue";
import { createPinia } from "pinia";
import "@/app.css";
import "animate.css";
import App from "@/App.vue";
import router from "@/router";

import "@/assets/main.css";
// import mitt from "mitt";
// const emitter = mitt();
const app = createApp(App);
// app.provide("emitter", emitter);

app.use(createPinia());
app.use(router);
// emitter.on("myevent", (value: any) => {
//   // *Listen* for event
//   console.log("myevent received!", `value: ${value}`);
// });
app.mount("#app");
