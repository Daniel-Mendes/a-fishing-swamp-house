<script setup>
import '../aframe/physx-force-pushable.js';
import '../aframe/clickable.js';
import '../aframe/radio-manager.js';
</script>

<template>
    <a-sky color="#111126"></a-sky>

    <a-entity light="type: ambient; color: #f9ca24; intensity:0.1;"></a-entity>

    <a-entity id="lighthouse-entity" gltf-model="#lighthouse-asset" position="0 0 0" shadow="cast:true; receive:true;">
        <a-entity id="lighthouse-light-source" light="type: point; intensity: 2; distance: 50; color: #f9ca24; groundColor: #B49A70; castShadow: true; shadowCameraFar: 50;
           shadowCameraVisible: false;
          shadowBias: -0.001;
          shadowMapHeight:2048; shadowMapWidth:2048;
          shadowCameraLeft: -50; shadowCameraRight: 50;
          shadowCameraBottom: -50; shadowCameraTop: 50;" position="4 15 7.5" scale="1 1 1">
        </a-entity>
    </a-entity>

    <!-- Size of area to play-->
    <!-- <a-box width="2" height="0.1" depth="2" color="red" opacity="0.5" position="1 0 1"></a-box> -->

    <a-entity id="radio" gltf-model="#radio-asset" position="-0.380 0 3.345" rotation="0 135 0" scale="2 2 2">
        <a-box color="red" width="0.33" height="0.2" depth="0.2" position="-0.124 0.099 0.381" opacity="0.5" radio-manager
            clickable></a-box>
    </a-entity>

    <a-entity position="0 -1.463 0">
        <a-ocean depth="100" width="100" color="#313F35" amplitude="0.2" amplitude-variance="0.5" opacity="1"
            density="50"></a-ocean>
        <a-ocean depth="100" width="100" color="#313F35" amplitude="0.5" amplitude-variance="1" opacity="0.5"
            density="50"></a-ocean>
    </a-entity>

    <!-- THe Lighthouse navigation mesh -->
</template>