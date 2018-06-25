import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Kalkulator from './views/Kalkulator.vue'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/kalkulator',
      name: 'kalkulator',
      component: Kalkulator,
      props: true,
      beforeEnter: (to, from, next) => {
        if (to.params.nama && to.params.tanggalBerangkat && to.params.tanggalPulang) {
          next()
        } else {
          next({
            name: 'home'
          })
        }
      }
    }
  ]
})