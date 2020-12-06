import Vue from 'vue'
import App from './App.vue'
import {store} from "./store/store";  // store 사용
// import {store2} from "./store/store2";  // store 사용

new Vue({
  el: '#app',
  store,
  // store2,
  render: h => h(App)
})
