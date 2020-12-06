<template>
  <div class="clearAllContainer">
    <span class="clearAllBtn" v-on:click="clearAllItems">Clear All</span>
  </div>
</template>

<script>
import {mapMutations} from 'vuex';
export default {
  name: "TodoFooter",
  methods: {
    ...mapMutations(['clearAllItems'])
    // clearTodo: function () {
    //   this.$store.commit('clearAllItems');
    // }
  }
}
</script>
<style scoped>
.clearAllContainer {
  width: 8.5rem;
  height: 50px;
  line-height: 50px;
  background-color: white;
  border-radius: 5px;
  margin: 0 auto;
}
.clearAllBtn {
  color: #e20303;
  display: block;
}

</style>
