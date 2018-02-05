module.exports = function(grunt) {

    // 1. All configuration goes here
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        concat: {
            // 2. Configuration for concatinating files goes here.
        },
        svgmin: {
            dist: {
                options: {
                    plugins: [
                        // Don't remove XML declaration (needed to avoid errors creating PNG on Win 7)
                        { removeXMLProcInst: false }
                    ]
                },
                files: [{
                    expand: true,
                    cwd: 'flags/inuse',
                    src: ['*.svg'],
                    dest: 'source'
                }]
            }
        },
    		grunticon: {
    		    myIcons: {
    		        files: [{
    		            expand: true,
    		            cwd: 'source',
    		            src: ['*.svg'],
    		            dest: "output"
    		        }],
    		        options: {
    					         cssprefix: '.icon-flag-',
                       defaultWidth: '50px',
                       defaultHeight: '30px'
    		        }
    		    }
    		}

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
	grunt.loadNpmTasks('grunt-grunticon');
  grunt.loadNpmTasks('grunt-svgmin');


    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
 	grunt.registerTask('default', ['svgmin', 'grunticon:myIcons']);

};
