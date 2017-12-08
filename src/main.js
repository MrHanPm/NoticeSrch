import Vue from 'vue'
import App from './App'
import router from './router'
import YDUI from 'vue-ydui'
import 'vue-ydui/dist/ydui.rem.css'
import './assets/flex.css'
import { NavBar, NavBarBackIcon } from 'vue-ydui/dist/lib.rem/navbar'
import { Layout } from 'vue-ydui/dist/lib.rem/layout'
import { Icons } from 'vue-ydui/dist/lib.rem/icons'
import { TabBar, TabBarItem } from 'vue-ydui/dist/lib.rem/tabbar'
Vue.component(NavBar.name, NavBar)
Vue.component(NavBarBackIcon.name, NavBarBackIcon)
Vue.component(Layout.name, Layout)
Vue.component(Icons.name, Icons)
Vue.component(TabBar.name, TabBar)
Vue.component(TabBarItem.name, TabBarItem)

Vue.config.productionTip = false
Vue.use(YDUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
