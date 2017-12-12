import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import Msgs from '@/pages/msgs'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/msgs',
      name: 'Msgs',
      component: Msgs
    }
  ]
})
