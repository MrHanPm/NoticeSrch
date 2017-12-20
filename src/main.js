import Vue from 'vue'
import App from './App'
import router from './router'
import mixins from './mixins'
import 'vue-ydui/dist/ydui.base.css'
import './assets/flex.css'
import { Loading } from './components/loading/index'
import { More } from './components/loading/more'

import { NavBar, NavBarBackIcon } from 'vue-ydui/dist/lib.rem/navbar'
import { Layout } from 'vue-ydui/dist/lib.rem/layout'
import { Icons } from 'vue-ydui/dist/lib.rem/icons'
import { TabBar, TabBarItem } from 'vue-ydui/dist/lib.rem/tabbar'
import { Toast, Notify } from 'vue-ydui/dist/lib.rem/dialog'
import { CellGroup, CellItem } from 'vue-ydui/dist/lib.rem/cell'
import { Input } from 'vue-ydui/dist/lib.rem/input'
import { Slider, SliderItem } from 'vue-ydui/dist/lib.rem/slider'
Vue.component(NavBar.name, NavBar)
Vue.component(NavBarBackIcon.name, NavBarBackIcon)
Vue.component(Layout.name, Layout)
Vue.component(Icons.name, Icons)
Vue.component(TabBar.name, TabBar)
Vue.component(TabBarItem.name, TabBarItem)
Vue.component(CellGroup.name, CellGroup)
Vue.component(CellItem.name, CellItem)
Vue.component(Input.name, Input)
Vue.component(Slider.name, Slider)
Vue.component(SliderItem.name, SliderItem)

Vue.component(Loading.name, Loading)
Vue.component(More.name, More)
Vue.prototype.$dialog = {
  toast: Toast,
  notify: Notify
}
Vue.config.productionTip = false
Vue.mixin(mixins)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
