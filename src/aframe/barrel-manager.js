AFRAME.registerComponent("barrel-manager", {
  init: function () {
    let fishes = 0;

    this.el.addEventListener("dropped", ({ detail }) => {
      const { droppedEl } = detail;

      if (!droppedEl) return;

      console.log("item dropped in barrel");

      droppedEl.removeAttribute("bind-position");
      droppedEl.removeAttribute("bind-rotation");

      // position fishes one on top of others
      droppedEl.setAttribute("position", {
        x: this.el.object3D.position.x + Math.random() * 0.25,
        y: fishes * 0.2,
        z: this.el.object3D.position.z + Math.random() * 0.25,
      });

      fishes++;

      //Emit an event when the barrel added a fish
      const event = new CustomEvent("change", {
        detail: { fishes },
      });
      this.el.dispatchEvent(event);
    });
  },
});
