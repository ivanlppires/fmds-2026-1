<template>
    <h1>Quitanda do Ivan</h1>
    <hr>
    <input type="text" v-model="newItem">
    <button @click="addItem">Adicionar Item</button>
    <hr>
    <ul>
        <li v-for="(item, index) in items" :key="index">
            {{ item }}
            <button @click="removeItem(index)">Remover</button>
        </li>
    </ul>
</template>

<script setup>
import { ref } from 'vue';
const newItem = ref('');
const items = ref([]);
function addItem() {
    if (newItem.value.trim() !== '') {
        items.value.push(newItem.value);
        newItem.value = '';
    }
}
function removeItem(index) {
    items.value.splice(index, 1);
}
</script>