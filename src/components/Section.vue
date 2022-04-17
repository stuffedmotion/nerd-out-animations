<script setup>
defineProps({
  title: String,
});
</script>

<template>
  <section class="section">
    <div class="meta">
      {{ title }}

      <slot name="extra"></slot>
    </div>

    <slot></slot>
  </section>
</template>

<style lang="scss" scoped>
.section {
  background-color: transparent;
  block-size: 100vh;
  scroll-snap-align: center;
  scroll-snap-stop: always;
  display: grid;
  place-items: center;
  position: relative;
}

.meta {
  position: absolute;
  top: 24px;
  left: 24px;
  font-size: 24px;
  color: white;
  opacity: 0.7;
}
</style>
