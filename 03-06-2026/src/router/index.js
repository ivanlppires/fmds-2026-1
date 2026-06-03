/**
 * router/index.js
 *
 * Rotas do app + um "guarda" que protege a rota /perfil:
 * só entra quem estiver logado.
 */
import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const routes = [
  { path: '/', component: () => import('@/pages/Home.vue') },
  {
    path: '/perfil',
    component: () => import('@/pages/Perfil.vue'),
    meta: { requiresAuth: true }, // <-- marca a rota como "só para logados"
  },
  { path: '/sobre', component: () => import('@/pages/Sobre.vue') },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

// Guarda global: roda ANTES de cada troca de rota.
router.beforeEach(async (to) => {
  const auth = useAuthStore()

  // Espera o Firebase confirmar a sessão pela 1ª vez. Sem isto, ao dar F5
  // em /perfil o usuário logado seria expulso (porque o estado ainda não
  // tinha sido restaurado).
  await auth.pronto

  if (to.meta.requiresAuth && !auth.estaLogado) {
    return '/' // não está logado? volta para a Home.
  }
})

export default router
