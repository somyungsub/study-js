import Vue from 'vue';
import Vuex from 'vuex';
import todoApp from './modules/todoApp'

// vue의 플러그인 사용하겠다
Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    todoApp
  }
});
