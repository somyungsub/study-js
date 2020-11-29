<template>
  <form v-on:submit.prevent="submitForm">
    <div>
      <label for="username">id: </label>
      <input id="username" type="text" v-model="username">
    </div>
    <div>
      <label for="password">pw: </label>
      <input id="password" type="password" v-model="password">
    </div>
<!--    <button type="submit" v-on:click="submitForm">login</button> &lt;!&ndash; 메서드 구현해서 해도되나.. form에서 제어 &ndash;&gt;-->
    <button type="submit" >login</button> <!-- 메서드 구현해서 해도되나.. form에서 제어 -->
  </form>
</template>

<script>
import axios from 'axios';

export default {
  data: function () { // 컴포넌트간의 공유되지 않게 새객체를 리턴하도록 구성
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    submitForm: function (event) {
      // event.preventDefault(); // 새로고침을 하지 않게 됨 (버블링 방지)
      console.log(this.username, this.password);
      console.log(event);

      var url = 'https://jsonplaceholder.typicode.com/users';
      var data = {
        username: this.username,
        password: this.password
      }
      // host(서버)로 전송
      axios.post(url, data)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
  }
}
</script>

<style>
</style>
