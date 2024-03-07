<script setup>
import { ref } from 'vue';

defineProps({
  loaded: Boolean,
});

const showOnboarding = ref(true);

function enterScene() {
  showOnboarding.value = false;
  if (AFRAME.utils.device.checkHeadsetConnected() && !AFRAME.utils.device.isMobile()) {
    document.querySelector('a-scene').enterVR();
  }
}
</script>

<template>
  <div id="onboarding" v-if="showOnboarding">
    <div>
      <h1>A Fishing Swamp House</h1>
      <img src="/assets/game-preview.png" alt="Game screenshot preview" />

      <p v-if="!loaded">loading...</p>
      <button v-if="loaded" @click="enterScene()">Enter scene</button>

      <div class="licences">
        <section>
          <h4>Tutorial</h4>
          <ol>
            <li>
              First, put a firefly bait on the fishing hook.
            </li>
            <li>
              When then fishing rod vibrates, catch the fish in less than 1 second.
            </li>
            <li>
              Finally, put your fish in the barrel, to start again.
            </li>
          </ol>
        </section>
        <dl>
          <dt>
            <div>Credits</div>
          </dt>

          <dt>
            <a href="https://github.com/c-frame/aframe-extras" target="_blank">aframe-extras</a>
          </dt>
          <dd>
            <a href="https://github.com/c-frame/aframe-extras/blob/master/LICENSE" target="_blank">MIT License</a>
          </dd>

          <dt>
            <a href="https://github.com/supermedium/superframe" target="_blank">superframe</a>
          </dt>
          <dd>
            <a href="https://github.com/supermedium/superframe/blob/master/LICENSE" target="_blank">MIT License</a>
          </dd>

          <dt>
            <a href="https://github.com/AdaRoseCannon/aframe-xr-boilerplate"
              target="_blank">simple-navmesh-constraint</a>
          </dt>
          <dd>
            By <a href="https://github.com/AdaRoseCannon" target="_blank">Ada Rose Cannon</a>
            under <a href="https://github.com/AdaRoseCannon/aframe-xr-boilerplate/blob/glitch/LICENSE" target="_blank">
              MIT License
            </a>
          </dd>

          <dt>
            <i>Models</i>
          </dt>

          <dt>
            <a href="https://sketchfab.com/3d-models/fishermans-hideout-a66a186183524df6869455f0fcbf35b4"
              target="_blank">
              Fisherman's Hideout
            </a>
          </dt>
          <dd>
            by <a href="https://sketchfab.com/HalfAsleepArtist" target="_blank">HalfAsleepArtist</a>
            under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/crappies-fish-non-comercial-7074dc4f77c6458fa339c747bc14036b"
              target="_blank">
              Crappies fish
            </a>
          </dt>
          <dd>
            by <a href="https://sketchfab.com/Nyilonelycompany" target="_blank">Nyilonelycompany</a>
            under <a href="https://creativecommons.org/licenses/by-nc/4.0/" target="_blank">CC BY-NC 4.0</a>
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/anglerfish-5e2f4b2d2e1a4613a008b6caaf40d50c" target="_blank">
              Angler fish
            </a>
          </dt>
          <dd>
            by <a href="https://sketchfab.com/Abby_Holzworth1" target="_blank">Abby_Holzworth1</a>
            under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/trout-fish-animated-4fa0cb7afc004d65bd49f406bffd5b2b"
              target="_blank">
              Trout fish
            </a>
          </dt>
          <dd>
            by <a href="https://sketchfab.com/sbastuff" target="_blank">Sba Stuff</a>
            under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
          </dd>

          <dt>
            <i>Songs</i>
          </dt>

          <dt>
            <a href="https://opengameart.org/content/swamp-01" target="_blank">
              Swamp 01
            </a>
          </dt>
          <dd>
            by <a href="https://opengameart.org/users/fantasy-musica" target="_blank">Fantasy Musica</a>
            under <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank">CC BY-SA 4.0</a>
          </dd>

          <dt>
            <a href="https://opengameart.org/content/swamp-02" target="_blank">
              Swamp 02
            </a>
          </dt>
          <dd>
            by <a href="hhttps://opengameart.org/users/fantasy-musica" target="_blank">Fantasy Musica</a>
            under <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank">CC BY-SA 4.0</a>
          </dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-size: 1.5rem
}

a {
  color: #eee;
  text-decoration: none;
}

img {
  width: 100%;
}

.licences {
  margin: 2rem 0;
  font-size: 1rem;
  text-align: left;
}

.licences dt {
  padding-top: 0.75rem;
  font-size: 0.9rem;
  font-weight: bold;
}

.licences dd {
  margin-left: 0;
  font-size: 0.8rem;
}

#onboarding {
  position: absolute;
  top: 0;
  left: 0;
  background-color: #313F35;
  color: #ccc;
  width: 100vw;
  height: 100vh;
  padding: 1rem;
  font-family: monospace;
  z-index: 10000;
  overflow: auto;
}

#onboarding>* {
  margin: 0 auto;
  max-width: 50rem;
  width: calc(100vw - 10rem);
  text-align: center;
  border-radius: 0.3rem;
  padding: 1rem;
  font-size: 1.3rem;
}

#onboarding button {
  font-size: 1.3rem;
  margin-top: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 0.3rem;
  background-color: #f9ca24;
  color: black;
  border: none;
  cursor: pointer;
}
</style>#onboarding li {
#onboarding li {
font-size: 1rem;
text-align: left;
}
