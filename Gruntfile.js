module.exports = function(grunt) {

    grunt.initConfig({
        sass: {
            dist: {
                files: {
                    'style/style.css' : 'style/style.scss'
                }
            }
        },
        watch: {
            css: {
                files: '**/*.scss',
                tasks: ['sass']
            }
        },
        clean: {
          build: {
            src: 'build'
          }
        },
        wget: {
            basic: {
                files: {
                      'data/style-guide.json': 'https://interactive.guim.co.uk/docsdata-test/1ng1nT5BFLBV6rFLCdJsUrFBxSlR9p0x4hB9tJL_uRlM.json',
                }
            }
        },
        'compile-handlebars': {
            allStatic: {
                files: [{
                    src: 'templates/template.handlebars',
                    dest: 'build/index.html'
                }],
            preHTML: 'templates/header.html',
            postHTML: 'templates/footer.html',
            templateData: 'data/style-guide.json'
        }
    }
  });

  grunt.loadNpmTasks('grunt-compile-handlebars');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-wget');

  grunt.registerTask('compile', ['wget', 'clean', 'compile-handlebars']);
  grunt.registerTask('default', ['sass','compile','watch']);

};
