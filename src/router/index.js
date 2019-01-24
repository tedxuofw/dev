import Vue from 'vue'
import Router from 'vue-router'
import ComponentsPage from '@/pages/Components'
import LoginPage from '@/pages/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ComponentsPage',
      component: ComponentsPage
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage
    }
  ]
})
