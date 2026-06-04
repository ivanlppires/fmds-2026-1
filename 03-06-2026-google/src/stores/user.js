import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import router from '@/router'

// o objetivo é fazer login com popup do google

// Store para armazenar usuários logados com o google
export const useUserStore = defineStore('user', () => {
    // getAuth()/GoogleAuthProvider ficam DENTRO da factory: só executam quando a
    // store é instanciada (no beforeEach), e nesse momento o initializeApp() já rodou.
    // Se ficassem no topo do módulo, rodariam no import — antes do firebase.js — e
    // estouraria "No Firebase App '[DEFAULT]' has been created".
    const auth = getAuth()
    const provider = new GoogleAuthProvider()
    const user = ref(null)

    // Computed para verificar se o usuário está logado
    const isLoggedIn = computed( () => user.value !== null );

    const loginWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, provider)
            user.value = {
                name: result.user.displayName,
                email: result.user.email,
                photoURL: result.user.photoURL,
                accessToken: result.user.accessToken
            };
            // redirecionar com router push para a página de dashboard
            router.push('/')

        } catch (error) {
            console.error(error)
        }
    }

    return { user, loginWithGoogle, isLoggedIn }

})