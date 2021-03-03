<script>
import Wrapper from './templates/Wrapper/index.vue';
import NavigationMenu from './components/NavigationMenu/index.vue';

import backgroundImage from './assets/background.svg';

export default {
  name: 'App',
  data() {
    return {
      backgroundImage,
    };
  },
  components: {
    Wrapper,
    NavigationMenu,
  },
};
</script>

<template>
  <main
    :class="$style.root"
    :style="{
      backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1)), url(${backgroundImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }"
  >
    <NavigationMenu :class="$style.nav" />
    <Wrapper :class="$style.wrapper">
      <template #body>
        <router-view />
      </template>
    </Wrapper>
  </main>
</template>

<style module>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  min-height: 100vh;
}

body *,
.nav * {
  color: white;
}

.root {
  min-height: 100vh;
}
.wrapper {
  padding-top: 60px;
}
</style>
