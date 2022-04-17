<script lang="ts">
import SectionLottieGeneral from "@sections/SectionLottieGeneral.vue";
import SectionLottieApi from "@sections/SectionLottieApi.vue";
import SectionSpriteLoop from "./sections/SectionSpriteLoop.vue";
import SectionSpriteInteractive from "./sections/SectionSpriteInteractive.vue";
import SectionSvg from "./sections/SectionSvg.vue";

export default {
  components: {
    SectionLottieGeneral,
    SectionLottieApi,
    SectionSpriteLoop,
    SectionSpriteInteractive,
    SectionSvg,
  },
};
</script>

<template>
  <SectionLottieGeneral />
  <SectionLottieApi />
  <SectionSpriteLoop />
  <SectionSpriteInteractive />
  <SectionSvg />
</template>

<style lang="scss">
* {
  font-family: "Signika Negative", sans-serif;
  -webkit-tap-highlight-color: transparent;
}

html {
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
}

body {
  margin: 0;
  padding: 0;
  &:before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(43deg, #2bbcff, #c850c0 46%, #ffcc70);
    z-index: -1;
  }
}

input[type="range"] {
  -webkit-appearance: none;
  background-color: rgba(255, 255, 255, 0.2);
  height: 12px;
  overflow: hidden;
  width: 100px;
}

input[type="range"]::-webkit-slider-runnable-track {
  -webkit-appearance: none;
  height: 12px;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  background: white;
  border-radius: 50%;
  cursor: pointer;
  height: 12px;
  width: 12px;
  border: 0;
}

.aspect {
  position: relative;
  z-index: 1;
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 100%;
}

.sprite {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.sprite img {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: auto;
  max-width: initial;
  height: auto;
  pointer-events: none;
  transform-origin: 0 0;
}

[data-click-sprite] {
  cursor: pointer;
}
</style>
