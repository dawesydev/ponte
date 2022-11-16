<script setup>
import { ref } from 'vue';

const missionMsg = ref({msg: 'We enrich human lives through the thoughtful application of design & technology'})
</script>

<template>
  <div class="flex flex-col w-full text-center mt-8">
    <p class="font-body self-center w-2/3 text-2xl text-gray-50 md:text-4xl">
      {{ missionMsg.msg }}
    </p>
  </div>

</template>