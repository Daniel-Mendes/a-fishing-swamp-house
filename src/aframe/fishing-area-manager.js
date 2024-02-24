AFRAME.registerComponent("fishing-area-manager", {
  init: function () {
    const fishesEls = this.el.querySelectorAll(".ocean-fishes");

    this.el.addEventListener("barrel-change", ({ detail }) => {
      console.log("fishing-area change");

      const barrelFishesCount = detail.fishes;
    });

    const fishes = this.el.querySelectorAll(".ocean-fishes");

    for (let fish of fishes) {
      fish.addEventListener("click", (event) => {
        console.log("fish-caught test event", event);
      });
    }

    this.el.addEventListener("fish-caught", (event) => {
      console.log("fish-caught event", event);
      console.log("fish-caught detail", detail);
    });
  },
});
