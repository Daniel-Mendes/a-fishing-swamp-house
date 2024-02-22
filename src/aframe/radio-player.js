AFRAME.registerComponent("radio-player", {
  init: function () {
    let isPlaying = false;
    let currentSongIdx = 0;
    const songs = [
      {
        src: "#radio-noise-sound",
        el: null,
      },
      {
        src: "#swamp-1-sound",
        el: null,
      },
      {
        src: "#radio-noise-sound",
        el: null,
      },
      {
        src: "#swamp-2-sound",
        el: null,
      },
    ];

    for (const song of songs) {
      const aSoundEl = document.createElement("a-sound");
      aSoundEl.setAttribute("src", song.src);

      song.el = aSoundEl;
      this.el.appendChild(aSoundEl);

      aSoundEl.addEventListener("sound-ended", (event) => {
        currentSongIdx++;
        if (currentSongIdx >= songs.length) {
          currentSongIdx = 0;
        }

        const aSoundEl = songs[currentSongIdx].el;
        aSoundEl.components.sound.playSound();
      });
    }

    this.el.addEventListener("click", () => {
      isPlaying = !isPlaying;
      const aSoundEl = songs[currentSongIdx].el;

      if (!isPlaying) {
        aSoundEl.components.sound.pauseSound();
        return;
      }

      aSoundEl.components.sound.playSound();
    });
  },
});
