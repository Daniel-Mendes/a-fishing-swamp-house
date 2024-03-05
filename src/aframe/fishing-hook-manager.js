AFRAME.registerComponent("fishing-hook-manager", {
  init: function () {
    this.el.addEventListener("click", (event) => {
      console.log("weapon clicked", event);

      // if the event is not from a hand, return
      // this.grabbedBy = this.system.getHand(evt);
      // if (this.grabbedBy === null) return;

      // const currentGrab = this.system.getCurrentGrab(this.grabbedBy);

      // currentGrab.setAttribute("bind-position", `target: ${this.el.id}`);
      // currentGrab.setAttribute("bind-rotation", `target: ${this.el.id}`);
    });

    this.el.addEventListener("fish-caught", ({ detail }) => {
      console.log("weapon caught fish");

      const fishEl = detail.fishEl;
      fishEl.setAttribute("bind-position", `target: #${this.el.id}`);
      // fishEl.setAttribute("bind-rotation", `target: #${this.el.id}`);
      fishEl.setAttribute("visible", true);
    });

    this.el.addEventListener("fish-not-caught", ({ detail }) => {
      console.log("weapon did not catch fish");

      const fishEl = detail.fishEl;
      fishEl.setAttribute("visible", false);
    });
  },
});
