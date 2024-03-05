<script setup>
import { ref } from 'vue';
import TheOnboarding from './scenes/TheOnboarding.vue';
import TheScene from './scenes/TheScene.vue';

const scale = ref(1);
const loaded = ref(false);
</script>

<template>
  <TheOnboarding :loaded="loaded" />

  <TheScene @loaded="loaded = true" />
</template>