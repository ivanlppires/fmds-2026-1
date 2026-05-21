<template>
    <div>
        {{  text  }}        
    </div>
</template>
<script setup>
import { ref, defineProps } from 'vue'

// como eu recebo a prop text
const props = defineProps({
    text: String        
})



</script>
<style scoped>
div {
    background-color: yellow;
    padding: 20px;
    color:black;
}
</style>