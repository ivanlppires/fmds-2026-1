<template>
  <h2>Aula 02 - VueJs</h2>
  <p>Seja bem vindo {{ nameRef }}</p>

  <!-- @ = v-on serve para lidar com eventos do DOM -->
  <button @click="save">Salvar</button>

  <!-- : = v-bind serve para trazer o valor da variável pra cá -->
  <font :color="cor">Texto colorido </font>

  <!-- v-model two-way data bind -->
   <input v-model="nameRef" >

</template>
<script setup>
  import { ref } from 'vue';

  // Variável javascript
  let name = 'Ivan Luiz';
  // name = prompt('Digite seu nome');
  const nameRef = ref('Ivan Pires');
  // console.log(name);
  // console.log(nameRef.value);

  const save = () =>  window.alert('Salvo com Sucesso!');

  const cor = 'blue';

  </script>