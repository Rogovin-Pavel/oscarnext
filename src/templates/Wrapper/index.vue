<template>
  <div :class="$style.root">
    <slot name="body" />
  </div>
</template>

<script>
export default {
  name: 'wrapper',
  setup() {
    return {};
  },
};
</script>

<style module>
.root {
  width: 1024px;
  margin: 0 auto;
  padding: 20px;
}
</style>
