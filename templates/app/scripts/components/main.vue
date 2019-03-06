<template>
  <div class="main">
    <div v-if="list.length" class="main-wrapper">
      <v-list v-for="item in list" :key="item.id" :item="item"></v-list>
    </div>
    <p v-else>No Body</p>
  </div>
</template>

<script>
import List from './list.vue';

export default {
  name: 'App',
  components: {
    'v-list': List
  },
  data() {
    return {
      list: []
    };
  },
  beforeMount() {
    if (this.$events.list.length) {
      this.list = this.$events.list;
    } else {
      this.$events.getList().then(res => {
        this.list = res;
      });
    }
  }
};
</script>

<style lang="less">
.main {
  max-width: 960px;
  margin: 0 auto;
  overflow: hidden;
  .main-wrapper {
    margin-top: 5.6rem;
    border-radius: 2px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  }
}
</style>
