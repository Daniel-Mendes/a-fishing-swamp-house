AFRAME.registerComponent("weapon-manager", {
  init: function () {
    this.el.addEventListener("fish-caught", (event) => {
      console.log("weapon caught fish");

      const fishCaughtEl = event.detail.fishEl;
      fishCaughtEl.setAttribute("bind-position", `target: #${this.el.id}`);
    });
  },
});
