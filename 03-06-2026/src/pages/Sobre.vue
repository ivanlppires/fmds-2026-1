<template>
  <v-card max-width="640" class="mx-auto mt-6" elevation="2">
    <v-card-title>Sobre este projeto</v-card-title>
    <v-card-text>
      <p class="mb-3">
        Exemplo da aula de <strong>03/06/2026</strong> da disciplina
        <strong>Frameworks Modernos para Desenvolvimento de Sistemas</strong>
        (FACET-SNP-310 — UNEMAT, Sistemas de Informação, 2026/1).
      </p>
      <p class="mb-3">Demonstra, de ponta a ponta:</p>
      <v-list density="compact">
        <v-list-item prepend-icon="mdi-database" title="Pinia — estado global (store de autenticação)" />
        <v-list-item prepend-icon="mdi-google" title="Firebase Authentication — login com Google" />
        <v-list-item prepend-icon="mdi-shield-lock" title="Vue Router — rota protegida (/perfil)" />
        <v-list-item prepend-icon="mdi-palette" title="Vuetify — UI com Material Design" />
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script setup>
</script>
