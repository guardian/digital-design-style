module.exports = function(grunt) {

    grunt.initConfig({
        sass: {
            dist: {
                files: {
                    'docs/style.css' : 'style/style.scss'
                }
            }
        },
        watch: {
          options: {
            livereload: true,
          },
          css: {
              files: '**/*.scss',
              tasks: ['sass']
          },
          html: {
              files: ['templates/*.html', 'templates/*.handlebars'],
              tasks: ['compile']
          },
          js: {
            files: ['js/*.js'],
            tasks: ['copy']
          },
          configFiles: {
            files: [ 'Gruntfile.js', 'config/*.js' ],
            options: {
              reload: true
            }
          }
        },
        clean: {
          docs: {
            src: 'docs/*.html'
          },
          data: {
            src: 'data/*.json'
          }
        },
        wget: {
            basic: {
                files: {
                      'data/style-guide.json': 'https://interactive.guim.co.uk/docsdata-test/1ng1nT5BFLBV6rFLCdJsUrFBxSlR9p0x4hB9tJL_uRlM.json',
                }
            }
        },
        copy: {
          main: {
            files: [
              {expand: true, src: ['js/**.js'], dest: 'docs'}
            ]
          }
        },
        connect: {
          server: {
            options: {
              // uncomment below to use https server
              // protocol: 'https',
              port: 8000,
              useAvailablePort: true,
              base: 'docs',
              livereload: true
            }
          }
        },
        'compile-handlebars': {
            allStatic: {
                files: [{
                    src: 'templates/template.handlebars',
                    dest: 'docs/index.html'
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
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('compile', ['clean','wget','compile-handlebars']);
  grunt.registerTask('default', ['sass','clean','wget','compile-handlebars','connect','watch']);
};
