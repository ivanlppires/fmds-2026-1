/**
 * firebase.js
 *
 * Inicializa o Firebase UMA vez e exporta o que o resto do app precisa:
 *  - `auth`           → o serviço de autenticação
 *  - `googleProvider` → o provedor de login com a conta Google
 *
 * Os valores vêm do arquivo .env (veja .env.example). As chaves "Web" do
 * Firebase não são secretas, mas mantemos no .env como boa prática.
 */
import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
