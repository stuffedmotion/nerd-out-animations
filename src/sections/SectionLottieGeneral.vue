<script>
import { defineComponent } from "vue";

import {
  initializeAnimations,
  restartAnimations,
  pauseAnimations,
  resizeAnimations,
} from "@utils/animation";
import Section from "../components/Section.vue";

export default defineComponent({
  components: {
    Section,
  },
  data() {
    return {
      animations: [
        {
          label: "Custom Dashboards",
          path: "/lottie1.json",
          loopSegment: "157,243",
        },
        {
          label: "Unique Reports",
          path: "/lottie2.json",
        },
      ],
      currentAnimation: 0,
      lottieHeight: "270",
    };
  },
  computed: {
    animHeightStyle() {
      return `--anim-height: ${this.lottieHeight}px`;
    },
  },
  watch: {
    animHeightStyle() {
      window.requestAnimationFrame(() => {
        resizeAnimations(this.$el);
      });
    },
  },
  mounted() {
    initializeAnimations();
    this.playCurrentAnimation();
  },
  methods: {
    playCurrentAnimation() {
      pauseAnimations(this.$el);

      const $animEl = this.$refs.animations[this.currentAnimation];
      if (!$animEl) return;

      restartAnimations($animEl);
    },
    setAnimation(animationId) {
      this.currentAnimation = animationId;
      this.playCurrentAnimation();
    },
  },
});
</script>

<template>
  <Section title="Lottie: Vector Animations">
    <template #extra>
      <input
        v-model="lottieHeight"
        class="slider"
        type="range"
        min="270"
        max="700"
      />
    </template>

    <div class="animations">
      <div class="animations__nav">
        <button
          v-for="(animation, idx) in animations"
          :key="idx"
          :class="{ 'is-active': currentAnimation === idx }"
          @click="setAnimation(idx)"
        >
          {{ animation.label }}
        </button>
      </div>

      <div class="card" :style="animHeightStyle">
        <div
          v-for="(animation, idx) in animations"
          :key="idx"
          ref="animations"
          :class="{ 'is-visible': currentAnimation === idx }"
          class="lottieAnim"
          :data-anim="animation.path"
          :data-anim-loop-segment="animation.loopSegment"
        ></div>
      </div>
    </div>
  </Section>
</template>

<style lang="scss" scoped>
.animations {
  &__nav {
    display: flex;
    justify-content: center;
    gap: 24px;
    margin-bottom: 56px;
  }

  button {
    appearance: none;
    background: none;
    font-size: 32px;
    color: white;
    font-weight: 600;
    border: none;
    cursor: pointer;
    opacity: 0.4;
    transform: scale(0.7);
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);

    &.is-active {
      opacity: 1;
      transform: scale(1);
    }
  }
}

.card {
  padding: 24px;
  background: white;
  border-radius: 24px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  margin: 0 auto;
  width: fit-content;
}

.lottieAnim {
  height: var(--anim-height, 270px);
  aspect-ratio: 628/270;
  pointer-events: none;
  display: none;
  margin: 0 auto;

  &.is-visible {
    display: block;
  }
}

.slider {
  display: block;
  margin-top: 16px;
}
</style>
