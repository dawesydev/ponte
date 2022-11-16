<script setup>
import { ref } from 'vue';

const links = ref([{text: 'home'}, {text: 'work'}, {text: 'info'},
                         {text: 'news'}, {text: 'careers'}, {text: 'contact'}, {text: 'privacy'}])
</script>
<template>
  <div>
    <ul v-for="link in links"
        class="text-gray-50 uppercase text-sm"
    >
      <li> {{ link.text }} </li>
    </ul>
  </div>
</template>