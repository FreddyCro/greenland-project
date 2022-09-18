<template lang="pug">
#app.u-article.u-paragraph.greenland
  nmd-header(
    :outlink="headerList"
    :title="str.metaTitle"
    :url="str.metaUrl"
    :description="str.metaDescription"
  )
  
  //- section hero
  g-slide(
    id="intro"
    classname="gli-intro-slide"
    :src="`${VIDEO_PATH}living/greenland_living_video1`",
    ext="mp4",
    poster="../img/living/greenland_living_preview1",
    poster-ext="jpg"
    :use-webm="true"
    :use-play="false"
    :use-sound="false"
  )
    section.u-section-full.gli-hero-vid-wrapper(slot="bg")
      g-hero-scroll(:fadeOut="true")
    section.u-section.gli-hero(slot="content")
      .u-container
        .g-hero-title
          h1(v-html="str.introTitle")
          h2(v-html="str.introSubTitle")
        p(
          v-for="p, index in str.introText1"
          :key="`gli-introText1-${index}`"
          v-html="p"
        )

  //- section intro
  g-slide(id="section2" classname="gli-section2-slide")
    section(slot="bg")
      g-pic(
        src="../img/living/greenland_living_pic2"
        ext="jpg"
        :alt="str.introTitle"
        classname="u-full-vh-img gc-intro-img-1"
        :webp="true"
      )
    section.u-section.gli-intro(slot="content")
      .u-container
        p(
          v-for="p, index in str.introText2"
          :key="`gli-introText2-${index}`"
          v-html="p"
        )

  //- section transition
  section.u-section
    g-pic(
      src="../img/living/greenland_living_pic3"
      ext="jpg"
      :alt="str.introTitle"
      classname="u-full-img"
      :webp="true"
    )
  
  section.u-section.gfi-transition
    .u-container
      p(
        v-for="p, index in str.introText3"
        :key="`gli-introText3-${index}`"
        v-html="p"
      )

  //- section kir
  section.gli-kir
    .u-section
      .u-container-lg
        g-pic(
          src="../img/living/greenland_living_pic4_1"
          ext="jpg"
          :alt="str.kirImg1Caption"
          classname="gc-kir-img-1"
          :webp="true"
        )
      .u-container
        p.quote-caption(v-html="str.kirImg1Caption")

        g-quote(:text="str.kirTitle")
        p(
          v-for="p, index in str.kirText1"
          :key="`gli-kirText1-${index}`"
          v-html="p"
        )

    .u-container-lg
      g-pic(
        src="../img/living/greenland_living_pic4_2"
        ext="jpg"
        :alt="str.kirImg2Caption"
        classname="gc-kir-img-2"
        :webp="true"
      )
      p.caption(v-html="str.kirImg2Caption")

    .u-section
      .u-container
        p(
          v-for="p, index in str.kirText2"
          :key="`gli-kirText2-${index}`"
          v-html="p"
        )

  //- section kaj
  section.gli-kaj
    .u-section
      .u-container-lg
        g-pic(
          src="../img/living/greenland_living_pic5_1"
          ext="jpg"
          :alt="str.kajImg1Caption"
          classname="gc-kaj-img-1"
          :webp="true"
        )
      .u-container
        p.quote-caption(v-html="str.kajImg1Caption")
        g-quote(:text="str.kajTitle")
        p(
          v-for="p, index in str.kajText1"
          :key="`gli-kajText1-${index}`"
          v-html="p"
        )

    .u-container-lg
      g-pic(
        src="../img/living/greenland_living_pic5_2"
        ext="jpg"
        :alt="str.kajImg2Caption"
        classname="gc-kaj-img-2"
        :webp="true"
      )
      p.caption(v-html="str.kajImg2Caption")

    .u-section
      .u-container
        p(
          v-for="p, index in str.kajText2"
          :key="`gli-kajText2-${index}`"
          v-html="p"
        )

  //- section pau
  section.gli-pau
    .u-section
      .u-container-lg
        g-pic(
          src="../img/living/greenland_living_pic6_1"
          ext="jpg"
          :alt="str.pauImg1Caption"
          classname="gc-pau-img-2"
          :webp="true"
        )
      .u-container
        p.quote-caption(v-html="str.pauImg1Caption")
        g-quote(:text="str.pauTitle")
        p(
          v-for="p, index in str.pauText1"
          :key="`gli-pauText1-${index}`"
          v-html="p"
        )

    .u-container-lg
      g-pic(
        src="../img/living/greenland_living_pic6_2"
        ext="jpg"
        :alt="str.pauImg2Caption"
        classname="gc-pau-img-2"
        :webp="true"
      )
      p.caption(v-html="str.pauImg2Caption")
      
    .u-section
      .u-container
        p(
          v-for="p, index in str.pauText2"
          :key="`gli-pauText2-${index}`"
          v-html="p"
        )

    .u-container
      .flourish-embed.flourish-chart(data-src="visualisation/11056258")
      p.caption(v-html="str.pauImg3Caption")
      
    .u-section
      .u-container
        p(
          v-for="p, index in str.pauText3"
          :key="`gli-pauText3-${index}`"
          v-html="p"
        )

  //- section chris
  section.gli-chris
    .u-section
      .u-container-lg
        g-pic(
          src="../img/living/greenland_living_pic7_1"
          ext="jpg"
          :alt="str.chrisImg1Caption"
          classname="gc-chris-img-1"
          :webp="true"
        )
      .u-container
        p.quote-caption(v-html="str.chrisImg1Caption")
        g-quote(:text="str.chrisTitle")
        p(
          v-for="p, index in str.chrisText1"
          :key="`gli-chrisText1-${index}`"
          v-html="p"
        )

    .u-container-lg
      g-pic(
        src="../img/living/greenland_living_pic7_2"
        ext="jpg"
        :alt="str.chrisImg2Caption"
        classname="gc-chris-img-2"
        :webp="true"
      )
      p.caption(v-html="str.chrisImg2Caption")
      
    .u-section
      .u-container
        p(
          v-for="p, index in str.chrisText2"
          :key="`gli-chrisText2-${index}`"
          v-html="p"
        )

  //- section avi
  section.gli-avi
    .u-section
      .u-container-lg
        g-pic(
          src="../img/living/greenland_living_pic8_1"
          ext="jpg"
          :alt="str.aviImg1Caption"
          classname="gc-avi-img-1"
          :webp="true"
        )
      .u-container
        p.quote-caption(v-html="str.aviImg1Caption")
        g-quote(:text="str.aviTitle")
        p(
          v-for="p, index in str.aviText1"
          :key="`gli-aviText1-${index}`"
          v-html="p"
        )
      .u-container
        .flourish-embed.flourish-chart(data-src="visualisation/11056017")
        p.caption(v-html="str.aviImg2Caption")
      
    .u-section
      .u-container
        p(
          v-for="p, index in str.aviText2"
          :key="`gli-aviText2-${index}`"
          v-html="p"
        )

    .u-container-lg
      g-pic(
        src="../img/living/greenland_living_pic8_3"
        ext="jpg"
        :alt="str.aviImg3Caption"
        classname="gc-avi-img-3"
        :webp="true"
      )
      p.caption(v-html="str.aviImg3Caption")
      
    .u-section
      .u-container
        p(
          v-for="p, index in str.aviText3"
          :key="`gli-aviText3-${index}`"
          v-html="p"
        )

  //- section bo
  section.gli-bo
    .u-section
      .u-container-lg
        g-pic(
          src="../img/living/greenland_living_pic9_1"
          ext="jpg"
          :alt="str.boImg1Caption"
          classname="gc-bo-img-1"
          :webp="true"
        )
      .u-container
        p.quote-caption(v-html="str.boImg1Caption")
        g-quote(:text="str.boTitle")
        p(
          v-for="p, index in str.boText1"
          :key="`gli-boText1-${index}`"
          v-html="p"
        )

    .u-container
        .flourish-embed.flourish-chart(data-src="visualisation/11053342")
        p.caption(v-html="str.boImg2Caption")
      
    .u-section
      .u-container
        p(
          v-for="p, index in str.boText2"
          :key="`gli-boText2-${index}`"
          v-html="p"
        )

    .u-container-lg
      g-pic(
        src="../img/living/greenland_living_pic9_3"
        ext="jpg"
        :alt="str.boImg3Caption"
        classname="gc-bo-img-1"
        :webp="true"
      )
      p.caption(v-html="str.boImg3Caption")
  
    .u-section
      .u-container
        p(
          v-for="p, index in str.boText3"
          :key="`gli-boText3-${index}`"
          v-html="p"
        )

  footer.g-footer
    g-series(
      public-path="../"
      :list="str.seriesList"
    )
    .u-section.g-footer__copyright-wrapper
      .u-container.g-footer__copyright
        footer-editor(:data="editor")
        footer-share(
          :title="str.metaTitle"
          :description="str.metaDescription"
        )
        footer-questionnaire
        footer-logo(public-path="../")

