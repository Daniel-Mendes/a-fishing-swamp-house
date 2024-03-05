<script>
import '../aframe/bind-position.js';
import '../aframe/bind-rotation.js';
import '../aframe/clickable.js';
import '../aframe/emit-when-near.js';
import '../aframe/event-set.js';
import '../aframe/event-rem.js';
import '../aframe/look-at.js';
import '../aframe/listen-to.js'

import '../aframe/radio-player.js';
import '../aframe/barrel-manager.js'
import '../aframe/bell-manager.js';
import '../aframe/fishing-hook-manager.js';
// import '../aframe/firefly-manager.js';
import '../aframe/fishing-manager.js'

import '../aframe/floating-animation.js';
import '../aframe/wandering.js'
</script>

<template>
    <a-sky color="#111126"></a-sky>
    <a-light type="ambient" color="#fae3a2" intensity="0.02"></a-light>
    <!-- Size of area to play-->
    <a-plane id="ground-area" width="3.3" height="3.3" color="red" opacity="0.8" position="0 0 0.9" rotation="-90 0 0"
        physx-body="type: static"></a-plane>

    <a-entity id="house" gltf-model="#house-model" animation-mixer position="0 0 0" shadow="cast:true; receive:true;"
        Xphysx-body="type: static">
        <a-entity id="lantern-light-source"
            light="type: point; intensity: 1; distance: 5; color: #fae3a2; groundColor: #B49A70; castShadow: true; shadowCameraFar: 25; shadowBias: -0.001; shadowMapHeight: 2048; shadowMapWidth: 2048; shadowCameraLeft: -50; shadowCameraRight: 50; shadowCameraBottom: -50; shadowCameraTop: 50"
            position="-0.91582 1.16042 -1.1516" scale="0.1 0.1 0.1"></a-entity>

        <a-entity v-for="index in 4" :key="index" :id="`firefly-${index}`" gltf-model="#firefly-model" look-at clickable
            simple-grab scale="0.3 0.3 0.3" wandering="position: -1.3 0.6 -1.6; radius: 1"
            event-set__test="event: click; attribute: click; value: scale: 1 1 1"
            event-rem__animation="event: click; attribute: animation"
            event-rem__look-at="event: click; attribute: look-at">
        </a-entity>

        <a-entity id="barrel" gltf-model="#barrel-model" physx-body="type: static">
            <a-tube id="barrel-hitbox" path="0 0 0, 0 0.8 0" radius="0.3" position="1.258 0 1.159" color="red"
                visible="true" material="side: double" clickable
                simple-grab-drop-zone="dropOnly: true; dropMultiple: true; allowed: .fishes" barrel-manager></a-tube>
        </a-entity>

        <a-entity id="radio" gltf-model="#radio-model" position="-0.077 0.297 1.493"
            Xlisten-to="target: #radio-hitbox; event: click; emit: click;" clickable radio-player>
            <a-box id="radio-hitbox" width="0.5" height="0.3" depth="0.3" color="red" visible="false" Xclickable
                Xemit-when-near__hand-left="target: #hand-left; distance: 0.1" position="0 0.20299 0"></a-box>

            <a-sound src="#radio-noise-sound" volume="1"></a-sound>
            <a-sound src="#swamp-1-sound" volume="0.4"></a-sound>
            <a-sound src="#radio-noise-sound" volume="1"></a-sound>
            <a-sound src="#swamp-2-sound" volume="0.4"></a-sound>
        </a-entity>
    </a-entity>

    <a-entity id="fishing-rod" gltf-model="#fishing-rod-model" bind-position="target: #hand-right"
        bind-rotation="target: #hand-right">
        <a-box id="fishing-rod-anchor" width="0.02" height="0.02" depth="0.02" position="-0.017 -0.013 -1.352"
            color="blue" opacity="0" transparent="true" alpha-test="1" visible="false"></a-box>
    </a-entity>

    <a-entity id="fishing-line" gltf-model="#fishing-line-model" bind-position="target: #fishing-rod-anchor">
        <a-box id="fishing-hook" width="0.1" height="0.1" depth="0.1" position="0 -1.32 0" opacity="0"
            transparent="true" alpha-test="1" clickable simple-grab-drop-zone="dropOnly: false; dynamic: true"
            data-aabb-collider-dynamic
            listen-to__fish_caught="target: #fishing-area-air-collider; event: fish-caught; emit: fish-caught"
            listen-to__fish_not_caught="target: #fishing-area-air-collider; event: fish-not-caught; emit: fish-not-caught"
            fishing-hook-manager>
        </a-box>
    </a-entity>

    <!-- Fishes-->
    <a-entity gltf-model="#trout-fish-model" class="fishes" id="fish-0" visible="false"
        animation="property: rotation; from: 0 75 0; to: 0 105 0; dur: 1000; dir: alternate; easing: easeInOutSine; loop: true;"
        Xbind-rotation="target: #fishing-hook" Xbind-position="target: #fishing-hook" clickable simple-grab
        physx-body="type: kinematic; emitCollisionEvents: true" physx-grabbable
        event-rem__bind-pos-on-grab="event: click; attribute: bind-position;"
        event-rem__bind-rot-on-grab="event: click; attribute: bind-rotation;"
        XXemit-when-near__hand-left="target: #hand-left; event: hand-click; distance: 0.1"
        event-set__hand-click_bind_pos="event: click; attribute: bind-position; value: target: #hand-left"
        event-set__hand-click_bind_rot="event: click; attribute: bind-rotation; value: target: #hand-left"
        XXemit-when-near__barrel="target: #barrel-hitbox; event: near-barrel; distance: 0.3"
        XXevent-set__physx-body-dynamic="event: barrel-click; attribute: physx-body; value: type: dynamic"
        XXevent-set__barrel-remove-bind-pos="event: barrel-click; attribute: bind-position; value: target: #barrel-hitbox"
        XXevent-set__barrel-remove-bind-rot="event: barrel-click; attribute: bind-rotation; value: target: #barrel-hitbox">
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

    <!-- The Lighthouse navigation mesh -->
    <!-- <a-entity geometry="primitive: plane; height: 1.3; width: 3.3" position="0.01535 0.01 -0.13631" rotation="-90 0 0"
        data-role="nav-mesh" material="color: red" visible="false"></a-entity>
    <a-entity geometry="primitive: plane; height: 3.3; width: 0.9" position="1.18871 0.01 0.898" rotation="-90 0 0"
        data-role="nav-mesh" material="color: yellow" visible="false"></a-entity>
    <a-entity geometry="primitive: plane; height: 1.8; width: 1.4" position="-0.17413 0.01 1.30265" rotation="-90 0 0"
        data-role="nav-mesh" material="color: blue" visible="false"></a-entity> -->
</template>