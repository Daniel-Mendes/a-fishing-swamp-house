AFRAME.registerComponent("barrel-manager", {
  init: function () {
    const fishesEl = document.querySelectorAll(".barrel-fishes");
    let fishes = 0;

    this.el.addEventListener("click", () => {
      console.log("barrel clicked");

      fishesEl[fishes].setAttribute("visible", true);
      fishes++;

      // for (let i = 0; i < fishesEl.length; i++) {
      //   fishesEl[i].setAttribute("position", {
      //     x: Math.random() * 6 - 3,
      //     y: Math.random() * 6 - 3,
      //     z: Math.random() * 6 - 3,
      //   });
      // }

      // Emit an event when the barrel added a fish
      const event = new CustomEvent("change", {
        detail: { fishes },
      });
      this.el.dispatchEvent(event);
    });
  },
});
