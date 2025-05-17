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
    <button @click="scopeTest3">scopeTest3</button>
  </div>
</template>

<script>
export default {
  name: 'OptionTest',
  data() {
    return {
      title: 'Option API!',
      message: 'This is rendered via SSR.',
      result: ''
    }
  },
  setup() {
    const fromSetup = 'setup()에서 정의된 값입니다.';
    return {
      fromSetup
    };
  },
  methods: {
    scopeTest: function () {
      console.log(" scopeTest this title: ", this.title);
      this.scopeTest2();
      this.scopeTest3();
    },
    scopeTest2: function () {
      console.log(" scopeTest this title2: ", this.title);
      console.log("this 1: ", this)
      const _this = this;
      inner2();
      setTimeout(() => {
        console.log("scopeTest setTimeout : ", this.title)
      }, 100);
      function inner2() {
        console.log("this 2 this : ", this)
        console.log("this 2 _this : ", _this.title);
        // console.log(" scopeTest this title2-2: ", this.title); // 오류 : Uncaught TypeError: Cannot read properties of undefined (reading 'title')
      }
    },
    scopeTest3() {
      console.log(" scopeTest this title3: ", this.title);

      const inner3 = () => {
        console.log("inner3 : ", this.title);
        console.log("inner3 스코프 : ", title);
      };

      // inner3(); // 이건에러나지만...
      const title = "스코프3";
      inner3(); // 이건 에러안남

      // function inner3() {
      //   console.log(" scopeTest this title3-3: ", this);
      // }
    },

    uppercaseTitle() {
      this.result = this.title.toUpperCase(); // this.title 접근
    },
    uppercaseTitle2() {
      console.log("this확인 :", this);
      setTimeout(() => {
        console.log("셋타임아웃!! : ", this.title);
        setTimeout(() => {
          console.log("셋타임아웃!!22 : ", this.title);
        }, 10);
      },0);
      return this.title.toUpperCase(); // this.title 접근
    },
    resetMessage() {
      this.message = 'This is rendered via SSR.'; // this.message 재설정
      this.result = '';
    }
  }
}
</script>
