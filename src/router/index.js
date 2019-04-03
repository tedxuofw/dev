import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '@/pages/Login'
import CheckoutPage from '@/pages/Checkout'
import HomePage from '@/pages/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage
    },
    {
      
      path: '/checkout',
      name: 'CheckoutPage',
      component: CheckoutPage
    }, 
    {
      path: '/home',
      name: 'HomePage',
      component: HomePage
    },
  ]
})
