<script>
import '../aframe/physx-force-pushable.js';
import '../aframe/clickable.js';
import '../aframe/listen-to.js'

import '../aframe/radio-player.js';
import '../aframe/barrel-manager.js'
import '../aframe/bell-manager.js';
import '../aframe/fishing-area-manager.js';

import '../aframe/floating-animation.js';
import '../aframe/fireflies-wander.js'
</script>

<template>
    <a-sky color="#111126"></a-sky>
    <a-entity id="ambient-light" light="type: ambient; color: #f9ca24; intensity:0.1;"></a-entity>
    <a-entity id="rain" particle-system="preset: rain; color: #eee; particleCount: 1000"></a-entity>
    <!-- Size of area to play-->
    <!-- <a-box width="2" height="0.1" depth="2" color="blue" opacity="0.8" position="1 0 1"></a-box> -->

    <a-entity id="lighthouse-entity" gltf-model="#lighthouse-model" position="0 0 0" shadow="cast:true; receive:true;"
        physx-body="type: static">
        <a-entity id="lighthouse-light-source"
            light="type: point; intensity: 2; distance: 50; color: #f9ca24; groundColor: #B49A70; castShadow: true; shadowCameraFar: 25; shadowBias: -0.001; shadowMapHeight: 2048; shadowMapWidth: 2048; shadowCameraLeft: -50; shadowCameraRight: 50; shadowCameraBottom: -50; shadowCameraTop: 50"
            position="1.267 1.50067 1.02055" scale="0.1 0.1 0.1"></a-entity>

        <a-entity id="bell" gltf-model="#bell-model" clickable listen-to="target: #barrel; event: change; emit: change"
            sound="on: ring; src: #bell-sound; volume: 2; autoplay: false; loop: false; poolSize: 5;"
            animation="startEvents: ring; property: rotation; to: 0 0 45; dur: 1000;" bell-manager>
        </a-entity>

        <a-entity id="fireflies" fireflies-wander="model: #firefly-model; count: 6; radius: 5" position="0.4 0.2 1"
            scale="0.1 0.1 0.1"></a-entity>

        <a-entity id="boat" gltf-model="#boat-model" floating-animation></a-entity>

        <a-entity id="bouet" gltf-model="#bouet-model" floating-animation></a-entity>

        <a-entity id="barrel" gltf-model="#barrel-model" position="1.036 0.05 0.372" clickable barrel-manager>
            <a-entity class="barrel-fishes" gltf-model="#trout-fish-model" position="-0.00887 0.10792 0.02075"
                scale="0.3 0.3 0.3" rotation="50 0 30" visible="false"></a-entity>
        </a-entity>

        <a-entity id="radio" gltf-model="#radio-model" position="0.1 0.04 0.1" rotation="0 45 0" scale="0.6 0.6 0.6"
            clickable physx-body="type: static" physx-grabbable radio-player>
            <a-sound src="#radio-noise-sound" volume="1"></a-sound>
            <a-sound src="#swamp-1-sound" volume="0.4"></a-sound>
            <a-sound src="#radio-noise-sound" volume="1"></a-sound>
            <a-sound src="#swamp-2-sound" volume="0.4"></a-sound>
        </a-entity>
    </a-entity>



    <!-- <a-entity id="spear" gltf-model="#spear-model" position="0.3 0.1 0.545" rotation="20 90 0"
        scale="0.4 0.4 0.4"></a-entity> -->

    <!-- Fishing area -->
    <a-box id="fishing-area" width="0.9" height="0.5" depth="2" color="blue" opacity="0.8" position="-0.5 -0.5 0.9"
        listen-to="target: #barrel; event: change; emit: change" fishing-area-manager>
        <a-entity class="ocean-fishes" gltf-model="#trout-fish-model" rotation="0 90 0"></a-entity>
    </a-box>

    <!-- Water -->
    <a-entity position="0 -0.5 0" id="oceans">
        <a-ocean depth="100" width="100" color="#313F35" amplitude="0" amplitude-variance="0.1" opacity="1"
            density="50"></a-ocean>
        <a-ocean depth="100" width="100" color="#313F35" amplitude="0.2" amplitude-variance="0.15" opacity="0.5"
            density="50"></a-ocean>
    </a-entity>

    <!-- The Lighthouse navigation mesh -->
    <!-- <a-entity geometry="primitive: plane; height: 0.5; width: 1.850" position="0.926 0.01 0.253" rotation="-90 0 0"
        data-role="nav-mesh" material="color: red" visible="false"></a-entity>
    <a-entity geometry="primitive: plane; height: 1.8; width: 0.9" position="0.473 0.01 0.898" rotation="-90 0 0"
        data-role="nav-mesh" material="color: yellow" visible="false"></a-entity> -->
</template>