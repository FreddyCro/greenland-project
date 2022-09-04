<template lang="pug">
#app.u-article.greenland
  nmd-header(
    :outlink="headerList"
    :title="str.metaTitle"
    :url="str.metaUrl"
    :description="str.metaDescription"
  )
  
  //- hero
  section.gfi-hero
    .gfi-hero-vid-wrapper
      g-vid(
        src="../vid/fishing/greenland_fishing_video1",
        ext="mp4",
        poster="../img/fishing/greenland_fishing_preview1",
        poster-ext="webp"
        id="gfi-hero-vid",
        classname="gfi-hero-vid"
      )

  //- section intro
  section.u-section.gfi-intro
    h1(v-html="str.introTitle")
    h2(v-html="str.introSubTitle")
    p(
      v-for="p, index in str.introText1"
      :key="`gfi-introText1-${index}`"
      v-html="p"
    )
    .u-full-bg-container
      g-pic(
        src="../img/fishing/greenland_fishing_pic2"
        ext="jpg"
        :alt="str.introTitle"
        classname="gc-intro-bg"
        :webp="true"
      )
    p(
      v-for="p, index in str.introText2"
      :key="`gfi-introText2-${index}`"
      v-html="p"
    )
    .u-full-vid-container
      g-vid-w-control(
        src="../vid/fishing/greenland_fishing_video3",
        ext="mp4"
        poster="../img/fishing/greenland_fishing_preview3",
        poster-ext="webp"
        id="gc-vid3",
        classname="gc-vid3"
      )
    p(
      v-for="p, index in str.introText3"
      :key="`gfi-introText3-${index}`"
      v-html="p"
    )

  //- section ja
  .u-full-bg-container
    g-pic(
      src="../img/fishing/greenland_fishing_pic4_1"
      ext="jpg"
      :alt="str.janBeforeImg1Caption"
      classname="gf-ja-before-img1"
      :webp="true"
    )
  section.u-section.gfi-ja
    h2(v-html="str.janTitle")
    p(
      v-for="p, index in str.janText1"
      :key="`gfi-janText1-${index}`"
      v-html="p"
    )

  //- section ja-before
  section.u-section.gfi-ja-before
    h3(v-html="str.janBeforeTitle")
    p(
      v-for="p, index in str.janBeforeText1"
      :key="`gfi-janBeforeText1-${index}`"
      v-html="p"
    )
    g-pic(
      src="../img/fishing/greenlnad_fishing_pic4_2"
      ext="jpg"
      :alt="str.janBeforeImg1Caption"
      classname="gf-ja-before-img1"
      :webp="true"
    )
    p.caption(v-html="str.janBeforeImg1Caption")

  //- section ja-protection
  section.u-section.gfi-ja-protection
    h3(v-html="str.janProtectionTitle")
    p(
      v-for="p, index in str.janProtectionText1"
      :key="`gfi-janProtectionText1-${index}`"
      v-html="p"
    )
    g-pic(
      src="../img/fishing/greenland_fishing_pic5_1"
      ext="jpg"
      :alt="str.janProtectionImg1Caption"
      classname="gf-ja-protection-img1"
      :webp="true"
    )
    p.caption(v-html="str.janProtectionImg1Caption")

  //- section crisis
  section.u-section.gfi-crisis
    h2(v-html="str.crisisTitle")
    p(
      v-for="p, index in str.crisisText1"
      :key="`gfi-crisisText1-${index}`"
      v-html="p"
    )

  //- section crisis-plastic
  section.u-section.gfi-crisis-plastic
    h3(v-html="str.crisisPlasticTitle")
    p(
      v-for="p, index in str.crisisPlasticText1"
      :key="`gfi-crisisPlasticText1-${index}`"
      v-html="p"
    )
    //- chart
    .flourish-embed.flourish-chart(data-src="visualisation/10851355")
    p(v-html="str.crisisPlasticImg1Caption")
    
    p(
      v-for="p, index in str.crisisPlasticText2"
      :key="`gfi-crisisPlasticText2-${index}`"
      v-html="p"
    )
    g-pic(
      src="../img/fishing/greenland_fishing_pic5_3"
      ext="jpg"
      :alt="str.crisisPlasticImg2Caption"
      classname="gf-crisis-plastic-img2"
      :webp="true"
    )
    p.caption(v-html="str.crisisPlasticImg2Caption")
    p(
      v-for="p, index in str.crisisPlasticText3"
      :key="`gfi-crisisPlasticText3-${index}`"
      v-html="p"
    )

  //- section crisis-ice
  section.u-section.gfi-crisis-ice
    h3(v-html="str.crisisIceTitle")
    p(
      v-for="p, index in str.crisisIceText1"
      :key="`gfi-crisisIceText1-${index}`"
      v-html="p"
    )
    .flourish-embed.flourish-chart(data-src="visualisation/10851378")
    p.caption(v-html="str.crisisIceImg1Caption")
    p(
      v-for="p, index in str.crisisIceText2"
      :key="`gfi-crisisIceText2-${index}`"
      v-html="p"
    )

  //- section warm
  .u-full-bg-container
    g-pic(
      src="../img/fishing/greenland_fishing_pic6_1"
      ext="jpg"
      :alt="str.warmTitle"
      classname="gf-crisis-ice-img1"
      :webp="true"
    )
  section.u-section.gfi-warm
    h2(v-html="str.warmTitle")
    p(
      v-for="p, index in str.warmText1"
      :key="`gfi-warmText1-${index}`"
      v-html="p"
    )

  //- section warm-fish
  section.u-section.gfi-warm-fish
    h3(v-html="str.warmFishTitle")
    p(
      v-for="p, index in str.warmFishText1"
      :key="`gfi-warmFishText1-${index}`"
      v-html="p"
    )
    g-pic(
      src="../img/fishing/greenland_fishing_pic6_2"
      ext="jpg"
      :alt="str.warmFishImg1Caption"
      classname="gf-warm-fish-img1"
      :webp="true"
    )
    p.caption(v-html="str.warmFishImg1Caption")

  //- section warm-warn
  section.u-section.gfi-warm-warn
    h3(v-html="str.warmWarnTitle")
    p(
      v-for="p, index in str.warmWarnText1"
      :key="`gfi-warmWarnText1-${index}`"
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
import str from '@/assets/string/fishing.json';

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

<style lang="scss"></style>

<style lang="scss" scoped></style>
