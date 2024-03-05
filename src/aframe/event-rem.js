AFRAME.registerComponent("event-rem", {
  multiple: true,

  schema: {
    event: { type: "string", default: "click" },
    attribute: { type: "string" },
  },

  init: function () {
    this.onEvent = this.onEvent.bind(this);
    this.el.addEventListener(this.data.event, this.onEvent);
  },

  remove: function () {
    this.el.removeEventListener(this.data.event, this.onEvent);
  },

  onEvent: function (evt) {
    this.el.removeAttribute(this.data.attribute);
  },
});
