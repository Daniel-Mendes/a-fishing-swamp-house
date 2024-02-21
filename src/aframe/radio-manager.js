AFRAME.registerComponent("radio-manager", {
  schema: {},

  init: function () {
    let isPlaying = false;
    let currentMusicIdx = 0;
    const availableMusics = [
      "#a-sailors-chant-audio",
      "#swamp-2-audio",
      "#swamp-1-audio",
    ];

    const aSoundEl = document.createElement("a-sound");
    this.el.appendChild(aSoundEl);

    this.el.addEventListener("click", () => {
      isPlaying = !isPlaying;

      console.log("radio box clicked");

      if (!isPlaying) {
        aSoundEl.components.sound.pauseSound();
        return;
      }

      console.log("music idx");
      aSoundEl.setAttribute("src", availableMusics[currentMusicIdx]);
      aSoundEl.components.sound.playSound();
    });

    aSoundEl.addEventListener("sound-ended", (event) => {
      console.log("sound ended", this, event);

      currentMusicIdx++;
      if (currentMusicIdx >= availableMusics.length) {
        currentMusicIdx = 0;
      }

      console.log("next audio", availableMusics[currentMusicIdx]);
      aSoundEl.setAttribute("src", availableMusics[currentMusicIdx]);
      // aSoundEl.playSound();
    });
  },
});
