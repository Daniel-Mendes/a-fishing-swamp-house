<script setup>
import '../aframe/clickable.js';

import { ref } from 'vue';

const availableMusics = ['#a-sailors-chant-audio', "#swamp-1-audio", "#swamp-2-audio"];
const playing = ref(false);
const currentMusic = ref(null);

function toggleRadio() {

}
</script>


<template>
    <a-entity @click="" clickable id="radio" gltf-model="#radio-asset"></a-entity>
</template>