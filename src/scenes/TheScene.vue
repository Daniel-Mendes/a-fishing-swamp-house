<script setup>
import { ref } from 'vue';

import TheCameraRig from '../components/TheCameraRig.vue';
import TheFishingScene from './TheFishingScene.vue';

import '../aframe/simple-grab.js';

const allAssetsLoaded = ref(false);
</script>

<template>
  <a-scene renderer="antialias: true;" fog="type: linear; color: #3A3D1F; near: 3; far: 10" background="color: black;"
    :webxr="`
      requiredFeatures: local-floor;
      referenceSpaceType: local-floor;
    `" xr-mode-ui="XRMode: xr" Xphysx="
      autoLoad: true;
      delay: 1000;
      useDefaultScene: false;
      wasmUrl: lib/physx.release.wasm;
    " simple-grab>

    <a-assets @loaded="allAssetsLoaded = true">
      <!-- Models -->
      <a-asset-item id="house-model" src="assets/models/house.glb"></a-asset-item>
      <a-asset-item id="firefly-model" src="assets/models/firefly.glb"></a-asset-item>
      <a-asset-item id="fishing-rod-model" src="assets/models/fishing_rod.glb"></a-asset-item>
      <a-asset-item id="fishing-line-model" src="assets/models/fishing_line.glb"></a-asset-item>
      <!-- Fishes -->
      <a-asset-item id="blue-fish-model" src="assets/models/fishes/blue_fish.glb"></a-asset-item>
      <a-asset-item id="crappies-fish-model" src="assets/models/fishes/crappies_fish.glb"></a-asset-item>
      <a-asset-item id="orange-fish-model" src="assets/models/fishes/orange_fish.glb"></a-asset-item>
      <a-asset-item id="trout-fish-model" src="assets/models/fishes/trout_fish.glb"></a-asset-item>
      <!-- Audios -->
      <a-asset-item id="radio-noise-sound" src="assets/sounds/radio-noise.wav"
        response-type="arraybuffer"></a-asset-item>
      <a-asset-item id="swamp-1-sound" src="assets/sounds/swamp-1.ogg" response-type="arraybuffer"></a-asset-item>
      <a-asset-item id="swamp-2-sound" src="assets/sounds/swamp-2.ogg" response-type="arraybuffer"></a-asset-item>
    </a-assets>

    <template v-if="allAssetsLoaded">
      <TheFishingScene />
    </template>

    <TheCameraRig />

  </a-scene>
</template>