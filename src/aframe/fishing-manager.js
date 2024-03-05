import { randomTimeoutRange } from "../utils/timer.js";

AFRAME.registerComponent("fishing-manager", {
  schema: {
    colliders: { type: "selectorAll" },
  },

  init: function () {
    this.timeoutId = null;
    this.startFishingAt = null;
    this.endFishingAt = null;

    this.barrelFishesCount = 0;
    this.handFishing = document.querySelector("#hand-right");

    this.el.addEventListener("barrel-change", ({ detail }) => {
      this.barrelFishesCount = detail.fishes;
    });

    this.onHitStart = this.onHitStart.bind(this);
    this.onHitEnd = this.onHitEnd.bind(this);
    for (let collider of this.data.colliders) {
      collider.dataset.collide = false;

      collider.addEventListener("hitstart", this.onHitStart);
      collider.addEventListener("hitend", this.onHitEnd);
    }
  },

  onHitStart: function (event) {
    console.log("is not fishing");

    event.target.dataset.collide = true;

    if (this.startFishingAt !== null) {
      this.endFishingAt = new Date();
      const fishingDuration = this.endFishingAt - this.startFishingAt;
      console.log("fishingDuration", fishingDuration);

      if (fishingDuration < 1000) {
        console.log("fish caught");

        const fishEl = document.querySelector(
          `#fish-${this.barrelFishesCount}`
        );

        const event = new CustomEvent("fish-caught", {
          detail: { fishEl: fishEl },
        });
        this.el.dispatchEvent(event);
      } else {
        console.log("fish not caught");
        this.el.emit("fish-not-caught");
      }

      this.startFishingAt = null;
      this.endFishingAt = null;
    }

    clearTimeout(this.timeoutId);
  },

  onHitEnd: function (event) {
    event.target.dataset.collide = false;

    let isColliding = false;
    for (let collider of this.data.colliders) {
      console.log(collider.id, collider.dataset.collide);

      if (collider.dataset.collide === "true") {
        isColliding = true;
        break;
      }
    }

    if (isColliding) return;

    console.log("is fishing");

    this.timeoutId = setTimeout(() => {
      console.log("vibrate controller");

      const force = 0.5;
      const duration = 1000;
      this.handFishing.components.haptics.pulse(force, duration);

      this.startFishingAt = new Date();
    }, randomTimeoutRange(5000, 10000));
  },
});
