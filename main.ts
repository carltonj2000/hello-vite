//import "./style.scss";
// import styles from "./example.module.css";
// import { debounce } from "lodash-es";
//import favicon from "./favicon.svg";

import("./async.js").then((mod) => {
  console.log(mod);
});
import { createApp } from "vue";

import App from "./App.vue";

// console.log(styles);
//console.log(favicon);

/*
document.querySelector("#app").innerHTML = `
  <h1 class="">Hello Vite!!!</h1>
  <img src="${favicon}" alt="favicon" width="100px"> <!-- hashed -->
  <img src="/favicon.svg" alt="favicon" width="100px"> <!-- from public -->
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`;
*/

createApp(App).mount("#app");
