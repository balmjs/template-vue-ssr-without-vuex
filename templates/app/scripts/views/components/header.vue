<template>
  <header class="header">
    <ul v-if="nav.length" class="header-list">
      <!-- <li class="header-list-item-active">SSR</li>
      <li class="header-list-item">Vue</li>
      <li class="header-list-item">React</li>
      <li class="header-list-item">Node.js</li>
      <li class="header-list-item">Webpack</li>
      <li class="header-list-item">Express</li>
      <li class="header-list-item">Less</li>-->
      <li class="header-list-item" v-for="item in nav" :key="item">
        {{ item }}
      </li>
    </ul>
    <p v-else>No Header</p>
  </header>
</template>

<script>
export default {
  name: 'MyHeader',
  computed: {
    nav() {
      return this.$events.nav || [];
    }
  }
};
</script>

<style lang="less">
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  transition: all 0.2s;
  background: #fff;
  height: 3.833rem;
  line-height: 3.833rem;
  margin: auto;
  .header-list {
    display: flex;
    max-width: 960px;
    margin: auto;
    .header-list-item {
      padding: 0 1.5rem;
      font-size: 1.16rem;
      transition: all 0.3s;
      border-bottom: 2px solid transparent;
      cursor: pointer;
      color: #71777c;
      &:hover {
        color: #007fff;
        border-color: #007fff;
      }
    }
    .header-list-item-active {
      padding: 0 1.5rem;
      font-size: 1.16rem;
      transition: all 0.3s;
      cursor: pointer;
      border-bottom: 2px solid transparent;
      color: #007fff;
      border-color: #007fff;
    }
  }
}
</style>
