<script setup>
import {ref} from "vue";

const navItems = ref([{text: 'work'}, {text: 'info'}, {text: 'news'}, {text: 'careers'}]);



</script>

<template>
  <nav class="flex justify-between">
    <h2 class="font-display font-bold text-gray-50 uppercase text-2xl tracking-wider">Ponte</h2>
    <ul class="flex w-1/2 justify-between items-center">
      <li v-for="navItem in navItems"
          class="font-display uppercase font-light text-gray-50 text-xs hover:opacity-60"
      >
        {{ navItem.text }}
      </li>
    </ul>
  </nav>
</template>