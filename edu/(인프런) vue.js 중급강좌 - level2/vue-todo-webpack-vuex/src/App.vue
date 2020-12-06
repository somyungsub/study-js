<template>
  <div id="app">
    <TodoHeader/>
<!--    <TodoInput v-on:하위컴포넌트에서 발생시킨 이벤트 이름="현재컴포넌 메서드명" />-->
    <TodoInput/>
<!--    <TodoList v-bind:하위컴포넌트에 내려 보내를 프롭스 속성이름="todoItems"/>-->
    <TodoList/>
    <TodoFooter/>
    <Demo/>
    <Axios/>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import TodoFooter from './components/TodoFooter';
import Demo from './components/Demo';
import Axios from './components/Axios';

export default {
  components: {
    Axios,
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter,
    Demo
  },
  // data() {
  //   return {
  //     todoItems: [] // 아이템을 여기서 중앙관리
  //   }
  // },
  // methods:{ // == store의 mutations와 동일
  //  // App.vue에서 중앙관리 -> store의 mutations 관리로 이동
  // }
};
</script>

<style>
body {
  text-align: center;
  background-color: #F6F6F6;
}

input {
  border-style: groove;
  width: 200px;
}

button {
  border-style: groove;
}

.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
