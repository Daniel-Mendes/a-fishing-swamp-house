<script>
import '../aframe/physx-force-pushable.js';
import '../aframe/clickable.js';
import '../aframe/listen-to.js'
import '../aframe/event-set.js';
import '../aframe/bind-position.js';
import '../aframe/bind-rotation.js';

import '../aframe/radio-player.js';
import '../aframe/barrel-manager.js'
import '../aframe/bell-manager.js';
import '../aframe/weapon-manager.js';
import '../aframe/fishing-area-manager.js';

import '../aframe/floating-animation.js';
import '../aframe/fireflies-wander.js'
</script>

<template>
    <a-sky color="#111126"></a-sky>
    <!-- Size of area to play-->
    <!-- <a-box width="2" height="0.1" depth="2" color="red" opacity="0.8"></a-box> -->

    <a-entity id="house" gltf-model="#house-model" animation-mixer position="0 0 0" shadow="cast:true; receive:true;"
        physx-body="type: static">
        <a-light type="ambient" color="#fae3a2" intensity="0.5" castShadow="true" position="-1.292 0.919 -1.518"
            scale="0.1 0.1 0.1"></a-light>

        <a-entity id="fireflies" fireflies-wander="model: #firefly-model; count: 6; radius: 4" position="-1.3 0.3 -1.5"
            scale="0.3 0.3 0.3"></a-entity>

        <a-entity id="barrel" gltf-model="#barrel-model" position="1.036 0.05 0.372" clickable barrel-manager>
            <a-entity class="barrel-fishes" gltf-model="#trout-fish-model" position="-0.00887 0.10792 0.02075"
                scale="0.3 0.3 0.3" rotation="50 0 30" visible="false"></a-entity>
        </a-entity>

        <a-entity id="radio" gltf-model="#radio-model" position="1.2 0 1.8" clickable radio-player>
            <a-sound src="#radio-noise-sound" volume="1"></a-sound>
            <a-sound src="#swamp-1-sound" volume="0.4"></a-sound>
            <a-sound src="#radio-noise-sound" volume="1"></a-sound>
            <a-sound src="#swamp-2-sound" volume="0.4"></a-sound>
        </a-entity>
    </a-entity>

    <!-- <a-entity id="spear" gltf-model="#spear-model" position="0.3 0.1 0.545" rotation="20 90 0"
        scale="0.4 0.4 0.4"></a-entity> -->

    <a-entity id="fishing-rod" gltf-model="#fishing-rod-model" bind-position="target: #hand-right"
        bind-rotation="target: #hand-right">
    </a-entity>

    <a-entity id="fishing-line" gltf-model="#fishing-line-model" bind-position="target: #fishing-rod">
        <a-box id="fishing-hook" width="0.15" height="0.15" depth="0.15" position="-0.1 -1.3 -1.3" color="red" opactiy="0.5"
            listen-to="target: #fishing-area; event: fish-caught; emit: fish-caught" data-aabb-collider-dynamic
            weapon-manager>
            <a-entity gltf-model="#trout-fish-model"
                animation="property: rotation; from: 0 75 0; to: 0 105 0; dur: 1000; dir: alternate; easing: easeInOutSine; loop: true;"
                physx-grabbable>
            </a-entity>
        </a-box>
    </a-entity>

    <!-- Fishing area -->
    <a-box id="fishing-area" width="6" depth="6" height="5" color="blue" opacity="0.8" position="0 2.227 0.975"
        listen-to__barrel_change="target: #barrel; event: change; emit: barrel-change"
        aabb-collider="objects: #fishing-hook;" fishing-area-manager>
    </a-box>

    <!-- Sea -->
    <a-entity position="0 -1.2 0" id="sea">
        <a-ocean depth="100" width="100" color="#313F35" amplitude="0" amplitude-variance="0.1" opacity="0.5"
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