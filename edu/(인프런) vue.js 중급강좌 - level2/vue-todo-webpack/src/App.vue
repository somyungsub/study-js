<template>
  <div id="app">
    <TodoHeader/>
<!--    <TodoInput v-on:하위컴포넌트에서 발생시킨 이벤트 이름="현재컴포넌 메서드명" />-->
    <TodoInput v-on:addTodoItem="addOneItem" />
<!--    <TodoList v-bind:하위컴포넌트에 내려 보내를 프롭스 속성이름="todoItems"/>-->
    <TodoList v-bind:propsdata="todoItems"
              v-on:removeTodoItem="removeOneItem"
              v-on:toggleTodoItem="toggleOneItem"/>
    <TodoFooter v-on:clearTodoAll="clearAllItems"/>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import TodoFooter from './components/TodoFooter';

export default {
  data: function () {
    return {
      todoItems: [] // 아이템을 여기서 중앙관리
    }
  },
  components: {
    'TodoHeader': TodoHeader,
    'TodoInput': TodoInput,
    'TodoList': TodoList,
    'TodoFooter': TodoFooter
  },
  methods:{
    // App.vue에서 중앙관리
    addOneItem: function (todoItem) {
      var obj = {completed: false, item: todoItem};
      // localStorage.setItem(this.newTodoItem, obj);   // key - value
      localStorage.setItem(todoItem, JSON.stringify(obj));   // application tab에서 데이터 보기 가능해짐
      this.todoItems.push(obj);
    },
    removeOneItem: function (todoItem, index) {
      localStorage.removeItem(todoItem.item);
      this.todoItems.splice(index, 1);
    },
    toggleOneItem: function (todoItem, index) {
      this.todoItems[index].completed = !todoItem.completed;
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(this.todoItems[index], JSON.stringify(this.todoItems[index]));
    },
    clearAllItems: function () {
      localStorage.clear();
      this.todoItems = [];
    }
  },
  created: function () {
    // 라이프 사이클 10개정도 중 인스턴스가 생성되자마자 호출되는 ..생성자 같은 녀석
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
          this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }
  }
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
