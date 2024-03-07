<script>
import '../aframe/bind-position.js';
import '../aframe/bind-rotation.js';
import '../aframe/clickable.js';
import '../aframe/emit-when-near.js';
import '../aframe/event-set.js';
import '../aframe/event-rem.js';
import '../aframe/look-at.js';
import '../aframe/listen-to.js';

import '../aframe/radio-player.js';
import '../aframe/barrel-manager.js';
import '../aframe/bell-manager.js';
import '../aframe/fishing-rod-manager.js';
import '../aframe/fishing-hook-manager.js';
import '../aframe/fishing-manager.js';

import '../aframe/wandering.js';
</script>

<template>
    <a-sky color="#111126"></a-sky>
    <a-light type="ambient" color="#fae3a2" intensity="0.02"></a-light>
    <!-- Size of area to play-->
    <a-plane id="ground-area" width="3.3" height="3.3" color="red" opacity="0.8" position="0 0 0.9" rotation="-90 0 0"
        physx-body="type: static" visible="false"></a-plane>

    <a-entity id="house" gltf-model="#house-model" animation-mixer position="0 0 0" shadow="cast:true; receive:true;">
        <a-entity id="lantern-light-source"
            light="type: point; intensity: 1; distance: 5; color: #fae3a2; groundColor: #997740; castShadow: true; shadowCameraFar: 25; shadowBias: -0.001; shadowMapHeight: 2048; shadowMapWidth: 2048; shadowCameraLeft: -50; shadowCameraRight: 50; shadowCameraBottom: -50; shadowCameraTop: 50"
            position="-0.91582 1.16042 -1.1516" scale="0.1 0.1 0.1"></a-entity>

        <a-entity v-for="index in 4" :key="index" :id="`firefly-${index}`" class="fireflies baits"
            gltf-model="#firefly-model" scale="0.3 0.3 0.3" wandering="position: -1.2 1 -1.5; radius: 1" look-at
            clickable simple-grab event-rem__animation="event:click; attribute: animation"
            event-rem__look-at="event: click; attribute: look-at">
        </a-entity>

        <a-entity id="barrel" gltf-model="#barrel-model" position="1.25 0 1" clickable
            simple-grab-drop-zone="dropOnly: true; dropMultiple: true; allowed: .fishes" barrel-manager>
        </a-entity>

        <a-entity id="radio" gltf-model="#radio-model" position="-0.08 0.3 1.5" clickable radio-player>
            <a-sound src="#radio-noise-sound" volume="1"></a-sound>
            <a-sound src="#swamp-1-sound" volume="0.4"></a-sound>
            <a-sound src="#radio-noise-sound" volume="1"></a-sound>
            <a-sound src="#swamp-2-sound" volume="0.4"></a-sound>
        </a-entity>
    </a-entity>

    <a-entity id="fishing-rod" gltf-model="#fishing-rod-model" fishing-rod-manager>
        <a-box id="fishing-rod-anchor" width="0.02" height="0.02" depth="0.02" position="-0.017 -0.013 -1.352"
            color="blue" opacity="0" transparent="true" alpha-test="1" visible="false"></a-box>
    </a-entity>

    <a-entity id="fishing-line" gltf-model="#fishing-line-model" bind-position="target: #fishing-rod-anchor">
        <a-box id="fishing-hook" width="0.1" height="0.1" depth="0.1" position="0 -1.32 0" opacity="0"
            transparent="true" alpha-test="1" clickable
            simple-grab-drop-zone="dropOnly: false; dynamic: true; allowed: .baits" data-aabb-collider-dynamic
            listen-to__fish_caught="target: #fishing-area-air-collider; event: fish-caught; emit: fish-caught"
            listen-to__fish_not_caught="target: #fishing-area-air-collider; event: fish-not-caught; emit: fish-not-caught"
            fishing-hook-manager>
        </a-box>
    </a-entity>

    <!-- Fishes-->
    <a-entity gltf-model="#angler-fish-model" scale="0.15 0.15 0.15" animation-mixer class="fishes" id="fish-0"
        visible="false" clickable simple-grab physx-body="type: kinematic; emitCollisionEvents: true" physx-grabbable
        event-rem__bind-pos="event: click; attribute: bind-position"></a-entity>

    <a-entity gltf-model="#blue-fish-model" scale="0.1 0.1 0.1" animation-mixer class="fishes" id="fish-1"
        visible="false" clickable simple-grab physx-body="type: kinematic; emitCollisionEvents: true" physx-grabbable
        event-rem__bind-pos="event: click; attribute: bind-position"></a-entity>

    <a-entity gltf-model="#crappies-fish-model" animation-mixer class="fishes" id="fish-2" visible="false" clickable
        simple-grab physx-body="type: kinematic; emitCollisionEvents: true" physx-grabbable
        event-rem__bind-pos="event: click; attribute: bind-position"></a-entity>

    <a-entity gltf-model="#trout-fish-model" animation-mixer class="fishes" id="fish-3" visible="false" clickable
        simple-grab physx-body="type: kinematic; emitCollisionEvents: true" physx-grabbable
        event-rem__bind-pos="event: click; attribute: bind-position">
    </a-entity>

    <!-- Fishing area -->
    <a-box id="fishing-area-air-collider" class="fishing-area-collider" width="10" depth="10" height="3"
        position="0 1.6 0" color="red" opacity="0.5" visible="false" aabb-collider="objects: #fishing-hook;"
        fishing-manager="colliders: .fishing-area-collider"
        listen-to__barrel_change="target: #barrel; event: change; emit: barrel-change">
    </a-box>

    <a-box id="fishing-area-house-collider" class="fishing-area-collider" width="3.3" depth="3.3" height="6"
        position="0 0 1" color="blue" opacity="0.5" visible="false" aabb-collider="objects: #fishing-hook;"></a-box>

    <!-- Sea -->
    <a-entity position="0 -1.2 0" id="sea">
        <a-ocean depth="100" width="100" color="#313F35" amplitude="0" amplitude-variance="0.1" opacity="0.8"
            density="50"></a-ocean>
        <a-ocean depth="100" width="100" color="#313F35" amplitude="0.2" amplitude-variance="0.15" opacity="0.8"
            density="50"></a-ocean>
    </a-entity>

    <!-- The ouse navigation mesh -->
    <a-entity geometry="primitive: plane; height: 1.3; width: 3.3" position="0 0.01 -0.05" rotation="-90 0 0"
        data-role="nav-mesh" material="color: red" visible="false"></a-entity>
    <a-entity geometry="primitive: plane; height: 1; width: 1.4" position="-0.2 0.01 1" rotation="-90 0 0"
        data-role="nav-mesh" material="color: blue" visible="false"></a-entity>
</template>