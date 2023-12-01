
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Shop from '../components/Shop.vue'
import Blog from '../components/Blog.vue'
import About from '../components/About.vue'
import Contact from '../components/Contact.vue'
import Addcard from '../components/Addcard.vue'
import Sproduct from '../components/Sproduct.vue';




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog
    }, {
      path: '/about',
      name: 'about',
      component: About
    },
     {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/Addcard',
      name: 'Addcard',
      component:Addcard
    },
    // در تعریف روت‌ها

  // روت‌های دیگر
  { path: '/Sproduct', name: 'Sproduct', component: Sproduct },


  ]

})



export default router
