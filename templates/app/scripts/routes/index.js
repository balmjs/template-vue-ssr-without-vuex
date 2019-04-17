import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/views/components/main';
import Test from '@/views/components/test';

Vue.use(Router);

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/home',
        name: 'main',
        component: Main,
        alias: '/'
      },
      {
        path: '/test',
        name: 'test',
        component: Test
      }
    ]
  });
}
