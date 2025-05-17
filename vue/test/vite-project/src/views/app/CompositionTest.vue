<script setup>
import { ref } from 'vue';

const title = ref('Composition API!');
const message = ref('Rendered via SSR using setup()');
const result = ref('');
const fromSetup = ref('setup()에서 정의된 값입니다.');

function scopeTest () {
  console.log(" scopeTest this title: ", title.value);
  scopeTest2();
  scopeTest3('테스트3');
}

function scopeTest2 () {
  console.log(" scopeTest this title2: ", title.value);
  inner2();

  function inner2() {
    console.log(" scopeTest this title2-2: ", this);
  }
}

function scopeTest3(title) {
  console.log(" scopeTest this title3: ", title.value, title);
  inner3('테스트! 3-3');

  function inner3(title) {
    console.log(" scopeTest this title3-3: 내부 title ", title);
    console.log(" scopeTest this title3-3: ", title);
  }
}

function uppercaseTitle() {
  result.value = title.value.toUpperCase(); // this.title 접근
}

function uppercaseTitle2() {
  console.log("this확인 :", this);
  setTimeout(() => {
    console.log("셋타임아웃!! : ", title.value);
    setTimeout(() => {
      console.log("셋타임아웃!!22 : ", title.value);
    }, 10);
  },0);
  return title.value.toUpperCase(); // this.title 접근
}
function resetMessage() {
  message.value = 'This is rendered via SSR.'; // this.message 재설정
  result.value = '';
}

</script>

<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ message }}</p>
    <p>{{ result }}</p>
    <p>{{ fromSetup }}</p>
    <p>대문자 확인 {{ uppercaseTitle2() }}</p>
    <button @click="uppercaseTitle">제목 대문자로</button>
    <button @click="uppercaseTitle2">제목 대문자로2</button>
    <button @click="resetMessage">메시지 초기화</button>
    <button @click="scopeTest">scopeTest</button>
  </div>
</template>