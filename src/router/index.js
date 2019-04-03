import Vue from 'vue'
import Router from 'vue-router'
import ComponentsPage from '@/pages/Components'
import LoginPage from '@/pages/Login'
import CheckoutPage from '@/pages/Checkout'
import HomePage from '@/pages/Home'
import ConfirmationPage from '@/components/Confirmation'
import TestPage from '@/pages/Test'

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
    /* For testing purposes! */
    {
      path: '/confirmation',
      name: 'Confirmation',
      component: ConfirmationPage
    },
    {
      path: '/test',
      name: 'TestPage',
      component: TestPage
    }
  ]
})
