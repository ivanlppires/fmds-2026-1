<script setup>
import { ref } from 'vue'
const teste = () => {
  window.alert('Olá, mundo!')
}

</script>
<template>
  <button @click="teste">clique em mim</button>
</template>