import Vue from 'vue';
import App from '@/views/layouts/app';
import { createRouter } from '@/routes';
import EventBus from '@/event';
import { DEBUG } from '@/config';

Vue.config.productionTip = false;
Vue.config.devtools = true;
Vue.use(EventBus);
/* eslint-disable */
export function createApp() {
  // 创建 router 实例
  const router = createRouter();

  let options = {
    // 注入 router 到根 Vue 实例
    router,
    render: h => h(App)
  };

  if (DEBUG) {
    options.el = '#dev';
  }

  const app = new Vue(options);
  // 返回 app 和 router
  return { app, router, eventBus: app.$events, App };
}
