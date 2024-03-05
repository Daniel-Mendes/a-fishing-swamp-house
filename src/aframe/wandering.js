AFRAME.registerComponent("wandering", {
  schema: {
    position: { type: "vec3", default: { x: 0, y: 0, z: 0 } },
    radius: { type: "number", default: 1 },
  },

  init: function () {
    // Randomize position based on position and radius
    const x = this.data.position.x + Math.random() * this.data.radius;
    const y = this.data.position.y + Math.random() * this.data.radius;
    const z = this.data.position.z + Math.random() * this.data.radius;
    this.el.object3D.position.set(x, y, z);

    // Randomize rotation
    this.el.object3D.rotation.set(
      Math.random() * Math.PI * 2,
      Math.random() * Math.PI * 2,
      Math.random() * Math.PI * 2
    );
  },
});
