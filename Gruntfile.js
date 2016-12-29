module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		concat: {
			dist: {
				files: {
					'build/<%= pkg.name %>.js': '<%= pkg.main %>',
				}
			}
		},
		uglify: {
		    options: {
		        banner: '/*! <%= pkg.name %> <%= pkg.version %> <%= grunt.template.today("yyyy-mm-dd") %>  <%= pkg.author %> */\n'
		    },
			dist: {
				files: {
					'build/libs.min.js':'<%= pkg.libs %>',
					'build/<%= pkg.name %>.min.js':['build/<%= pkg.name %>.js'],
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');

	grunt.registerTask('default', ['concat', 'uglify']);

};