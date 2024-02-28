AFRAME.registerComponent("aabb-grabbable", {
  schema: { objects: { type: "string", default: "a-entity" } },

  init: function () {
    this.el.addEventListener("hitstart", this.onHitStart.bind(this));
    this.el.addEventListener("hitend", this.onHitEnd.bind(this));
  },

  onHitStart: function ({ detail }) {
    const intersectedEl = detail.intersectedEls[0];
    const { objects } = this.data;

    if (!intersectedEl.matches(objects)) {
      return;
    }

    this.el.setAttribute("bind-position", `target: ${intersectedEl.id}`);
    this.el.setAttribute("bind-rotation", `target: ${intersectedEl.id}`);
  },
});
