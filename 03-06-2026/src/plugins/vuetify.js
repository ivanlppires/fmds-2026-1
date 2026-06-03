/**
 * plugins/vuetify.js
 *
 * Configuração do Vuetify + tema customizado (cores do Vue).
 * Documentação: https://vuetifyjs.com
 */
import { createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

export default createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#41B883',   // verde Vue
          secondary: '#35495E', // azul-escuro Vue
        },
      },
    },
  },
})
