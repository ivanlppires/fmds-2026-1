<template>

  <v-list>
    <v-list-item prepend-avatar="https://lh3.googleusercontent.com/a/ACg8ocL6a0sTi9ajbltQGBcbQLIQTazRWKrkYSLZu-ITkCf5KA950Pi52Q=s288-c-no"
      subtitle="ivanpires@unemat.br"
      title="Ivan Pires">
      <template v-slot:append>
        <v-btn icon="mdi-menu-down" size="small" variant="text"></v-btn>
      </template>
    </v-list-item>
  </v-list>

  <v-divider></v-divider>

  
  <v-list :lines="false" density="compact" nav>
    <v-list-item v-for="(item, i) in items" :key="i" :value="item" color="primary" :to="item.to">
      <template v-slot:prepend>
        <v-icon :icon="item.icon"></v-icon>
      </template>

      <v-list-item-title v-text="item.text"></v-list-item-title>
    </v-list-item>
  </v-list>
</template>
<script setup>
const items = [
  { text: 'Página Inicial', icon: 'mdi-home-account', to: '/' },
  { text: 'Produtos', icon: 'mdi-rocket', to: '/products' },
  { text: 'Contato', icon: 'mdi-whatsapp', to: '/contact' },
  { text: 'Sobre', icon: 'mdi-information', to: '/about' },
]
</script>