AFRAME.registerComponent("weapon-manager", {
  init: function () {
    this.el.addEventListener("fish-caught", (event) => {
      console.log("weapon caught fish");

      const fishEl = this.el.querySelector("a-entity");
      fishEl.setAttribute("visible", true);
    });

    this.el.addEventListener("fish-not-caught", (event) => {
      console.log("weapon did not catch fish");

      const fishEl = this.el.querySelector("a-entity");
      fishEl.setAttribute("visible", false);
    });
  },
});
