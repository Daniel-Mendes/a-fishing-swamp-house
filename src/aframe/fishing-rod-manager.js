AFRAME.registerComponent("fishing-rod-manager", {
  schema: {
    hand: { type: "string", default: "#hand-right" },
    dummyHand: { type: "string", default: "#dummy-hand-right" },
  },

  init: function () {
    if (AFRAME.utils.device.checkHeadsetConnected()) {
      this.el.setAttribute("bind-position", `target: ${this.data.hand}`);
      this.el.setAttribute("bind-rotation", `target: ${this.data.hand}`);
    } else {
      this.el.setAttribute("bind-position", `target: ${this.data.dummyHand}`);
      this.el.setAttribute("bind-rotation", `target: ${this.data.dummyHand}`);
    }
  },
});
