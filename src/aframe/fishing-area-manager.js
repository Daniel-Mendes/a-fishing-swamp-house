AFRAME.registerComponent("fishing-area-manager", {
  schema: {
    event: { type: "string", default: "change" },
  },
  init: function () {
    const fishesEls = this.el.querySelectorAll(".ocean-fishes");

    this.el.addEventListener(this.data.event, ({ detail }) => {
      console.log("fishing-area change");

      const barrelFishesCount = detail.fishes;
    });
  },
});