</template>

<script>
import FooterLogo from '@/components/common/footer/footer-logo.vue';
import FooterEditor from '@/components/common/footer/footer-editor.vue';
import FooterQuestionnaire from '@/components/common/footer/footer-questionnaire.vue';
import FooterShare from '@/components/common/footer/footer-share.vue';
import GSlide from '@/components/g-slide.vue';
import GPic from '@/components/g-pic.vue';
import GVid from '@/components/g-vid.vue';
import GVidWControl from '@/components/g-vid-w-control.vue';
import GSeries from '@/components/g-series.vue';
import GHeroScroll from '@/components/g-hero-scroll.vue';
import GQuote from '@/components/g-quote.vue';
import NmdHeader from '@/components/common/header/HeaderTypeA.vue';
import str from '@/assets/string/living.json';
import { env } from '@/assets/mixins';

export default {
  name: 'App',
  mixins: [env],
  components: {
    FooterLogo,
    FooterEditor,
    FooterQuestionnaire,
    FooterShare,
    GSlide,
    GPic,
    GVid,
    GVidWControl,
    GSeries,
    GHeroScroll,
    GQuote,
    NmdHeader,
  },
  data() {
    return {
      str,
      headerList: [
        {
          title: '解凍格陵蘭',
          url: '',
          active: false,
        },
        {
          title: '北極站科學家篇',
          url: 'climate/',
          active: false,
        },
        {
          title: '撈海廢討海人篇',
          url: 'fishing/',
          active: false,
        },
        {
          title: '穿梭綠地牧羊人篇',
          url: 'farming/',
          active: false,
        },
        {
          title: '格陵蘭居民篇',
          url: 'living/',
          active: true,
        },
      ],
      editor: [
        {
          title: str.editorInterviewTitle,
          members: str.editorInterviewMembers,
        },
        {
          title: str.editorProducerTitle,
          members: str.editorProducerMembers,
        },
        {
          title: str.editorVisualTitle,
          members: str.editorVisualMembers,
        },
        {
          title: str.editorEngineerTitle,
          members: str.editorEngineerMembers,
        },
        {
          title: str.editorDirectorTitle,
          members: str.editorDirectorMembers,
        },
        {
          title: str.editorGroupTitle,
          members: str.editorGroupMembers,
        },
        {
          title: '',
          members: [str.editorReleaseDate],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.g-hero-title {
  text-align: center;
  margin-bottom: $spacing-11 !important;

  h2 {
    @include general-font-h3;
  }
}

.quote-caption {
  line-height: 1.3;
}
</style>

<style lang="scss">
.gli-hero-vid-wrapper {
  position: relative;
}

.gfi-transition {
  min-height: 600px;
  display: flex;
  align-items: center;
}

.quote-caption {
  display: flex;
  align-items: center;
  color: $g-blue-1;

  &::before {
    content: '';
    display: inline-block;
    width: 10px;
    height: 20px;
    margin-right: $spacing-2;
    background-color: $g-blue-1;
  }
}
</style>
