<template>
  <div class="main">
    <div v-if="list.length" class="main-wrapper">
      <my-list v-for="item in list" :key="item.id" :item="item"></my-list>
    </div>
    <p v-else>No Body</p>
  </div>
</template>

<script>
import MyList from '@/views/components/list';

export default {
  name: 'App',
  components: {
    MyList
  },
  data() {
    return {
      list: []
    };
  },
  beforeMount() {
    if (this.$events.list.length) {
      console.log('fetch data by cache');
      this.list = this.$events.list;
    } else {
      console.log('fetch data by client');
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
