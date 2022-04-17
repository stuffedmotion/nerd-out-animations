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
    const clickSprite = document.querySelector("[data-click-sprite]");
    if (!clickSprite) return;

    clickSprite.addEventListener("mouseenter", () => {
      clickSprite.sprite.playOnce({
        frameStart: 1,
        frameEnd: 6,
      });
    });

    clickSprite.addEventListener("click", () => {
      clickSprite.sprite.playOnce({
        frameStart: 7,
      });
    });
  },
  methods: {},
});
</script>

<template>
  <Section title="Sprite Animation">
    <div class="card">
      <div
        class="sprite test-sprite click-sprite"
        data-sprite="logo-hover"
        data-click-sprite
        data-frame-rate="24"
        data-auto-play="0"
        style="visibility: visible"
      >
        <div class="aspect" style="--aspect: 100%">
          <img
            src="//cdn.shopify.com/s/files/1/0257/3290/7063/t/20/assets/sprite-logo-hover-0_1920x.png?v=4777732481848641850"
            alt="logo-hover"
            style="
              transform: translate3d(0px, -160px, 0px) scale(0.5, 0.5);
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
