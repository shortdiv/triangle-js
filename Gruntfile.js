'use strict';
module.exports = function(grunt){
  //Project Configuration
  grunt.initConfig({
  //task grunt-contrib-copy
  pkg: grunt.file.readJSON('package.json'),

    watch: {
      scripts: {
        files: ['**/*.js'],
        tasks: ['jasmine']
      }
    },

    jasmine: {
      pivotal: {
        src: 'src/**/*.js',
        options: {
          specs: 'spec/*Spec.js',
          helpers: 'spec/*Helper.js',
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jasmine');

  grunt.registerTask('default', ['jasmine','watch']);

};