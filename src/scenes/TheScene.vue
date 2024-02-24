<script setup>
import { ref } from 'vue';

import TheCameraRig from '../components/TheCameraRig.vue';
import TheLighthouseScene from './TheLighthouseScene.vue';

const allAssetsLoaded = ref(false);
</script>

<template>
  <a-scene renderer="antialias: true;" fog="type: linear; color: #3A3D1F; far: 18" background="color: black;" :webxr="`
      requiredFeatures: local-floor;
      referenceSpaceType: local-floor;
    `" xr-mode-ui="XRMode: xr" physx="
      autoLoad: true;
      delay: 1000;
      useDefaultScene: false;
      wasmUrl: lib/physx.release.wasm;
    ">

    <a-assets @loaded="allAssetsLoaded = true">
      <!-- Models -->
      <a-asset-item id="lighthouse-model" src="assets/models/lighthouse.glb"></a-asset-item>
      <a-asset-item id="boat-model" src="assets/models/boat.glb"></a-asset-item>
      <a-asset-item id="bouet-model" src="assets/models/bouet.glb"></a-asset-item>
      <a-asset-item id="bell-model" src="assets/models/bell.glb"></a-asset-item>
      <a-asset-item id="radio-model" src="assets/models/radio.glb"></a-asset-item>
      <a-asset-item id="firefly-model" src="assets/models/firefly.glb"></a-asset-item>
      <a-asset-item id="barrel-model" src="assets/models/barrel.glb"></a-asset-item>
      <!-- <a-asset-item id="spear-model" src="assets/models/spear.glb"></a-asset-item> -->
      <a-asset-item id="trout-fish-model" src="assets/models/trout_fish.glb"></a-asset-item>
      <!-- Audios -->
      <audio id="radio-noise-sound" src="assets/sounds/radio-noise.wav"></audio>
      <audio id="bell-sound" src="assets/sounds/bell.mp3"></audio>
      <audio id="swamp-1-sound" src="assets/sounds/swamp-1.ogg"></audio>
      <audio id="swamp-2-sound" src="assets/sounds/swamp-2.ogg"></audio>
    </a-assets>

    <template v-if="allAssetsLoaded">
      <TheLighthouseScene />
    </template>

    <TheCameraRig />

  </a-scene>
</template>