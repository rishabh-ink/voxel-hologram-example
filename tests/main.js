var allTestFiles = [];
var TEST_REGEXP = /(spec|test)\.js$/i;

var pathToModule = function(path) {
  return path.replace(/^\/base\//, '').replace(/\.js$/, '');
};

Object.keys(window.__karma__.files).forEach(function(file) {
  if (TEST_REGEXP.test(file)) {
    allTestFiles.push(pathToModule(file));
  }
});

require.config({
  baseUrl: "/base",

  paths: {
    // Libraries
    "jquery": "libraries/jquery/jquery",
    "hljs": "libraries/highlightjs/highlight.pack",
    "voxel": "libraries/voxel/dist/voxel",
    "voxel-hologram": "libraries/voxel/dist/voxel-hologram",
    // /Libraries

    // Application
    "voxel-hologram-example": "app/scripts/voxel-hologram-example",
    // /Application

    // Fixtures
    "voxel-hologram-example-fixture": "tests/fixtures/voxel-hologram-example-fixture"
    // /Fixtures
  },

  shim: {
  },

  deps: allTestFiles,

  callback: window.__karma__.start
});
