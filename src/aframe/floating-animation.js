AFRAME.registerComponent("floating-animation", {
  init: function () {
    this.el.setAttribute("animation", {
      property: "position",
      to: { x: 0, y: 0.2, z: 0 },
      dir: "alternate",
      dur: 1500,
      loop: true,
      easing: "easeInOutSine",
    });
  },
});
