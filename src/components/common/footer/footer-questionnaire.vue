<template>
  <div class="footer-questionnaire">
    <a
      class="footer-questionnaire__anchor"
      target="_blank"
      :href="href"
      aria-label="questionnaire"
      name="questionnaire"
      @click="sendGA({ nmdCommon: 'FooterQuestoinnaire' })"
    >
      {{ text }}
    </a>
  </div>
</template>

<script>
import { sendGa } from '@/assets/mixins';

export default {
  name: 'FooterQuestionnaire',
  mixins: [sendGa],
  props: {
    href: {
      type: String,
      default: 'https://www.surveycake.com/s/KpQKN',
    },
    text: {
      type: String,
      default: '請填寫閱讀體驗問卷',
    },
  },
};
</script>

<style lang="scss" scoped>
.footer-questionnaire {
  margin-bottom: $spacing-12;

  &__anchor {
    display: block;
    margin: 0 auto;
    padding: $spacing-6;
    background-color: $white;
    border-radius: 4px;
    color: #808080;
    text-decoration: none;
    text-align: center;

    &:hover {
      color: #808080;
      background-color: rgba($color: $white, $alpha: 0.8);
    }
  }
}
</style>
