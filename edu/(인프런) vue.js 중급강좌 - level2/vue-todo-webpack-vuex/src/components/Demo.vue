<template>
  <div>
    <p>{{originalPrice}}</p> -> 100
    <p>{{this.doublePrice}}</p> -> 200
    <p>{{this.$store.getters.triplePrice}}</p> -> 300
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  name: "Demo",
  computed: {
    ...mapGetters(['originalPrice', 'doublePrice', 'triplePrice'])
    // originalPrice() {
    //   return this.$store.getters.originalPrice;
    // },
    // doublePrice() {
    //   return this.$store.getters.doublePrice;
    // },
    // triplePrice() {
    //   return this.$store.getters.triplePrice;
    // }
  }
}
</script>

<style scoped>

</style>
