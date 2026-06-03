/**
 * plugins/index.js
 *
 * Registra TODOS os plugins do app em um só lugar.
 * IMPORTANTE: o Pinia precisa ser registrado ANTES do router,
 * porque o "guarda de rota" (router) usa a store de autenticação.
 */
import { createPinia } from 'pinia'
import vuetify from './vuetify'
import router from '@/router'

export function registerPlugins (app) {
  app.use(createPinia()) // 1º: estado global (Pinia)
  app.use(vuetify)       // 2º: biblioteca de UI (Vuetify)
  app.use(router)        // 3º: rotas (Vue Router)
}
