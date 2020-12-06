import Vue from 'vue'
import App from './App.vue'
import {store} from "./store/store";  // store 사용

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
