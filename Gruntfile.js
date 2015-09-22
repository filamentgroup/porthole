'use strict';

module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		// Metadata.
		pkg: grunt.file.readJSON('package.json'),
		banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
			'<%= grunt.template.today("yyyy-mm-dd") %>\n' +
			'<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
			'* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.company %>;' +
			' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
		// Task configuration.
		clean: {
			dependencies: ['dist/dependencies/'],
			post: ['dist/tmp/', 'dist/**/*.min.*']
		},
		copy: {
			jquery: {
				src: 'node_modules/jquery/dist/jquery.js',
				dest: 'dist/dependencies/jquery.js'
			},
			qunit: {
				files: [{
					expand: true,
					flatten: true,
					src: [ 'node_modules/qunitjs/qunit/*' ],
					dest: 'dist/dependencies/',
					filter: 'isFile'
				}]
			}
		},
		concat: {
			options: {
				banner: '<%= banner %>',
				stripBanners: true
			},
			core: {
				src: [
					'src/porthole.js'
				],
				dest: 'dist/<%= pkg.name %>.js'
			},
			init: {
				src: [
					'src/porthole-init.js'
				],
				dest: 'dist/<%= pkg.name %>.init.js'
			}
		},
		qunit: {
			files: ['test/**/*.html']
		},
		jshint: {
			gruntfile: {
				options: {
					jshintrc: '.jshintrc'
				},
				src: 'Gruntfile.js'
			},
			src: {
				options: {
					jshintrc: 'src/.jshintrc'
				},
				src: ['src/**/*.js']
			},
			test: {
				options: {
					jshintrc: 'test/.jshintrc'
				},
				src: ['test/**/*.js']
			},
		},
		watch: {
			gruntfile: {
				files: '<%= jshint.gruntfile.src %>',
				tasks: ['jshint:gruntfile']
			},
			src: {
				files: ['<%= concat.core.src %>', '<%= concat.init.src %>'],
				tasks: ['src']
			},
			test: {
				files: '<%= jshint.test.src %>',
				tasks: ['jshint:test', 'qunit']
			},
		},
		uglify: {
			js: {
				files: {
					'dist/<%= pkg.name %>.min.js': [ 'dist/<%= pkg.name %>.js' ],
					'dist/<%= pkg.name %>.init.min.js': [ 'dist/<%= pkg.name %>.init.js' ]
				}
			}
		},
		bytesize: {
			dist: {
				src: [
					'dist/<%= pkg.name %>.min.js',
					'dist/<%= pkg.name %>.init.min.js'
				]
			}
		},
		'gh-pages': {
			options: {},
			src: ['dist/**/*', 'demo/**/*', 'test/**/*']
		},
		compress: {
			main: {
				options: {
					archive: 'dist/porthole-<%= pkg.version %>.zip',
					mode: 'zip',
					pretty: true
				},
				files: [
					{expand: true, cwd: 'dist/', src: ['*'], dest: 'porthole/'},
					{expand: true, cwd: 'dist/', src: ['dependencies/*'], dest: 'porthole/'}
				]
			}
		}
	});

	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	// Default task.
	grunt.registerTask('travis', ['jshint', 'qunit']);
	grunt.registerTask('src', ['concat', 'clean:dependencies', 'copy', 'clean:post']);
	grunt.registerTask('default', ['jshint', 'src', 'qunit', 'bytesize']);

	// Deploy
	grunt.registerTask('deploy', ['default', 'gh-pages']);

};
