<<<<<<< HEAD
# security-app
Multitarget Application demoing SAP HANA XSA security from database layer and application (nodejs) layer.
=======
# security-applicaiton
Multitarget Application demoing SAP HANA XSA security from database layer and application (nodejs) layer.

The package.json file originally:

{
	"dependencies": {
		"@sap/xsenv": "^1.2.9",
		"@sap/xsjs": "^4.0.1",
		"express": "~4.17",
		"request": "2.x",
		"@sap/textanalysis": "x",
		"@sap/hdbext": "latest",
		"@sap/xssec": "x",
		"body-parser": "x",
		"form-data": "x",
		"dotenv": "x",
		"passport": "x",
		"@sap/logging": "x"
	},
	"description": "my description",
	"devDependencies": {
		"@sap/xsjs-test": "^3.0.2"
	},
	"files": [],
	"main": "server.js",
	"name": "security_node",
	"scripts": {
		"start": "node server.js",
		"test": "node testrun.js"
	},
	"engines": {
		"node": "8.x"
	},
	"version": "1.0.0"
}

-----

	"dotenv": "x" was removed to make the project work.
>>>>>>> refs/heads/master
