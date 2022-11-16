<script setup>
defineProps({
  buttonText: String
})
</script>

<template>
  <button class="font-display font-light text-xs rounded-full bg-gray-100 border-0 text-gray-900 uppercase px-6 py-4 mt-8 hover:opacity-60">
    {{ buttonText }}
  </button>
</template>