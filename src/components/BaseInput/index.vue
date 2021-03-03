<script>
export default {
  name: 'base-input',
  props: ['placeholder'],
  setup() {
    return {};
  },
};
</script>

<template>
  <input :class="$style.root" :placeholder="placeholder" />
</template>

<style module>
.root {
  height: 42px;
  border: 1px solid silver;
  padding: 0 10px;
  min-width: 300px;
  box-sizing: border-box;
  border-radius: 6px;
  color: black;
  background-color: rgba(255, 255, 255, 0.8);
}
.root::placeholder {
  color: black;
}
</style>
