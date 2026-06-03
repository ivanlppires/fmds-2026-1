/**
 * stores/auth.js
 *
 * A "store" de autenticação — o coração da aula de hoje.
 * Usamos o estilo "setup store" do Pinia (parece um componente com <script setup>):
 *   - ref()      → STATE  (os dados)
 *   - computed() → GETTERS (valores derivados)
 *   - function   → ACTIONS (o que muda o estado)
 *
 * Tudo o que for retornado no final fica disponível para os componentes.
 */
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth'
import { auth, googleProvider } from '@/firebase'

export const useAuthStore = defineStore('auth', () => {
  // ----- STATE -------------------------------------------------------------
  const user = ref(null)       // objeto do usuário do Firebase, ou null se deslogado
  const carregando = ref(true) // true até o Firebase responder pela 1ª vez
  const erro = ref(null)       // mensagem de erro do último login (se houver)

  // ----- GETTERS (valores derivados, sempre reativos) ----------------------
  const estaLogado = computed(() => user.value !== null)
  const nome = computed(() => user.value?.displayName ?? 'Visitante')
  const email = computed(() => user.value?.email ?? '')
  const foto = computed(() => user.value?.photoURL ?? '')

  // Promise que "resolve" assim que o Firebase confirmar o estado de login
  // pela primeira vez. O guarda de rota espera por ela para não expulsar
  // um usuário logado ao recarregar a página (F5) em uma rota protegida.
  let resolverPronto
  const pronto = new Promise((resolve) => { resolverPronto = resolve })

  // Começa a OUVIR o estado de login no momento em que a store é criada.
  // O Firebase chama esta função sozinho: ao entrar, ao sair e ao recarregar
  // a página (restaurando a sessão automaticamente).
  onAuthStateChanged(auth, (usuarioAtual) => {
    user.value = usuarioAtual
    carregando.value = false
    resolverPronto()
  })

  // ----- ACTIONS -----------------------------------------------------------
  async function entrarComGoogle () {
    erro.value = null
    try {
      // Abre o popup do Google. Não precisamos setar `user` aqui:
      // o onAuthStateChanged acima é avisado e atualiza tudo sozinho.
      await signInWithPopup(auth, googleProvider)
    } catch (e) {
      erro.value = traduzirErro(e.code) || e.message
    }
  }

  async function sair () {
    await signOut(auth)
  }

  return {
    // state
    user, carregando, erro,
    // getters
    estaLogado, nome, email, foto, pronto,
    // actions
    entrarComGoogle, sair,
  }
})

// Deixa as mensagens de erro mais amigáveis em português.
function traduzirErro (codigo) {
  const mapa = {
    'auth/popup-closed-by-user': 'Você fechou a janela antes de concluir o login.',
    'auth/cancelled-popup-request': 'Outra janela de login já estava aberta.',
    'auth/popup-blocked': 'O navegador bloqueou o popup. Libere os pop-ups e tente de novo.',
    'auth/unauthorized-domain': 'Este domínio não está autorizado no Firebase Console.',
    'auth/network-request-failed': 'Falha de rede. Verifique sua conexão.',
  }
  return mapa[codigo]
}
