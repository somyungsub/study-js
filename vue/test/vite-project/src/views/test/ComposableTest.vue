<script setup>
import { useHost } from 'vue';

const host = useHost();
console.log("host : ", host);
// 호스트 요소에 직접 스타일을 적용
host.style.border = '2px solid #42b983';
</script>

<template>
  <div>커스텀 엘리먼트 내용</div>
</template>
