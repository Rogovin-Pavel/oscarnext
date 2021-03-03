<script>
export default {
  name: 'base-select',
  props: ['options', 'value'],
  setup() {
    return {};
  },
};
</script>

<template>
  <select :selected="value" :class="$style.root">
    <option :class="$style.option" v-for="(option, index) in options" :key="index">{{ option }}</option>
  </select>
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
.option {
  color: black;
}
</style>
