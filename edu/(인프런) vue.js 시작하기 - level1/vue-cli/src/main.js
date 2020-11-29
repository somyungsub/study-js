import Vue from 'vue'
import App from './App.vue' // component 파일을 import 하여 사용

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


// ------------ 위내용과 동일 ------
// var App = {
//   template: '<div>app</div>'
// }

// new Vue({
//   el: '#app',
//   render: h => h(App),
//   comments: {
//     'app': App
//   }
// })
