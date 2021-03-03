<script>
export default {
  name: 'navigation-menu',
  setup() {
    const menuItems = [
      { name: 'Главная страница', path: '/' },
      { name: 'Расчеты', path: '/calculations' },
    ];
    return {
      menuItems,
    };
  },
};
</script>

<template>
  <nav :class="$style.root">
    <router-link :class="$style.link" v-for="item in menuItems" :key="item.name" :to="item.path">{{
      item.name.toUpperCase()
    }}</router-link>
  </nav>
</template>

<style module>
.root {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  padding: 20px;
}
.link {
  color: black;
  margin: 0 10px;
  text-decoration: none;
}
.link:hover {
  border-bottom: 1px solid silver;
}
</style>
