<template>
  <v-app id="inspire">
    <v-app-bar class="px-3" density="compact" flat v-if="userStore.isLoggedIn">
      <v-avatar round color="grey" size="32">
        <v-img src="https://lh3.googleusercontent.com/a/ACg8ocL6a0sTi9ajbltQGBcbQLIQTazRWKrkYSLZu-ITkCf5KA950Pi52Q=s96-c" cover></v-img>
      </v-avatar>

      <v-spacer></v-spacer>

      <v-btn to="/dashboard">Dashboard</v-btn>
      <v-btn to="/report">Relatórios</v-btn>
      <v-btn to="/config">Configurações</v-btn>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main class="bg-grey-darken-3">
      <v-container>


        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>
<script setup>
import { useUserStore } from '@/stores/user'
const userStore = useUserStore()
</script>