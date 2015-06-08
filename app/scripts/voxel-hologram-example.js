define(["jquery", "voxel-hologram"],
function($,        VoxelHologram) {
  "use strict";

  var VoxelHologramExample = {
    defaults: {
      name: "VoxelHologramExample",

      elements: {
      },

      classnames: {},

      greeting: "Hello world!"
    },

    elements: {},

    constants: {},

    components: {},

    create: function(options) {
      this.options = $.extend(true, {}, this.defaults, options);

      this.init();

      return this;
    },

    init: function(options) {
      this.fetch();
      this.attach();
      this.setup();

      return this;
    },

    fetch: function() {
      console.log(this.options.name, "fetch()", "Fetched", { elements: this.elements });

      return this;
    },

    attach: function() {
      console.log(this.options.name, "attach()", "Attaching events");

      return this;
    },

    setup: function() {
      this.components.voxelHologram = VoxelHologram.create();

      console.log(this.options.name, "setup()", "Set up components", { components: this.components });

      return this;
    },

    destroy: function() {
      // TODO Destroy component gracefully.
    },

    greet: function() {
      return this.options.greeting;
    }
  };

  return Object.create(VoxelHologramExample);
});
