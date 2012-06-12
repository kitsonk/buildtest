var profile = {
	action: "release",
	basePath: "lib",
	releaseName: "build",
	copyTests: false,
	mini: false,
	cssOptimize: "comments.keepLines",
	optimize: "",
	layerOptimize: "",
	selectorEngine: "acme",

	packages:[{
		name: "dojo",
		location: "./dojo"
	},{
		name: "dijit",
		location: "./dijit"
	},{
		name: "dojox",
		location: "./dojox"
	},{
		name: "app",
		location: "./app"
	}],

	layers: {
		"app/main": {
			include: [],
			declarativeIncludes: true
		}
	},
	
	staticHasFeatures: {
		"dojo-firebug": false,
		"host-browser": true
	}
};
