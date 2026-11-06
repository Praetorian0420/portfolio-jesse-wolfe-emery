import { createRouter, createWebHistory } from 'vue-router'
import AboutPage from './views/AboutPage.vue'
import HomePage from './views/HomePage.vue'
import PortfolioPage from './views/PortfolioPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomePage },
    { path: '/about', name: 'about', component: AboutPage },
    { path: '/portfolio', name: 'portfolio', component: PortfolioPage },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
