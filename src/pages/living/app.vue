<template lang="pug">
#app.greenland
  hello-world(msg="Welcome to Your Vue.js App")
  g-pic(
    src="/img/fakers/faker_ui"
    :srcset="['mob', 'pad', 'pc']"
    ext="png"
    alt="Welcome to Your Vue.js App"
    :webp="true"
  )
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';

import GPic from '@/components/g-pic.vue';
import GVid from '@/components/g-vid.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
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
