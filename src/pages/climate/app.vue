<template lang="pug">
#app.u-article.greenland
  nmd-header(
    :outlink="headerList"
    :title="str.metaTitle"
    :url="str.metaUrl"
    :description="str.metaDescription"
  )

  //- hero
  section.gc-hero
    .gc-hero-vid-wrapper
      g-vid(
        src="../vid/climate/greenland_climate_video1",
        ext="mp4",
        poster="../img/climate/greenland_climate_preview1",
        poster-ext="webp"
        id="gc-hero-vid",
        classname="gc-hero-vid"
      )

  .next-layer
    //- section intro
    section.u-section.gc-intro
      .u-container
        h1(v-html="str.introTitle")
        p(
          v-for="p, index in str.introSectionText"
          :key="`gc-introSectionText-${index}`"
          v-html="p"
        )

    .u-full-bg-container.gc-intro-full-bg
      g-pic(
        src="../img/climate/greenland_climate_pic2"
        ext="jpg"
        :alt="str.introTitle"
        classname="gc-intro-bg"
        :webp="true"
      )

    .next-layer

      //- section 2
      section.u-section.gc-section2
        .u-container
          p(
            v-for="p, index in str.section2Text"
            :key="`gc-section2-${index}`"
            v-html="p"
          )
        .u-full-vid-container
          g-vid-w-control(
            src="../vid/climate/greenland_climate_video3",
            ext="mp4"
            poster="../img/climate/greenland_climate_preview3",
            poster-ext="webp"
            id="gc-vid3",
            classname="gc-vid3"
          )

      //- section transition
      section.u-section.gc-transition
        .u-container
          p(
            v-for="p, index in str.transitionText"
            :key="`gc-transition-${index}`"
            v-html="p"
          )

      //- section morten
      .u-full-img-container
        g-pic(
          src="../img/climate/greenland_climate_pic4_1"
          ext="jpg"
          alt=""
          classname="gc-morten-cover"
          :webp="true"
        )
      .u-wide-img-container
        p.caption(v-html="str.mortenCoverCaption")

      section.u-section.gc-morten
        .u-container
          h2(v-html="str.mortenTitle")
          p(
            v-for="p, index in str.mortenText"
            :key="`gc-morten-${index}`"
            v-html="p"
          )

      //- section collage
      .u-wide-img-container
        g-pic(
          src="../img/climate/greenland_climate_pic4_2"
          ext="jpg"
          alt=""
          classname="gc-collage-img1"
          :webp="true"
        )
        p.caption(v-html="str.collageImg1Caption")

      .u-container
        //- section collage
        section.u-section.gc-collage
          h2(v-html="str.collageTitle")
          p(
            v-for="p, index in str.collageText1"
            :key="`gc-collageText1-${index}`"
            v-html="p"
          )
          h1 here is a chart
          p.caption(v-html="str.protectionImg1Caption")

        //- section protection
        section.u-section.gc-protection
          h2(v-html="str.protectionTitle")
          p(
            v-for="p, index in str.protectionText1" :key="`gc-protectionText1-${index}`"
            v-html="p"
          )
          g-pic(
            src="../img/climate/greenland_climate_pic4_4"
            ext="jpg"
            :alt="str.protectionImg2Caption"
            classname="gc-protection-img2"
            :webp="true"
          )
          p.caption(v-html="str.protectionImg2Caption")
          p(
            v-for="p, index in str.protectionText2" :key="`gc-protectionText2-${index}`"
            v-html="p"
          )

        //- section jp
        section.u-section.gc-jp
          h2(v-html="str.jpTitle")
          p(
            v-for="p, index in str.jpText1" :key="`gc-jpText1-${index}`"
            v-html="p"
          )
          g-pic(
            src="../img/climate/greenland_climate_pic5_1"
            ext="jpg"
            :alt="str.jpImg1Caption"
            classname="gc-jp-img1"
            :webp="true"
          )
          p.caption(v-html="str.jpImg1Caption")
          p(
            v-for="p, index in str.jpText2" :key="`gc-jpText2-${index}`"
            v-html="p"
          )
          g-pic(
            src="../img/climate/greenland_climate_pic5_2"
            ext="jpg"
            :alt="str.jpImg2Caption"
            classname="gc-jp-img2"
            :webp="true"
          )
          p.caption(v-html="str.jpImg2Caption")

        //- section sea
        section.u-section.gc-sea
          h2(v-html="str.seaTitle")
          p(
            v-for="p, index in str.seaText1" :key="`gc-seaText1-${index}`"
            v-html="p"
          )
          g-pic(
            src="../img/climate/greenland_climate_pic5_3"
            ext="jpg"
            :alt="str.seaImg1Caption"
            classname="gc-sea-img1"
            :webp="true"
          )
          p.caption(v-html="str.seaImg1Caption")

        //- section science
        section.u-section.gc-science
          h2(v-html="str.scienceTitle")
          p(
            v-for="p, index in str.scienceText1" :key="`gc-scienceText1-${index}`"
            v-html="p"
          )
          g-pic(
            src="../img/climate/greenland_climate_pic6_2"
            ext="jpg"
            :alt="str.scienceImg1Caption"
            classname="gc-science-img1"
            :webp="true"
          )
          p.caption(v-html="str.scienceImg1Caption")

          p(
            v-for="p, index in str.scienceText2" :key="`gc-scienceText2-${index}`"
            v-html="p"
          )

      footer.g-footer
        g-series(:list="str.seriesList")
        .u-section.g-footer__copyright-wrapper
          .u-container.g-footer__copyright
            footer-editor(:data="editor")
            footer-share(
              :title="str.metaTitle"
              :url="str.metaUrl"
              :description="str.metaDescription"
            )
            footer-questionnaire
            footer-logo
</template>

<script>
import NmdHeader from '@/components/common/header/HeaderTypeA.vue';
import GPic from '@/components/g-pic.vue';
import GVid from '@/components/g-vid.vue';
import GVidWControl from '@/components/g-vid-w-control.vue';
import GSeries from '@/components/g-series.vue';
import FooterLogo from '@/components/common/footer/footer-logo.vue';
import FooterEditor from '@/components/common/footer/footer-editor.vue';
import FooterQuestionnaire from '@/components/common/footer/footer-questionnaire.vue';
import FooterShare from '@/components/common/footer/footer-share.vue';
import str from '@/assets/string/climate.json';

export default {
  name: 'App',
  components: {
    NmdHeader,
    GPic,
    GVid,
    GVidWControl,
    GSeries,
    FooterLogo,
    FooterEditor,
    FooterQuestionnaire,
    FooterShare,
  },
  data() {
    return {
      str,
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

<style lang="scss">
.gc-hero {
  position: sticky;
  top: 0;
}

.next-layer {
  position: relative;
  /* background-color: $bg-white; */
}

.gc-intro {
  background-color: rgba($color: $black, $alpha: 0.4);
  color: $font-color-light;
}

.gc-intro-full-bg {
  position: sticky;
  top: 0;
}

.gc-hero-vid-wrapper {
}
</style>

<style lang="scss" scoped></style>
