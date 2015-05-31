define(["voxel-hologram-example-fixture", "voxel-hologram-example"],
function(VoxelHologramExampleFixture,     VoxelHologramExample) {
  describe("VoxelHologramExample", function() {
    it("Should greet", function() {
      var voxelHologramExample = VoxelHologramExample.create({
        greeting: VoxelHologramExampleFixture.greeting
      });

      expect(voxelHologramExample.greet()).toEqual(VoxelHologramExampleFixture.greeting);
    });
  });
});
