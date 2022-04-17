<script>
import { defineComponent } from "vue";
import { ColorPicker } from "vue3-colorpicker";
import "vue3-colorpicker/style.css";

import {
  restartAnimations,
  createAnimationApi,
  hexToLottieColor,
} from "@utils/animation";
import Section from "../components/Section.vue";

export default defineComponent({
  components: {
    Section,
    ColorPicker,
  },
  data() {
    return {
      segments: {
        A: {
          value: 25,
          color: "#E386A1",
        },
        B: {
          value: 25,
          color: "#4CACFF",
        },
        C: {
          value: 50,
          color: "#FFBF51",
        },
      },
    };
  },
  mounted() {
    window.addEventListener(`load`, () => {
      const animationAPI = createAnimationApi(this.$el);

      this.playAnimation();

      Object.keys(this.segments).forEach((key) => {
        const valueKeyPath = animationAPI.getKeyPath(
          `AA PROPS,Effects,CIRC ${key} VALUE,0`
        );
        const colorKeyPath = animationAPI.getKeyPath(
          `AA PROPS,Effects,CIRC ${key} COLOR,0`
        );

        animationAPI.addValueCallback(valueKeyPath, () => {
          return this.segments[key].value;
        });

        animationAPI.addValueCallback(colorKeyPath, () => {
          return hexToLottieColor(this.segments[key].color);
        });
      });
    });
  },
  methods: {
    playAnimation() {
      restartAnimations(this.$el);
    },
  },
});
</script>

<template>
  <Section title="Lottie: Dynamic API">
    <template #extra>
      <div
        v-for="segmentKey in Object.keys(segments)"
        :key="segmentKey"
        class="segment"
      >
        <input
          v-if="segmentKey != 'C'"
          v-model="segments[segmentKey].value"
          class="slider"
          type="range"
          min="25"
          max="75"
        />
        <color-picker
          v-model:pureColor="segments[segmentKey].color"
          format="hex"
        />
      </div>
    </template>

    <div class="card" @click="playAnimation">
      <div
        class="lottieAnim"
        data-anim="/lottie-api.json"
        data-anim-renderer="svg"
        data-anim-loop-segment="157,243"
      ></div>
    </div>
  </Section>
</template>

<style lang="scss" scoped>
.card {
  padding: 24px;
  background: #f8f9fc;
  border-radius: 24px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  margin: 0 auto;
  width: fit-content;
}

.lottieAnim {
  height: 252px;
  aspect-ratio: 628/252;
  pointer-events: none;
  margin: 0 auto;
}

.slider {
  display: block;
  margin-top: 16px;
}
</style>

<style lang="scss">
.segment {
  margin-bottom: 24px;
}
</style>
