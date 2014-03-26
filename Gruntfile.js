'use strict';


module.exports = function (grunt) {
  grunt.initConfig({
        jshint: {
            files: ['scripts/**/*.js', 'scripts/*.js', 'tests/**/*.js', 'tests/*.js'],
        },
        requirejs: {
            compile: {
                options: {
                    almond:true,
                    mainConfigFile: 'scripts/config.js',
                    findNestedDependencies: true,
                    out: 'build/app.js',
               }
            }
        },
        less: {
            compile: {
                options: {
                    cleancss: true,
                    paths: ['styles/']
                },
                files: {
                    'build/app.css': 'styles/app.less'
                }
            }
        },
        watch: {
          styles: {
            files: ["styles/*.less"],
            tasks: ["less"]
          },
          scripts: {
            files: ["scripts/**/*.js", "scripts/*.js"],
            tasks: ["jshint","requirejs"]
          }
        },
        clean: ["build"]
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-requirejs');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('build', ['clean', 'jshint', 'requirejs', 'less']);
};
