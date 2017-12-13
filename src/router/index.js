import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import Msgs from '@/pages/msgs'
import Detail from '@/pages/detail'
import Bulletin from '@/pages/bulletin'
import Chassis from '@/pages/chassis'
import Fuel from '@/pages/fuel'
import Exempt from '@/pages/exempt'
import Energy from '@/pages/energy'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home', // 首页
      component: Home
    },
    {
      path: '/msgs',
      name: 'Msgs', // 结果详情页
      component: Msgs
    },
    {
      path: '/detail',
      name: 'Detail', // 最终燃油详情页
      component: Detail
    },
    {
      path: '/bulletin',
      name: 'Bulletin', // 公告号查询列表
      component: Bulletin
    },
    {
      path: '/chassis',
      name: 'Chassis', // 底盘查询列表
      component: Chassis
    },
    {
      path: '/fuel',
      name: 'Fuel', // 燃油查询列表
      component: Fuel
    },
    {
      path: '/exempt',
      name: 'Exempt', // 免征查询列表
      component: Exempt
    },
    {
      path: '/energy',
      name: 'Energy', // 新能源查询列表
      component: Energy
    }
  ]
})
