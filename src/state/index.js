AFRAME.registerState({
  initialState: {
    isFishing: false,

    fishingArea: {
      airCollide: true,
      houseCollide: true,
    },

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

    setFishingAreaAirCollide: (state, action) => {
      state.fishingArea.airCollide = action.airCollide;
    },

    setFishingAreaHouseCollide: (state, action) => {
      state.fishingArea.houseCollide = action.houseCollide;
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
});
