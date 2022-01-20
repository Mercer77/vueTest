import Vue from 'vue'
import Router from 'vue-router'
import Warper from '@/components/Warper'
import testInterval from '@/components/testInterval'
import HelloWorld from '@/components/HelloWorld'
import exhibitionReport1 from '@/components/exhibitionReport1'
import exhibitionReport2 from '@/components/exhibitionReport2'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'testInterval',
      component: testInterval
    },
    {
      path: '/warp',
      name: 'Warper',
      component: Warper
    },
    {
      path: '/helloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/exhibitionReport1',
      name: 'exhibitionReport1',
      component: exhibitionReport1
    },
    {
      path: '/exhibitionReport2',
      name: 'exhibitionReport2',
      component: exhibitionReport2
    }
  ]
})
