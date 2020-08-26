import Vue from 'vue'
import Router from 'vue-router'
import Warper from '@/components/Warper'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Warper',
      component: Warper
    }
  ]
})
