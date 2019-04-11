import Vue from 'vue'
import Router from 'vue-router'
import ComponentsPage from '@/pages/Components'
import LoginPage from '@/pages/Login'
import CheckoutPage from '@/pages/Checkout'
import ContactPage from '@/pages/Contact'
import AboutPage from '@/pages/About'
import HomePage from '@/pages/Home'
import SponsorPage from '@/pages/Sponsors'
import SpeakersPage from '@/pages/Speakers'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/components',
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
      path: '/contact',
      name: 'ContactPage',
      component: ContactPage
    },
    {
      path: '/about',
      name: 'AboutPage',
      component: AboutPage
    },
    {
      path: '/sponsors',
      name: 'SponsorPage',
      component: SponsorPage
    },
    {
      path: '/speakers',
      name: 'SpeakersPage',
      component: SpeakersPage
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
