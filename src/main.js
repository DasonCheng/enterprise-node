// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import './assets/style/weui.css'
import './assets/style/base.scss'
import './assets/script/rem'

import App from './App'
import NotFoundPage from './components/pages/not-found.page.vue'
import HomePage from './components/pages/home.page.vue'
import GameOnePage from './components/pages/game-one.page.vue'

const router = new VueRouter({
  routes: [
    {path: '/game', component: HomePage},
    {path: '/game/one', component: GameOnePage},
    {path: '', redirect: '/game'},
    {path: '*', component: NotFoundPage}
  ],
  mode: 'history',
  linkActiveClass: 'active',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {x: 0, y: 0}
    }
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
