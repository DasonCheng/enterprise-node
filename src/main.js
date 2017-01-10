// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import './assets/style/weui.css'
import './assets/style/base.scss'
import './assets/script/rem'
import 'lodash'

import App from './App'
import NotFoundPage from './components/pages/not-found.page.vue'
import HomePage from './components/pages/home.page.vue'
import CanvasPage from './components/pages/canvas.page.vue'
import WebGlPage from './components/pages/webgl.page.vue'
import CanvasLine from './components/pages/canvas-line.page.vue'

const router = new VueRouter({
  routes: [
    {path: '/home', component: HomePage},
    {path: '/home/canvas', component: CanvasPage},
    {path: '/home/canvas/line', component: CanvasLine},
    {path: '/home/webgl', component: WebGlPage},
    {path: '', redirect: '/home'},
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
