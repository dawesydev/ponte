<script setup>
import { ref } from 'vue';
import Button from "./Button.vue";

const heroItems = ref([{text: 'Build.'}, {text: 'Grow.'}, {text: 'Empower.'}]);
const heroMsg = ref({msg: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore molestias pariatur quia recusandae sapiente? At consequuntur, earum error in itaque neque nisi, optio perspiciatis recusandae.'});

</script>

<template>
    <div class="grid gap-16 h-screen">
      <div class="self-end md:flex">
        <h3 v-for="(heroItem, index) in heroItems"
            class="font-display text-gray-50 text-6xl md:text-8xl pr-4"
            :class="{ 'font-bold': index === 1 }"
        >
          {{ heroItem.text }}
        </h3>
      </div>
      <div class="self-start md:w-1/2">
        <p class="text-gray-50 text-xl pl-2 font-body"> {{ heroMsg.msg }} </p>
        <Button button-text="learn more" />
      </div>
    </div>
</template>

