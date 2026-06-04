/**
 * router/index.ts
 *
 * Automatic routes for ./src/pages/*.vue
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router'
// @ts-expect-error Arquivo JavaScript sem declaração de tipos
import { useUserStore } from '@/stores/user'
import { routes } from 'vue-router/auto-routes'

/*
  verificar se o usuário está logado antes de acessar /dashboard ou qualquer outra rota.
  se o usuário não estiver logado, redirecionar para a página de login.
*/

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  const userStore = useUserStore()

  // se eu tiver logado, deixo acessar a rota normalmente, caso contrário, redireciono para a página de login 
  if (to.path !== '/login' && !userStore.isLoggedIn) {
    next('/login')
  } else {
    next()
  }
})

export default router
