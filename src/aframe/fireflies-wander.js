AFRAME.registerComponent("fireflies-wander", {
  schema: {
    model: { type: "string" },
    count: { type: "int" },
    radius: { type: "number", default: 1 },
  },

  init: function () {
    for (let i = 0; i < this.data.count; i++) {
      const aEntity = document.createElement("a-entity");
      aEntity.setAttribute("gltf-model", this.data.model);
      aEntity.classList.add(`fireflies-${i}`);

      // Randomize firefly position based on el position and radius
      const x = this.el.object3D.position.x + Math.random() * this.data.radius;
      const y = this.el.object3D.position.y + Math.random() * this.data.radius;
      const z = this.el.object3D.position.z + Math.random() * this.data.radius;
      aEntity.object3D.position.set(x, y, z);

      // Randomize firefly rotation but keep it small
      aEntity.object3D.rotation.set(
        Math.random() * 1.8,
        Math.random() * 1.8,
        Math.random() * 1.8
      );

      // Firefly animation
      aEntity.setAttribute("animation", {
        property: "position",
        to: {
          x: x + Math.random() * 0.2,
          y: y + Math.random() * 0.2,
          z: z + Math.random() * 0.2,
        },
        loop: true,
        dur: 1000 + Math.random() * 1000,
        dir: "alternate",
        easing: "easeInOutSine",
      });

      this.el.appendChild(aEntity);
    }
  },
});
