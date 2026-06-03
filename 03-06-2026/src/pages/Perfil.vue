<template>
  <v-card max-width="480" class="mx-auto mt-6" elevation="3">
    <v-card-text class="text-center">
      <v-avatar size="96" class="mb-3">
        <v-img :src="foto" :alt="nome" />
      </v-avatar>

      <h2 class="text-h5 mb-1">{{ nome }}</h2>
      <div class="text-medium-emphasis mb-4">{{ email }}</div>

      <v-chip color="primary" variant="tonal" class="mb-4">
        UID: {{ user?.uid }}
      </v-chip>

      <div>
        <v-btn color="error" variant="flat" prepend-icon="mdi-logout" @click="auth.sair">
          Sair da conta
        </v-btn>
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useAuthStore } from '@/stores/auth'

const auth = useAuthStore()

// storeToRefs preserva a reatividade ao desestruturar state/getters.
// (Desestruturar direto — const { nome } = auth — QUEBRA a reatividade!)
const { user, nome, email, foto } = storeToRefs(auth)
</script>
