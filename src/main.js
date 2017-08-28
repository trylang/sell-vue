// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from './router'
import VueRouter from 'vue-router'

import goods from './components/goods/goods.vue'
import ratings from './components/ratings/ratings.vue'
import seller from './components/seller/seller.vue'

import './common/stylus/index.styl'

// let app = Vue.extend(App)

const routes = [{
  path: '/goods',
  component: goods
}, {
  path: '/ratings',
  component: ratings
}, {
  path: '/seller',
  component: seller
}]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  linkActiveClass: 'active',
  routes // （缩写）相当于 routes: routes，//linkActiveClass：全局设置样式
})

Vue.use(VueRouter)

// Vue.config.productionTip = false

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

// router.start(app, '#app')
