import Vue from 'vue'
import Router from 'vue-router'
import SearchPage from '@/components/search/SearchPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SearchPage',
      component: SearchPage
    }
  ]
})
