/**
 * main.js
 *
 * Ponto de entrada: cria o app Vue, registra os plugins e monta na tela.
 */
import { createApp } from 'vue'
import { registerPlugins } from '@/plugins'
import App from './App.vue'

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
