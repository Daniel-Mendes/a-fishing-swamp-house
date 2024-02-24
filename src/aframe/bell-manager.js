AFRAME.registerComponent("bell-manager", {
  schema: {
    event: { type: "string", default: "change" },
  },
  init: function () {
    this.el.addEventListener("click", () => {
      this.el.emit("ring");
    });

    this.el.addEventListener(this.data.event, ({ detail }) => {
      const barrelFishesCount = detail.fishes;

      for (let i = 0; i < barrelFishesCount; i++) {
        setTimeout(() => {
          this.el.emit("ring");
        }, i * 1000);
      }
    });
  },
});
