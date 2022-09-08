module.exports = function (grunt) {
  'use strict';
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    properties: grunt.file.readJSON('properties.json'),
    clean: {
      build: ['<%= properties.dist %>'],
    },
    copy: {
      dist: {
        files: [{ expand: true, dot: true, cwd: '<%= properties.src %>', dest: '<%= properties.dist %>', src: ['**'] }],
      },
      html: {
        files: [
          { expand: true, dot: true, src: 'index.html', cwd: '<%= properties.src %>', dest: '<%= properties.dist %>' },
          { expand: true, dot: true, src: 'index.html', cwd: '<%= properties.src %>', dest: '<%= properties.dist %>/programacao-mobile' },
          { expand: true, dot: true, src: 'index.html', cwd: '<%= properties.src %>', dest: '<%= properties.dist %>/programacao-web' },
          { expand: true, dot: true, src: 'index.html', cwd: '<%= properties.src %>', dest: '<%= properties.dist %>/sobre-professor' },
          /* gerado pelo yarn build */
          /* programação mobile */
          { expand: true, dot: true, src: 'index.html', cwd: '<%= properties.src %>', dest: '<%= properties.dist %>/programacao-mobile/aula-2-nestjs' },
          { expand: true, dot: true, src: 'index.html', cwd: '<%= properties.src %>', dest: '<%= properties.dist %>/programacao-mobile/aula-1-nodejs' },
          /* programação web */
          { expand: true, dot: true, src: 'index.html', cwd: '<%= properties.src %>', dest: '<%= properties.dist %>/programacao-web/aula-9-javascript' },
          { expand: true, dot: true, src: 'index.html', cwd: '<%= properties.src %>', dest: '<%= properties.dist %>/programacao-web/aula-7-git' },
          { expand: true, dot: true, src: 'index.html', cwd: '<%= properties.src %>', dest: '<%= properties.dist %>/programacao-web/aula-6-trabalho-css' },
          { expand: true, dot: true, src: 'index.html', cwd: '<%= properties.src %>', dest: '<%= properties.dist %>/programacao-web/aula-5-css' },
          { expand: true, dot: true, src: 'index.html', cwd: '<%= properties.src %>', dest: '<%= properties.dist %>/programacao-web/aula-4-html-semantico' },
          { expand: true, dot: true, src: 'index.html', cwd: '<%= properties.src %>', dest: '<%= properties.dist %>/programacao-web/aula-3-html' },
          { expand: true, dot: true, src: 'index.html', cwd: '<%= properties.src %>', dest: '<%= properties.dist %>/programacao-web/aula-2-xampp' },
          { expand: true, dot: true, src: 'index.html', cwd: '<%= properties.src %>', dest: '<%= properties.dist %>/programacao-web/aula-2-servidor-apache' },
          { expand: true, dot: true, src: 'index.html', cwd: '<%= properties.src %>', dest: '<%= properties.dist %>/programacao-web/aula-2-historia-internet' },
          { expand: true, dot: true, src: 'index.html', cwd: '<%= properties.src %>', dest: '<%= properties.dist %>/programacao-web/aula-2-gerenciador-pacotes' },
          { expand: true, dot: true, src: 'index.html', cwd: '<%= properties.src %>', dest: '<%= properties.dist %>/programacao-web/aula-2-criacao-templates' },
          { expand: true, dot: true, src: 'index.html', cwd: '<%= properties.src %>', dest: '<%= properties.dist %>/programacao-web/aula-1-ementa' },
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
  grunt.registerTask('default', ['clean', 'copy:dist', 'copy:html', 'gh-pages']);
};
