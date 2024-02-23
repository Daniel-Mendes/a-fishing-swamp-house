AFRAME.registerComponent("bell-manager", {
  init: function () {
    this.el.addEventListener("ring", () => {
      console.log("ring bell");

      this.el.components.sound.playSound();
    });
  },
});
