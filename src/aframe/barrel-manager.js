AFRAME.registerComponent("barrel-manager", {
  init: function () {
    let fishes = 0;

    this.el.addEventListener("dropped", (event) => {
      console.log("item dropped in barrel");
      console.log(event);

      const { hand, droppedEl } = event.detail;

      droppedEl.removeAttribute("bind-position");
      droppedEl.removeAttribute("bind-rotation");

      // position the fish randomly in the barrel y from bottom to 1 meter based on fishes count
      droppedEl.setAttribute("position", {
        x: this.el.position.x + Math.random() * 0.1,
        y: this.el.position.y + 0.5 + fishes * 0.1,
        z: this.el.position.z + Math.random() * 0.1,
      });

      fishes++;

      // Emit an event when the barrel added a fish
      // const changeEvent = new CustomEvent("change", {
      //   detail: { fishes },
      // });
      // this.el.dispatchEvent(event);
    });
  },
});
