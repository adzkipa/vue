import { createApp } from "vue";
import App from "./App.vue";
import VueRouter from "./router/index";

import "bootstrap/dist/css/bootstrap.min.css";

import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyA-cK2M2ISouq0WBxlM417lS6zTvMscWZM",
  authDomain: "vite-project-86b96.firebaseapp.com",
  projectId: "vite-project-86b96",
  storageBucket: "vite-project-86b96.appspot.com",
  messagingSenderId: "875340723556",
  appId: "1:875340723556:web:dff9f7052b3f4ecb38f671"
};

initializeApp(firebaseConfig);
createApp(App).use(VueRouter).mount("#app");