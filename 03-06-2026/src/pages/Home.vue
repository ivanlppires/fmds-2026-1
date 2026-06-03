<template>
  <div class="text-center py-8">
    <h1 class="text-h3 mb-2">Pinia + Firebase 🔥</h1>
    <p class="text-medium-emphasis mb-6">
      Estado global com Pinia e login social com a conta Google.
    </p>

    <!-- Visitante -->
    <template v-if="!auth.estaLogado">
      <v-btn
        size="large"
        color="primary"
        prepend-icon="mdi-google"
        @click="auth.entrarComGoogle"
      >
        Entrar com Google
      </v-btn>
      <p v-if="auth.erro" class="text-error mt-3">{{ auth.erro }}</p>
    </template>

    <!-- Logado -->
    <template v-else>
      <p class="text-h6 mb-4">Olá, {{ auth.nome }}! 👋</p>
      <v-btn color="secondary" to="/perfil" prepend-icon="mdi-account">
        Ver meu perfil
      </v-btn>
    </template>
  </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth'

const auth = useAuthStore()
</script>
