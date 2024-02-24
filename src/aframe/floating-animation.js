AFRAME.registerComponent("floating-animation", {
  init: function () {
    this.el.setAttribute("animation", {
      property: "position",
      to: { x: 0, y: 0.1, z: 0 },
      dir: "alternate",
      dur: 2000,
      loop: true,
      easing: "easeInOutSine",
    });
  },
});
