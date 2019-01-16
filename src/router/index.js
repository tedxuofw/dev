import Vue from 'vue'
import Router from 'vue-router'
import ComponentsPage from '@/pages/Components'
import CheckoutPage from '@/pages/Checkout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ComponentsPage',
      component: ComponentsPage
    },
    {
      path: '/checkout',
      name: 'CheckoutPage',
      component: CheckoutPage
    }
  ]
})
