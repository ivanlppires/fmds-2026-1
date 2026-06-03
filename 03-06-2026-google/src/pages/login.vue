<template>
    <div>
        <v-img class="mx-auto my-6" max-width="228"
            src="https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-v3-slim-text-light.svg"></v-img>

        <v-card class="mx-auto pa-12 pb-8" elevation="3" max-width="448" rounded="lg">
            <div class="text-body-large text-medium-emphasis">E-mail</div>

            <v-text-field density="compact" placeholder="Endereço de email" prepend-inner-icon="mdi-email-outline"
                variant="outlined"></v-text-field>

            <div class="text-body-large text-medium-emphasis d-flex align-center justify-space-between">
                Senha

                <a class="text-body-small text-decoration-none text-blue" href="#" rel="noopener noreferrer"
                    target="_blank">
                    Esqueceu sua senha?</a>
            </div>

            <v-text-field :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'" :type="visible ? 'text' : 'password'"
                density="compact" placeholder="Digite sua senha" prepend-inner-icon="mdi-lock-outline"
                variant="outlined" @click:append-inner="visible = !visible"></v-text-field>

            <v-btn class="mb-8" color="blue" size="large" variant="tonal" block>
                Log In
            </v-btn>

            <v-divider class="mb-8"></v-divider>
            <v-btn class="mb-8" color="blue" size="large" variant="outlined" block>
                <v-icon icon="mdi-google" class="me-2"></v-icon>
                Log in with Google
            </v-btn>
            <v-divider class="mb-8"></v-divider>

            <v-card-text class="text-center">
                <a class="text-blue text-decoration-none" href="#" rel="noopener noreferrer" target="_blank">
                    Sign up now <v-icon icon="mdi-chevron-right"></v-icon>
                </a>
            </v-card-text>
        </v-card>
    </div>
</template>
<script setup>
import { ref } from 'vue'

const visible = ref(false)
</script>