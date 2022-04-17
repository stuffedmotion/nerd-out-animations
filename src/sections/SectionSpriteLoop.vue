<script>
import { defineComponent } from "vue";

import { initSprites } from "@utils/sprite";
import Section from "../components/Section.vue";

export default defineComponent({
  components: {
    Section,
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  mounted() {
    initSprites();
  },
  methods: {},
});
</script>

<template>
  <Section title="Sprite Animation">
    <div class="card">
      <div
        class="sprite test-sprite"
        data-sprite="logo2"
        data-frame-rate="24"
        style="visibility: visible"
      >
        <div class="aspect" style="--aspect: 100%">
          <img
            src="//cdn.shopify.com/s/files/1/0257/3290/7063/t/20/assets/sprite-logo2-0_1920x.png?v=14342326854228381309"
            alt="logo2"
            style="
              transform: translate3d(0px, 0px, 0px) scale(0.5, 0.5);
              opacity: 0;
            "
          />
          <img
            src="//cdn.shopify.com/s/files/1/0257/3290/7063/t/20/assets/sprite-logo2-1_1920x.png?v=10446330044033765516"
            alt="logo2"
            style="
              transform: translate3d(-640px, -160px, 0px) scale(0.5, 0.5);
              opacity: 1;
            "
          />
        </div>
      </div>
    </div>
  </Section>
</template>

<style lang="scss" scoped>
.card {
  padding: 24px;
  margin: 0 auto;
  width: fit-content;
}

.test-sprite {
  width: 160px;
  height: 160px;
  margin: 0 auto;
}
</style>
