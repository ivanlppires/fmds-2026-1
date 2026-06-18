<template>
    <v-container>
        <h1 class="text-h3 text-center">Dashboard de Clientes</h1>
        <v-row>
            <v-col v-for="client in clients" :key="client.id" cols="12" md="6" lg="6">
                <v-card>
                    <v-card-title>{{ client.nome }}</v-card-title>
                    <v-card-text>
                        <p><strong>Email:</strong> {{ client.email }}</p>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn color="error" @click="excluirCliente(client.id)">Excluir</v-btn>
                    </v-card-actions>   
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { useUserStore } from '@/stores/user';
const userStore = useUserStore();

const clients = ref([]);

const excluirCliente = async (id) => {
    try {
        await fetch(`http://localhost:3000/client/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${userStore.user.accessToken}`
            }
        });
        clients.value = clients.value.filter(client => client.id !== id);
    } catch (error) {
        console.error('Erro ao excluir cliente:', error);
    }
};


onMounted(async () => {
    try {
        console.log('Access Token:', userStore.user.accessToken); // Log the access token for debugging
        const result = await fetch('http://localhost:3000/client', {
            headers: {
                'Authorization': `Bearer ${userStore.user.accessToken}`
            }
        });
        clients.value = await result.json();
    } catch (error) {
        console.error('Erro ao buscar clientes:', error);
    }
});

</script>