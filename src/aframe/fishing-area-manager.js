import { randomTimeoutRange } from "../utils/random.js";

AFRAME.registerComponent("fishing-area-manager", {
  init: function () {
    let isFishing = false;
    let timeoutId = null;
    const handFishing = document.querySelector("#hand-right");

    this.el.addEventListener("hitstart", () => {
      console.log("is not fishing");

      isFishing = false;
      clearTimeout(timeoutId);
    });

    this.el.addEventListener("hitend", () => {
      console.log("is fishing");
      isFishing = true;

      timeoutId = setTimeout(() => {
        // Make vibrate controller
        console.log("vibrate controller");
        // TODO: vibrate less duration with each fish caught
        const durationVibrate = 200;
        handFishing.components.haptics.pulse(0.5, durationVibrate);
      }, randomTimeoutRange(1000, 10000));
    });

    this.el.addEventListener("barrel-change", ({ detail }) => {
      console.log("fishing-area change");

      const barrelFishesCount = detail.fishes;
    });
  },
});
