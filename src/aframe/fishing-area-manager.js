import { randomTimeoutRange } from "../utils/random.js";

AFRAME.registerComponent("fishing-area-manager", {
  init: function () {
    let timeoutId = null;
    let startFishingAt = null;
    let endFishingAt = null;

    const handFishing = document.querySelector("#hand-right");

    this.el.addEventListener("hitstart", () => {
      console.log("is not fishing");

      if (startFishingAt !== null) {
        endFishingAt = new Date();
        const fishingDuration = endFishingAt - startFishingAt;
        console.log("fishingDuration", fishingDuration);

        if (fishingDuration < 1000) {
          console.log("fish caught");
          this.el.emit("fish-caught");
        } else {
          console.log("fish not caught");
          this.el.emit("fish-not-caught");
        }

        startFishingAt = null;
        endFishingAt = null;
      }

      clearTimeout(timeoutId);
    });

    this.el.addEventListener("hitend", () => {
      console.log("is fishing");

      timeoutId = setTimeout(() => {
        console.log("vibrate controller");

        const force = 0.5;
        const duration = 1000;
        handFishing.components.haptics.pulse(force, duration);

        startFishingAt = new Date();
      }, randomTimeoutRange(5000, 10000));
    });

    this.el.addEventListener("barrel-change", ({ detail }) => {
      console.log("fishing-area change");

      const barrelFishesCount = detail.fishes;
    });
  },
});
