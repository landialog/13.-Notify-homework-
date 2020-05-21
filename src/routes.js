import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from '@/pages/Home'
import NoteFound from '@/pages/404'
import Notify from '@/pages/NotifyPage'

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/notify',
      name: 'notify',
      component: Notify
    },
    {
      path: '*',
      name: 'NoteFound',
      component: NoteFound
    },
  ]
})