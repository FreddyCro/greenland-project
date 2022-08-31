<template lang="pug">
#app.greenland
  g-pic(
    src="img/fakers/faker_ui"
    ext="png"
    alt="Welcome to Your Vue.js App"
    :webp="true"
  )
</template>

<script>
import GPic from '@/components/g-pic.vue';
import GVid from '@/components/g-vid.vue';

export default {
  name: 'App',
  components: {
    GPic,
    GVid,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
