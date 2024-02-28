<script>
import '../aframe/listen-to.js'
import '../aframe/event-set.js';
import '../aframe/bind-position.js';
import '../aframe/bind-rotation.js';
import '../aframe/look-at.js';
import '../aframe/emit-when-near.js';

import '../aframe/radio-player.js';
import '../aframe/barrel-manager.js'
import '../aframe/bell-manager.js';
import '../aframe/weapon-manager.js';
import '../aframe/fishing-area-manager.js';
// import '../aframe/firefly-manager.js';

import '../aframe/floating-animation.js';
import '../aframe/wandering.js'
</script>

<template>
    <a-sky color="#111126"></a-sky>
    <a-light type="ambient" color="#fae3a2" intensity="0.02"></a-light>
    <!-- Size of area to play-->
    <!-- <a-box width="2" height="0.1" depth="2" color="red" opacity="0.8"></a-box> -->

    <a-entity id="house" gltf-model="#house-model" animation-mixer position="0 0 0" shadow="cast:true; receive:true;"
        physx-body="type: static">
        <a-light type="point" color="#fae3a2" intensity="0.6" castShadow="true" position="-1.292 0.919 -1.518"
            scale="0.1 0.1 0.1"></a-light>

        <a-entity v-for="index in  4 " :key="index" :id="`firefly-${index}`" gltf-model="#firefly-model" scale="0.3 0.3 0.3"
            look-at wandering="position: -1.3 0.6 -1.6; radius: 1"
            emit-when-near__hand-left="target: #hand-left; event: hand-click; distance: 0.1"
            event-set__hand-click-bind-pos="event: hand-click; attribute: bind-position; value: target: #hand-left"
            event-set__hand-click-bind-rot="event: hand-click; attribute: bind-rotation; value: target: #hand-left"
            emit-when-near__fishing-hook="target: #fishing-hook; event: hook-click; distance: 0.1"
            event-set__hook-click-bind-rot="event: hook-click; attribute: bind-rotation; value: target: #fishing-hook"
            event-set__hook-click-bind-pos="event: hook-click; attribute: bind-position; value: target: #fishing-hook">
        </a-entity>

        <a-entity id="barrel" gltf-model="#barrel-model" physx-body="type: static" Xlisten-to="target: .fishes; event: "
            Xbarrel-manager>
            <a-cylinder id="barrel-hitbox" radius="0.3" height="0.2" position="1.258 0.6282 1.159" color="red"
                visible="false"></a-cylinder>
        </a-entity>

        <a-entity id="radio" gltf-model="#radio-model" position="-0.077 0.297 1.493"
            listen-to="target: #radio-hitbox; event: click; emit: click;" radio-player>
            <a-box id="radio-hitbox" width="0.5" height="0.3" depth="0.3" color="red" visible="false"
                emit-when-near__hand-left="target: #hand-left; distance: 0.1" position="0 0.20299 0"></a-box>

            <a-sound src="#radio-noise-sound" volume="1"></a-sound>
            <a-sound src="#swamp-1-sound" volume="0.4"></a-sound>
            <a-sound src="#radio-noise-sound" volume="1"></a-sound>
            <a-sound src="#swamp-2-sound" volume="0.4"></a-sound>
        </a-entity>
    </a-entity>

    <a-entity id="fishing-rod" gltf-model="#fishing-rod-model" bind-position="target: #hand-right"
        bind-rotation="target: #hand-right">
        <a-box id="fishing-rod-anchor" width="0.02" height="0.02" depth="0.02" position="-0.017 -0.013 -1.352" color="blue"
            opacity="0" transparent="true" alpha-test="1" visible="false"></a-box>
    </a-entity>

    <a-entity id="fishing-line" gltf-model="#fishing-line-model" bind-position="target: #fishing-rod-anchor">
        <a-box id="fishing-hook" width="0.1" height="0.1" depth="0.1" position="0 -1.32 0" opacity="0" transparent="true"
            alpha-test="1" listen-to__fish_caught="target: #fishing-area; event: fish-caught; emit: fish-caught"
            listen-to__fish_not_caught="target: #fishing-area; event: fish-not-caught; emit: fish-not-caught"
            data-aabb-collider-dynamic weapon-manager>
        </a-box>
    </a-entity>

    <a-entity gltf-model="#trout-fish-model" id="fish-0" visible="false"
        animation="property: rotation; from: 0 75 0; to: 0 105 0; dur: 1000; dir: alternate; easing: easeInOutSine; loop: true;"
        bind-rotation="target: #fishing-hook" bind-position="target: #fishing-hook"
        emit-when-near__hand-left="target: #hand-left; event: hand-click; distance: 0.1"
        event-set__hand-click_bind_pos="event: hand-click; attribute: bind-position; value: target: #hand-left"
        event-set__hand-click_bind_rot="event: hand-click; attribute: bind-rotation; value: target: #hand-left"
        emit-when-near__barrel="target: #barrel-hitbox; event: barrel-click; distance: 0.3"
        event-set__barrel="event: barrel-click; attribute: physx-body; value: type: dynamic"
        event-set__barrel-remove-bind-pos="event: barrel-click; attribute: bind-position; value: target: #barrel-hitbox"
        event-set__barrel-remove-bind-rot="event: barrel-click; attribute: bind-rotation; value: target: #barrel-hitbox">

    </a-entity>

    <!-- Fishing area -->
    <a-box id="fishing-area" width="3.5" depth="3.5" height="6" color="blue" opacity="0.5" visible="false" position="0 0 1"
        listen-to__barrel_change="target: #barrel; event: change; emit: barrel-change"
        aabb-collider="objects: #fishing-hook;" fishing-area-manager>
        <a-box width="10" height="3" depth="10" position="0 1.6 0" color="red" opacity="0.5"
            aabb-collider="objects: #fishing-hook;" visible="false"></a-box>
    </a-box>

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