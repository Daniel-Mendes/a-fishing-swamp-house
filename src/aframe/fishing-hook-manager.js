AFRAME.registerComponent("fishing-hook-manager", {
  init: function () {
    this.baitEl = null;

    this.el.addEventListener("dropped", ({ detail }) => {
      this.baitEl = detail.droppedEl;
    });

    this.el.addEventListener("fish-caught", ({ detail }) => {
      console.log("weapon caught fish");

      const fishEl = detail.fishEl;
      fishEl.setAttribute("bind-position", `target: #${this.el.id}`);
      fishEl.setAttribute("visible", true);

      this.baitEl.remove();
    });

    this.el.addEventListener("fish-not-caught", ({ detail }) => {
      console.log("weapon did not catch fish");
    });
  },
});
