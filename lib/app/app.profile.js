var profile = (function(){
	var copyOnly = function(filename, mid){
		var list = {
			"app/app.profile":1,
			"app/package.json":1
		};
		return (mid in list);
	};

	return {
		resourceTags: {
			copyOnly: function(filename, mid){
				return copyOnly(filename, mid);
			},
			
			declarative: function(filename){
				return /\.htm(l)?$/.test(filename);
			},
			
			amd: function(filename, mid){
				return !copyOnly(filename, mid) && /\.js$/.test(filename);
			}
		},

		trees:[
			[".", ".", /(\/\.)|(~$)/]
		]
	};
})();
