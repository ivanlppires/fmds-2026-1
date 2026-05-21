/**
 * router/index.ts
 *
 * Manual routes for ./src/pages/*.vue
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/pages/index.vue'),
    },
    {
      path: '/about',
      component: () => import('@/pages/about.vue'),
    },
    {
      path: '/products',
      component: () => import('@/pages/products.vue'),
    },
    {
      path: '/contact',
      component: () => import('@/pages/contact.vue'),
    }
  ],
})

export default router
