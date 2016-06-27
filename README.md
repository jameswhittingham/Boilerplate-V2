Front End Boilerplate V2
=====================

Author: James Whittingham





Installation instructions
===============================

	1) Installing node
		a) Install Node from http://nodejs.org/
		b) Open Command Line and navigate to your projects directory
		c) Run the command "npm install" to install node at the projects level
	2) Installing gulp
		a) Open Command Line and run the command "npm install --global gulp-cli"
	3) Other installations that may be required
		a) Compass



Gulp Tasks
===============================

	1) Run the following commands from Command Line at your PROJECTs level
		a) "gulp" - will run the following tasks
			- Runs a local server on port 3000 - navigate to http://localhost:3000 to view
			- Compile the .scss files into a main.css file
			- Compiles .ts into .js, into the src/tmp folder
			- Runs a watcher, to watch for changes in the .html, .scss and .ts files

		b) "gulp build" - will run the following tasks
			- Cleans the build, sass and tmp files
			- Copies the required files into a build folder for deployment

		c) "gulp favicons"
			- Creates a set of favicons based off the .png located at "src/assets/images/favicon.png"
			- puts these favicons in "src/assets/images/favicons/" folder






Thanks to : https://github.com/antonybudianto/angular2-starter/