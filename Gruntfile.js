/*global module:false*/
module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		// Metadata.
		pkg: grunt.file.readJSON('package.json'),
		banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
			'<%= grunt.template.today("yyyy-mm-dd") %>\n' +
			'<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
			'* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %>;' +
			' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
		// Task configuration.
		concat: {
			options:{
				banner: '<%= banner %>',
				stripBanners: true
			},
			basic: {
				files:{
					"dist/jquery.geolocation.js":[
						"libs/intro.js",
						"libs/geolocation.js",
						"libs/outro.js"
					]
				}
			}
		},
		jshint: {
			options: {
				curly: true,
				eqeqeq: true,
				immed: true,
				latedef: true,
				newcap: true,
				noarg: true,
				sub: true,
				undef: true,
				unused: true,
				boss: true,
				eqnull: true,
				browser: true,
				globals: {
					jQuery: true,
					window: true
				}
			},
			gruntfile: {
				src: 'Gruntfile.js'
			},
			dist: {
				src: ['dist/*.js']
			}
		},
		connect: {
			server: {
				options: {
					port: 8000,
					base: ['test','dist']
				}
			}
		},
		watch: {
			dist: {
				files: ['libs/**/*.js'],
				tasks: ['concat', 'jshint:dist'],
				options: {
					livereload: true
				}
			},
			test: {
				files: ['test/**/*'],
				tasks: [],
				options: {
					livereload:true
				}
			}
		}
	});

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Default task.
	grunt.registerTask('default', ['concat', 'jshint' ]);
	grunt.registerTask('test', ['concat', 'jshint', 'connect', 'watch' ]);

};
