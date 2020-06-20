// Install these to change scss file to css
// npm install --save-dev grunt-sass
// npm install --save-dev time-grunt jit-grunt

'use strict';       // use strict javascript

module.exports = function(grunt) {

    require('time-grunt')(grunt);       // load in time-grunt node module

    require('jit-grunt')(grunt, {       // load in jit-grunt node module
        useminPrepare: 'grunt-usemin'
    });        

    grunt.initConfig({
        sass: {
            dist: {
                files: {
                    'css/styles.css': 'css/styles.scss'
                }
            }
        },
        watch: {            // npm install --save-dev grunt-contrib-watch
            files: 'css/*.scss',
            tasks: ['sass']
        },
        browserSync: {      // npm install --save-dev grunt-browser-sync
            dev: {
                bsFiles: {
                    src: [
                        'css/*.css',
                        '*.html',
                        'js/*.js'
                    ]
                },
                option: {
                    watchTask: true,
                    server: {
                        baseDir: './'
                    }
                }
            }
        },
        copy: {     // npm install grunt-contrib copy grunt-contrib-clean
            html: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: './',
                    src: ['*.html'],
                    dest: 'dist'
                }]
            },
            fonts: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: 'node_modules/font-awesome',
                    src: ['fonts/*.*'],
                    dest: 'dist'
                }]
            }
        }, 
        clean: {
            build: {
                src: ['dist/']
            }
        },
        imagemin: {             // npm install --save-dev grunt-contrib-imagemin
            dynamic: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: './',
                    src: ['img/*.{png,jpg,gif}'],
                    dest: 'dist/'
                }]
            }
        },
        useminPrepare : {
            foo: {
                dest: 'dist',
                src: ['contactus.html', 'aboutus.html', 'index.html']
            },
            options: {
                flow: {
                    steps: {
                        css: ['cssmin'],
                        js: ['uglify']
                    },
                    post: {
                        css: [{
                            name: 'cssmin',
                            createConfig: function (context, block) {
                                var generated = context.options.generated;
                                generated.options = {
                                    keepSpecialComments: 0, rebase: false
                                };
                            }
                        }]
                    }
                }
            }
        },
        concat: {
            options: {
                separator: ';'
            },
            dist: {}
        },
        uglify: {
            dist: {}
        },
        cssmin: {
            dist: {}
        },
        filerev: {
            options: {
                encoding: 'utf8',
                algorithm: 'md5',
                length: 20
            },
            release: {
                files: [{
                    src: [
                        'dist/js/*.js',
                        'dist/css/*.css'
                    ]
                }]
            }
        },
        usemin: {
            html: ['dist/contactus.html', 'dist/aboutus.html', 'dist/index.html'],
            options: {
                assertsDirs: ['dist', 'dist/css', 'dist/js']
            }
        },
        htmlmin: {
            dist: {
                options: {
                    collapseWhitespace: true
                },
                files: {
                    'dist/index.html': 'dist/index.html',
                    'dist/contactus.html': 'dist/contactus.html',
                    'dist/aboutus.html': 'dist/aboutus.html'
                }
            }
        }

    });

    grunt.registerTask('css',['sass']);     // run - grunt css - to change css to scss 
    grunt.registerTask('default', ['browserSync', 'watch']);
    grunt.registerTask('build', [
        'clean',
        'copy',
        'imagemin',
        'useminPrepare',
        'concat',
        'cssmin',
        'uglify',
        'filerev',
        'usemin',
        'htmlmin'
    ]);
};
