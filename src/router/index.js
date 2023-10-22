import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/HomePage.vue'
import Cocktail from '../pages/CocktailPage.vue'
import CocktailRandom from '../pages/CocktailRandomPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/cocktail/:rid',
      name: 'cocktail',
      component: Cocktail
    },
    {
      path: '/random',
      name: 'cocktailRandom',
      component: CocktailRandom
    }
  ]
})

export default router
