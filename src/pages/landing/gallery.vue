<template lang="pug">
.gallery
  .u-section.gallery-container
    .grid-wrapper
      //- ice
      .item.item-1-2
        gallery-vid(src="vid/landing/greenland_video9_1.mp4" :text="str.galleryIceTitle")
      .item
        gallery-pic(src="img/landing/gallery/greenland_pic9_2" :text="str.galleryIceDesc2")
      .item.item-1-2
        gallery-pic(src="img/landing/gallery/greenland_pic9_4" :text="str.galleryIceDesc4")
      .item
        gallery-pic(src="img/landing/gallery/greenland_pic9_3" :text="str.galleryIceDesc3")
      .item.item-2-2
        gallery-pic(src="img/landing/gallery/greenland_pic9_5" :text="str.galleryIceDesc5")
      .item
        gallery-pic(src="img/landing/gallery/greenland_pic9_6" :text="str.galleryIceDesc6")
      .item
        gallery-pic(src="img/landing/gallery/greenland_pic9_7" :text="str.galleryIceDesc7")
      .item
        gallery-pic(src="img/landing/gallery/greenland_pic9_8" :text="str.galleryIceDesc8")
      .item.item-2-1
        gallery-pic(src="img/landing/gallery/greenland_pic9_9" :text="str.galleryIceDesc9")
    
      //- city
      .item.item-1-2
        gallery-vid(src="vid/landing/greenland_video10_1.mp4" :text="str.galleryCityTitle")
      .item.item-1-2
        gallery-pic(src="img/landing/gallery/greenland_pic10_2" :text="str.galleryCityDesc2")
      .item
        gallery-pic(src="img/landing/gallery/greenland_pic10_3" :text="str.galleryCityDesc3")
      .item
        gallery-pic(src="img/landing/gallery/greenland_pic10_4" :text="str.galleryCityDesc4")
      .item.item-1-2
        gallery-pic(src="img/landing/gallery/greenland_pic10_5" :text="str.galleryCityDesc5")
      .item.item-2-2
        gallery-pic(src="img/landing/gallery/greenland_pic10_6" :text="str.galleryCityDesc6")
      .item
        gallery-pic(src="img/landing/gallery/greenland_pic10_7" :text="str.galleryCityDesc7")
      .item
        gallery-pic(src="img/landing/gallery/greenland_pic10_8" :text="str.galleryCityDesc8")
      .item
        gallery-pic(src="img/landing/gallery/greenland_pic10_9" :text="str.galleryCityDesc9")

      //- green
      .item.item-1-2
        gallery-vid(src="vid/landing/greenland_video11_1.mp4" :text="str.galleryGreenTitle")
      .item.item-2-2
        gallery-pic(src="img/landing/gallery/greenland_pic11_2" :text="str.galleryGreenDesc2")
      .item
        gallery-pic(src="img/landing/gallery/greenland_pic11_3" :text="str.galleryGreenDesc3")
      .item.item-2-1
        gallery-pic(src="img/landing/gallery/greenland_pic11_4" :text="str.galleryGreenDesc4")
      .item
        gallery-pic(src="img/landing/gallery/greenland_pic11_5" :text="str.galleryGreenDesc5")
      .item.item-1-2
        gallery-pic(src="img/landing/gallery/greenland_pic11_7" :text="str.galleryGreenDesc7")
      .item
        gallery-pic(src="img/landing/gallery/greenland_pic11_6" :text="str.galleryGreenDesc6")
      .item
        gallery-pic(src="img/landing/gallery/greenland_pic11_8" :text="str.galleryGreenDesc8")
      .item
        gallery-pic(src="img/landing/gallery/greenland_pic11_9" :text="str.galleryGreenDesc9")

</template>

<script>
import GalleryPic from '@/pages/landing/gallery-pic.vue';
import GalleryVid from '@/pages/landing/gallery-vid.vue';
import str from '@/assets/string/landing.json';

export default {
  name: 'Gallery',
  components: {
    GalleryPic,
    GalleryVid,
  },
  data() {
    return {
      str,
    };
  },
};
</script>

<style lang="scss" scoped>
.gallery {
}
.gallery-container {
  position: relative;
  padding: 0 $spacing-4;
  background-color: $bg-white;

  @include rwd-min(xs) {
    padding: 0 $spacing-5;
  }

  @include rwd-min(sm) {
    padding: 0 0;
  }

  @include rwd-min(md) {
    max-width: calc(1020px + 110px * 2);
    padding: 0 110px;
  }

  @include rwd-min(lg) {
    max-width: none;
  }
}
.grid-wrapper {
  display: grid;
  grid-gap: $spacing-3;
  grid-auto-rows: min-content;

  @include rwd-min(sm) {
    grid-template-columns: repeat(3, 1fr);
  }

  @include rwd-min(xl) {
    grid-gap: $spacing-4;
  }
}

.item {
  position: relative;
  background-color: $g-blue-2;

  @include rwd-min(sm) {
    width: 100%;
    height: 0;
    padding-top: 68.5%;
  }
}

.item-1-2 {
  width: 100%;
  height: 100%;

  @include rwd-min(sm) {
    grid-row-start: span 2;
  }
}

.item-2-1 {
  padding-top: calc(34.25% - $spacing-1);

  @include rwd-min(sm) {
    grid-column-start: span 2;
    padding-top: calc(34.25% - $spacing-1);
  }

  @include rwd-min(xl) {
    padding-top: calc(34.25% - $spacing-2);
  }
}

.item-2-2 {
  @include rwd-min(sm) {
    grid-row-start: span 2;
    grid-column-start: span 2;
  }
}
</style>
