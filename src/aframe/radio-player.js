AFRAME.registerComponent("radio-player", {
  init: function () {
    let isPlaying = false;
    let currentSoundIdx = 0;
    const soundEls = this.el.querySelectorAll("a-sound");

    for (const soundEl of soundEls) {
      soundEl.addEventListener("sound-ended", () => {
        currentSoundIdx++;
        if (currentSoundIdx >= soundEls.length) {
          currentSoundIdx = 0;
        }

        const aSoundEl = soundEls[currentSoundIdx];
        aSoundEl.components.sound.playSound();
      });
    }

    this.el.addEventListener("click", () => {
      isPlaying = !isPlaying;
      const aSoundEl = soundEls[currentSoundIdx];

      if (!isPlaying) {
        aSoundEl.components.sound.pauseSound();
        return;
      }

      aSoundEl.components.sound.playSound();
    });
  },
});
