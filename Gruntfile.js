module.exports = function (grunt) {
  'use strict';
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    properties: grunt.file.readJSON('properties.json'),
    clean: {
      build: ['<%= properties.dist %>', '<%= properties.doc %>'],
    },
    mkdir: {
      all: {
        options: {
          create: ['<%= properties.doc %>'],
        },
      },
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
          /* programação mobile */
          { expand: true, dot: true, src: 'index.html', cwd: '<%= properties.src %>', dest: '<%= properties.dist %>/programacao-mobile/aula-4-angular' },
          { expand: true, dot: true, src: 'index.html', cwd: '<%= properties.src %>', dest: '<%= properties.dist %>/programacao-mobile/aula-3-ionic' },
          { expand: true, dot: true, src: 'index.html', cwd: '<%= properties.src %>', dest: '<%= properties.dist %>/programacao-mobile/aula-2-nestjs' },
          { expand: true, dot: true, src: 'index.html', cwd: '<%= properties.src %>', dest: '<%= properties.dist %>/programacao-mobile/aula-1-nodejs' },
          /* programação web */
          { expand: true, dot: true, src: 'index.html', cwd: '<%= properties.src %>', dest: '<%= properties.dist %>/programacao-web/aula-11-framework-css' },
          { expand: true, dot: true, src: 'index.html', cwd: '<%= properties.src %>', dest: '<%= properties.dist %>/programacao-web/aula-10-ajax' },
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
    shell: {
      build: {
        command: [
          /* programação mobile */
          ` pandoc --resource-path=<%= properties.src %>/programacao-mobile/aula-4-angular <%= properties.src %>/programacao-mobile/aula-4-angular/README.md -o <%= properties.doc %>/programacao-mobile-aula-4-angular.docx `,
          ` pandoc --resource-path=<%= properties.src %>/programacao-mobile/aula-3-ionic <%= properties.src %>/programacao-mobile/aula-3-ionic/README.md -o <%= properties.doc %>/programacao-mobile-aula-3-ionic.docx `,
          ` pandoc --resource-path=<%= properties.src %>/programacao-mobile/aula-2-nestjs <%= properties.src %>/programacao-mobile/aula-2-nestjs/README.md -o <%= properties.doc %>/programacao-mobile-aula-2-nestjs.docx `,
          ` pandoc --resource-path=<%= properties.src %>/programacao-mobile/aula-1-nodejs <%= properties.src %>/programacao-mobile/aula-1-nodejs/README.md -o <%= properties.doc %>/programacao-mobile-aula-1-nodejs.docx `,
          /* programação web */
          ` pandoc --resource-path=<%= properties.src %>/programacao-web/aula-11-framework-css <%= properties.src %>/programacao-web/aula-11-framework-css/README.md -o <%= properties.doc %>/programacao-web-aula-11-framework-css.docx `,
          ` pandoc --resource-path=<%= properties.src %>/programacao-web/aula-10-ajax <%= properties.src %>/programacao-web/aula-10-ajax/README.md -o <%= properties.doc %>/programacao-web-aula-10-ajax.docx `,
          ` pandoc --resource-path=<%= properties.src %>/programacao-web/aula-9-javascript <%= properties.src %>/programacao-web/aula-9-javascript/README.md -o <%= properties.doc %>/programacao-web-aula-9-javascript.docx `,
          ` pandoc --resource-path=<%= properties.src %>/programacao-web/aula-7-git <%= properties.src %>/programacao-web/aula-7-git/README.md -o <%= properties.doc %>/programacao-web-aula-7-git.docx `,
          ` pandoc --resource-path=<%= properties.src %>/programacao-web/aula-6-trabalho-css <%= properties.src %>/programacao-web/aula-6-trabalho-css/README.md -o <%= properties.doc %>/programacao-web-aula-6-trabalho-css.docx `,
          ` pandoc --resource-path=<%= properties.src %>/programacao-web/aula-5-css <%= properties.src %>/programacao-web/aula-5-css/README.md -o <%= properties.doc %>/programacao-web-aula-5-css.docx `,
          ` pandoc --resource-path=<%= properties.src %>/programacao-web/aula-4-html-semantico <%= properties.src %>/programacao-web/aula-4-html-semantico/README.md -o <%= properties.doc %>/programacao-web-aula-4-html-semantico.docx `,
          ` pandoc --resource-path=<%= properties.src %>/programacao-web/aula-3-html <%= properties.src %>/programacao-web/aula-3-html/README.md -o <%= properties.doc %>/programacao-web-aula-3-html.docx `,
          ` pandoc --resource-path=<%= properties.src %>/programacao-web/aula-2-xampp <%= properties.src %>/programacao-web/aula-2-xampp/README.md -o <%= properties.doc %>/programacao-web-aula-2-xampp.docx `,
          ` pandoc --resource-path=<%= properties.src %>/programacao-web/aula-2-servidor-apache <%= properties.src %>/programacao-web/aula-2-servidor-apache/README.md -o <%= properties.doc %>/programacao-web-aula-2-servidor-apache.docx `,
          ` pandoc --resource-path=<%= properties.src %>/programacao-web/aula-2-historia-internet <%= properties.src %>/programacao-web/aula-2-historia-internet/README.md -o <%= properties.doc %>/programacao-web-aula-2-historia-internet.docx `,
          ` pandoc --resource-path=<%= properties.src %>/programacao-web/aula-2-gerenciador-pacotes <%= properties.src %>/programacao-web/aula-2-gerenciador-pacotes/README.md -o <%= properties.doc %>/programacao-web-aula-2-gerenciador-pacotes.docx `,
          ` pandoc --resource-path=<%= properties.src %>/programacao-web/aula-2-criacao-templates <%= properties.src %>/programacao-web/aula-2-criacao-templates/README.md -o <%= properties.doc %>/programacao-web-aula-2-criacao-templates.docx `,
          ` pandoc --resource-path=<%= properties.src %>/programacao-web/aula-1-ementa <%= properties.src %>/programacao-web/aula-1-ementa/README.md -o <%= properties.doc %>/programacao-web-aula-1-ementa.docx `,
        ].join('&&'),
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
  grunt.registerTask('build', ['clean', 'mkdir', 'copy:dist', 'copy:html', 'shell']);
  grunt.registerTask('github', ['build', 'gh-pages']);
  grunt.registerTask('default', ['build']);
};
