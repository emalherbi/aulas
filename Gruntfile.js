module.exports = function (grunt) {
  'use strict';
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    properties: grunt.file.readJSON('properties.json'),
    clean: {
      build: ['<%= properties.dist %>'],
    },
    copy: {
      html: {
        files: [
          { expand: true, dot: true, cwd: '<%= properties.src %>', dest: '<%= properties.dist %>', src: ['**'] },
          { expand: true, dot: true, cwd: '<%= properties.src %>', dest: '<%= properties.dist %>/sobre-professor', src: 'index.html' },
          { expand: true, dot: true, cwd: '<%= properties.src %>', dest: '<%= properties.dist %>/sobre-professor', src: 'index.html' },
          { expand: true, dot: true, cwd: '<%= properties.src %>', dest: '<%= properties.dist %>/sobre-professor', src: 'index.html' },
        ],
      },
    },
    'gh-pages': {
      options: {
        base: '<%= properties.dist %>',
        message: 'auto-generated commit',
      },
      src: ['**/*'],
    },
  });
  for (var key in grunt.file.readJSON('package.json').devDependencies) {
    if (key !== 'grunt' && key.indexOf('grunt') === 0) {
      grunt.loadNpmTasks(key);
    }
  }
  grunt.registerTask('default', ['clean', 'copy']);
};
