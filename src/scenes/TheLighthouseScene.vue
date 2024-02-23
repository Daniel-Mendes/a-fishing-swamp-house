<script>
import '../aframe/physx-force-pushable.js';
import '../aframe/clickable.js';
import '../aframe/radio-player.js';
import '../aframe/fireflies-wander.js'
</script>

<template>
    <a-sky color="#111126"></a-sky>
    <a-entity light="type: ambient; color: #f9ca24; intensity:0.1;"></a-entity>
    <a-entity id="rain" particle-system="preset: rain; color: #eee; particleCount: 1000"></a-entity>
    <!-- Size of area to play-->
    <!-- <a-box width="2" height="0.1" depth="2" color="blue" opacity="0.8" position="1 0 1"></a-box> -->

    <a-entity id="lighthouse-entity" gltf-model="#lighthouse-model" position="0 0 0" shadow="cast:true; receive:true;"
        physx-body="type: static">
        <a-entity id="lighthouse-light-source"
            light="type: point; intensity: 2; distance: 50; color: #f9ca24; groundColor: #B49A70; castShadow: true; shadowCameraFar: 25; shadowBias: -0.001; shadowMapHeight: 2048; shadowMapWidth: 2048; shadowCameraLeft: -50; shadowCameraRight: 50; shadowCameraBottom: -50; shadowCameraTop: 50"
            position="1.267 1.50067 1.02055" scale="0.1 0.1 0.1"></a-entity>

        <a-sound id="bell" src="#bell-sound" position="1.493 0.346 0.263" autoplay="false" loop="false"></a-sound>

        <a-entity id="fireflies" fireflies-wander="model: #firefly-model; count: 6; radius: 5" position="0.4 0.2 1"
            scale="0.1 0.1 0.1"></a-entity>

        <a-entity id="boat" gltf-model="#boat-model"
            animation="property: position; easing: easeInOutQuad; dir: alternate; dur: 1000; to: 0 -0.2 0; loop: true"></a-entity>

        <a-entity id="barrel" gltf-model="#barrel-model" position="1.036 0.05 0.372">
            <a-entity id="fish-1" gltf-model="#trout-fish-model" position="-0.00887 0.10792 0.02075" scale="0.3 0.3 0.3"
                rotation="50 0 30"></a-entity>
        </a-entity>

        <a-entity id="radio" gltf-model="#radio-model" position="0.1 0.04 0.1" rotation="0 45 0" scale="0.6 0.6 0.6"
            clickable radio-player></a-entity>
    </a-entity>

    <!-- <a-entity id="spear" gltf-model="#spear-model" position="0.3 0.1 0.545" rotation="20 90 0"
        scale="0.4 0.4 0.4"></a-entity> -->

    <!-- Water -->
    <a-entity position="0 -1.463 0">
        <a-ocean depth="100" width="100" color="#313F35" amplitude="0.2" amplitude-variance="0.5" opacity="1"
            density="50"></a-ocean>
        <a-ocean depth="100" width="100" color="#313F35" amplitude="0.5" amplitude-variance="1" opacity="0.5"
            density="50"></a-ocean>
    </a-entity>

    <!-- The Lighthouse navigation mesh -->
    <a-entity geometry="primitive: plane; height: 0.5; width: 1.850" position="0.926 0.01 0.253" rotation="-90 0 0"
        data-role="nav-mesh" material="color: red" visible="false"></a-entity>
    <a-entity geometry="primitive: plane; height: 1.8; width: 0.9" position="0.473 0.01 0.898" rotation="-90 0 0"
        data-role="nav-mesh" material="color: yellow" visible="false"></a-entity>
</template>