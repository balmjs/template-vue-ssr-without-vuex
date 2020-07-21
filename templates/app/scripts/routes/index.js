import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/pages/home';
import Test from '@/views/pages/test';

Vue.use(Router);

export function createRouter() {
  return new Router({
    mode: 'history',
    // base: '/app/', // NOTE: for server
    routes: [
      {
        path: '/home',
        name: 'home',
        component: Home,
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
