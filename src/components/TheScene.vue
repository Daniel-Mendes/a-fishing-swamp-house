<script setup>
import { ref } from 'vue';

import TheCameraRig from './TheCameraRig.vue';
import TheLighthouseScene from '../scenes/TheLighthouseScene.vue';

const allAssetsLoaded = ref(false);
</script>

<template>
  <a-scene fog="type: linear; color: #3A3D1F; far: 18" background="color: black;" :webxr="`
      requiredFeatures: local-floor;
      referenceSpaceType: local-floor;
    `" xr-mode-ui="XRMode: xr" physx="
      autoLoad: true;
      delay: 1000;
      useDefaultScene: false;
      wasmUrl: lib/physx.release.wasm;
    ">

    <a-assets @loaded="allAssetsLoaded = true">
      <a-asset-item id="lighthouse-asset" src="assets/models/lighthouse.glb"></a-asset-item>
      <a-asset-item id="radio-asset" src="assets/models/radio.glb"></a-asset-item>
      <a-asset-item id="fishrod-asset" src="assets/models/fishrod.glb"></a-asset-item>
      <a-asset-item id="trout-fish" src="assets/models/trout_fish.glb"></a-asset-item>

      <!-- Audio files -->
      <audio id="a-sailors-chant-audio" src="assets/audios/a-sailors-chant.ogg"></audio>
      <audio id="swamp-1-audio" src="assets/audios/swamp-1.ogg"></audio>
      <audio id="swamp-2-audio" src="assets/audios/swamp-2.ogg"></audio>
    </a-assets>

    <template v-if="allAssetsLoaded">
      <TheLighthouseScene />
    </template>

    <TheCameraRig />

  </a-scene>
</template>