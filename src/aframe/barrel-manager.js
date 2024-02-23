AFRAME.registerComponent("barrel-manager", {
  init: function () {
    const fishesEl = document.querySelectorAll(".fishes");
    let fishes = 0;

    this.el.addEventListener("click", () => {
      console.log("barrel clicked");

      fishesEl[fishes].setAttribute("visible", true);
      fishes++;

      // for (let i = 0; i < fishesEl.length; i++) {
      //   fishesEl[i].setAttribute("position", {
      //     x: Math.random() * 6 - 3,
      //     y: Math.random() * 6 - 3,
      //     z: Math.random() * 6 - 3,
      //   });
      // }

      // for test ring the count of fishes
      fishes = 3;

      for (let i = 0; i < fishes; i++) {
        setTimeout(() => {
          // emit event new-fish
          this.el.dispatchEvent(new CustomEvent("new-fish"));
        }, i * 1000);
      }
    });
  },
});
