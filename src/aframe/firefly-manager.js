AFRAME.registerComponent("firefly-manager", {
  init: function () {
    this.el.addEventListener("hitstart", ({ detail }) => {
      let collisionEl = null;

      const collideEl = detail.intersectedEls[0].id;

      switch (id) {
        case "firefly":
          collisionEl = "#hand-left";
          break;
        case "fishing-hook":
          collisionEl = "#fishing-hook";
          break;
      }

      if (!collisionEl) {
        return;
      }

      this.el.setAttribute("bind-position", `target: ${collisionEl}`);
      this.el.setAttribute("bind-rotation", `target: ${collisionEl}`);

      this.el.setAttribute("animation.enabled", false);
    });
  },
});
