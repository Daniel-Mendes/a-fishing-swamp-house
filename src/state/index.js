AFRAME.registerState({
  initialState: {
    isFishing: false,
    hands: {
      left: {
        holdingEl: null,
      },
    },
  },

  handlers: {
    startFishing: (state, action) => {
      state.isFishing = true;
    },

    stopFishing: (state, action) => {
      state.isFishing = false;
    },

    setHoldingEl: (state, action) => {
      state.hands[action.hand].holdingEl = action.el;
    },
  },
});
