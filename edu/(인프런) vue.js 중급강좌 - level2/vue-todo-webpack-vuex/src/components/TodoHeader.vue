<template>
  <header>
<!--    <h1>TODO it !</h1>-->
<!--    <h1>{{this.$store.state.headerText}}</h1>-->
    <h1>{{headerText}}</h1>
  </header>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  computed:{
    ...mapGetters(['headerText'])
  }
};
</script>

<!-- scoped : 컴포넌트 안에서만  유효한 범위-->
<style scoped>
h1 {
  color: #2F3B52;
  font-weight: 900;
  margin: 2.5rem 0 1.5rem;
}

</style>
