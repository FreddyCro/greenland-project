<template lang="pug">
#app.greenland
  //- hero
  section.gli-hero
    .gli-hero-vid-wrapper
      g-vid(
        src="../vid/living/greenland_living_video1",
        ext="mp4",
        poster="../img/living/greenland_living_preview1",
        poster-ext="webp"
        id="gli-hero-vid",
        classname="gli-hero-vid"
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
