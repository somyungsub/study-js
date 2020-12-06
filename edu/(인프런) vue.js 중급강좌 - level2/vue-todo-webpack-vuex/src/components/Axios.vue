<template>
  <div>
    <h1>Axios Test!!</h1>
    <button @click="getUserData">getUserData!!</button>
    <ul>
      {{this.userData}}
    </ul>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
export default {
  name: "Axios",
  methods: {
    ...mapActions(['getUserData']),
  },
  computed: {
    ...mapGetters(['userData'])
  },
}
</script>

<style scoped>

</style>
