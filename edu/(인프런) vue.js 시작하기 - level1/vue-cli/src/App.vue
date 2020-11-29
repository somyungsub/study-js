<template>
  <div>
<!--    <app-header v-bind:프롭스 속성이름="상위컴포넌트 데이터 이름"></app-header>-->
    <app-header
        v-bind:propsdata="str"
        v-on:renew="renewStr"></app-header> <!-- 하위컴포넌트로 부터 받는 이벤트 renew와 renewStr 정의 실행되도록 매핑 -->
<!--    <AppHeader/>-->
  </div>
</template>

<script>
// var AppHeader = {
//   template: '<header><h1>header</h1></header>'
// }
import AppHeader from "@/components/AppHeader";

export default {
  data: function () { // 재사용성에 의해 함수 기반으로 정의하는게 규칙
    return {
      str: 'Header'
    }
  },
  components: {
    'app-header': AppHeader,
    AppHeader
  },
  methods: {
    renewStr: function () {
      this.str = 'hi';
    }
  }
}
</script>

<style>

</style>