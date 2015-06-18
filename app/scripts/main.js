require.config({
  paths: {
    // Libraries
    "jquery": "../../libraries/jquery/jquery",
    "voxel": "../../libraries/voxel/dist/scripts/voxel",
    "voxel-hologram": "../../libraries/voxel-hologram/dist/scripts/voxel-hologram"
    // /Libraries
  },

  shim: {
  }
});

require(["jquery", "voxel-hologram-example"],
function( $,        VoxelHologramExample) {
  var voxelHologramExample = VoxelHologramExample.create();

  console.log("App with jQuery v%s says, '%s'", $.fn.jquery, voxelHologramExample.greet());
});
