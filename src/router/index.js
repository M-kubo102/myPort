import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/top'
import About from '@/components/about'
import Contact from '@/components/contact'
import Works from '@/components/works'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Top',
      component: Top
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/works',
      name: 'Works',
      component: Works
    },
  ]
})
