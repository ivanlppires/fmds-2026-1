<template>
  <!-- Enquanto o Firebase ainda não respondeu, mostra um spinner -->
  <v-progress-circular v-if="auth.carregando" indeterminate size="24" />

  <!-- Visitante (deslogado): botão de entrar -->
  <v-btn
    v-else-if="!auth.estaLogado"
    variant="outlined"
    prepend-icon="mdi-google"
    @click="auth.entrarComGoogle"
  >
    Entrar com Google
  </v-btn>

  <!-- Logado: avatar que abre um menu com perfil e "Sair" -->
  <v-menu v-else>
    <template #activator="{ props }">
      <v-btn v-bind="props" icon>
        <v-avatar size="36">
          <v-img :src="auth.foto" :alt="auth.nome" />
        </v-avatar>
      </v-btn>
    </template>

    <v-list>
      <v-list-item :title="auth.nome" :subtitle="auth.email" />
      <v-divider />
      <v-list-item to="/perfil" prepend-icon="mdi-account" title="Meu perfil" />
      <v-list-item prepend-icon="mdi-logout" title="Sair" @click="auth.sair" />
    </v-list>
  </v-menu>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth'

// Pega a store. Acessar auth.estaLogado / auth.nome no template é reativo:
// quando o login muda, a UI se atualiza sozinha.
const auth = useAuthStore()
</script>
