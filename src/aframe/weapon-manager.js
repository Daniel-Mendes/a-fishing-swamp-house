AFRAME.registerComponent("weapon-manager", {
  init: function () {
    this.el.addEventListener("fish-caught", ({ detail }) => {
      console.log("weapon caught fish");

      const fishEl = detail.fishEl;
      fishEl.setAttribute("visible", true);
    });

    this.el.addEventListener("fish-not-caught", ({ detail }) => {
      console.log("weapon did not catch fish");

      const fishEl = detail.fishEl;
      fishEl.setAttribute("visible", false);
    });
  },
});
