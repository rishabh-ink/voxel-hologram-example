require.config({
  paths: {
    // Libraries
    "jquery": "../../libraries/jquery/jquery",
    "hljs": "../../libraries/highlightjs/highlight.pack",
    "voxel": "../../libraries/voxel/dist/voxel",
    "voxel-hologram": "../../libraries/voxel/dist/voxel-hologram"
    // /Libraries
  },

  shim: {
  }
});

require(["jquery", "voxel-hologram-example"],
function( $,        VoxelHologramExample) {
  console.log("App with jQuery v%s says, '%s'", $.fn.jquery, VoxelHologramExample.greet());
});
