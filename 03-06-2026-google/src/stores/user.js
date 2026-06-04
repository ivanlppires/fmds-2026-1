import { ref } from 'vue'
import { defineStore } from 'pinia'
// Importa o Firebase App (o núcleo do Firebase) e os serviços que você deseja usar

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";



// o objetivo é fazer login com popup do google

const auth = getAuth()
const provider = new GoogleAuthProvider()

// Store para armazenar usuários logados com o google
export const useUserStore = defineStore('user', () => {
    const user = ref(null)

    const loginWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, provider)
            console.log(result)
        } catch (error) {
            console.error(error)
        }
    }

    return { user, loginWithGoogle }

})