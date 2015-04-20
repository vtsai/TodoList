require("load-grunt-tasks")(grunt); // npm install --save-dev load-grunt-tasks

grunt.initConfig({
  "babel": {
    options: {
      sourceMap: true
    },
    dist: {
      files: [{
	"expand": true,
	"cwd": "public/js/src",
	"src": ["**/*"]
        "dest": "public/js/dist/"
      }]
    }
  }
});

grunt.registerTask("default", ["babel"]);
