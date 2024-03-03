AFRAME.registerState({
  initialState: {
    isFishing: false,

    hands: {
      left: {
        holdingEl: null,
      },

      right: {
        holdingEl: null,
      },
    },

    weapons: {
      fishingRod: {
        hook: {
          isInWater: false,
          baitEl: null,
          catchEl: null,
        },
      },
      fishingSpear: {
        catchEl: null,
      },
    },

    barrel: {
      fish: 0,
    },
  },

  handlers: {
    isHoldingWeapon: (state, action) => {
      return !!state.hands[action.hand].holdingEl;
    },

    setHoldingEl: (state, action) => {
      state.hands[action.hand].holdingEl = action.el;
    },

    setBaitEl: (state, action) => {
      state.weapons.fishingRod.hook.baitEl = action.el;
    },

    setCatchEl: (state, action) => {
      state.weapons.fishingRod.hook.catchEl = action.el;
    },

    hasBait: (state, action) => {
      return !!state.fishingRod.hook.baitEl;
    },

    hasCatch: (state, action) => {
      return !!state.fishingRod.hook.catchEl;
    },
  },

  computeState: (state) => {
    state.isFishing =
      (state.hands.left.holdingEl === "fishingRod" ||
        state.hands.right.holdingEl === "fishingRod") &&
      state.weapons.fishingRod.hook.isInWater &&
      state.weapons.fishingRod.hook.baitEl &&
      !state.weapons.fishingRod.hook.catchEl;

    // hasn't weapon in hand -> return false
    // weapon catch anything -> return false
    // if fishing spear -> return true
    // if fishing rod hasn't baitEl -> return false
    // isn't in water -> return false
    // return true
  },
});
