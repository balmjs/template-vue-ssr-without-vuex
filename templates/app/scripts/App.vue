<template>
  <div id="app">
    <v-header></v-header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/header';

export default {
  name: 'app',
  components: {
    'v-header': Header
  },
  // mounted() {
  //   this.$events.getNav(); // NOTE: for SPA
  // },
  asyncData({ eventBus }) {
    return eventBus.getNav(); // NOTE: for SSR
  }
};
</script>

<style lang="less">
html {
  font-size: 12px;
}
body {
  background: #f4f5f5;
}
* {
  list-style: none;
}
#app {
  min-height: calc(100vh);
}
</style>
