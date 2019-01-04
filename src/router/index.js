import Vue from 'vue'
import Router from 'vue-router'
import ComponentsPage from '@/pages/Components'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ComponentsPage',
      component: ComponentsPage
    }
  ]
})
