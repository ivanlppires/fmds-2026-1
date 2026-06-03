<template>
  <v-app>
    <v-app-bar color="primary" flat>
      <v-app-bar-title>🔐 Pinia + Firebase</v-app-bar-title>

      <v-btn to="/" variant="text">Início</v-btn>
      <v-btn to="/sobre" variant="text">Sobre</v-btn>

      <v-spacer />

      <!-- Mostra "Entrar com Google" ou o avatar + menu do usuário -->
      <UserMenu />
    </v-app-bar>

    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import UserMenu from '@/components/UserMenu.vue'
</script>
