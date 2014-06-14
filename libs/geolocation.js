var navigator = {};
if(window.navigator){
	navigator = window.navigator;
} else {
	navigator = {};
}


$.currentPosition = function(){
	var deferred = $.Deferred();
	if(!navigator.getCurrentPosition){
		deferred.reject({
			status:0,
			message:"You can't use Geolocation API."
		});
	} else {
		navigator.getCurrentPosition(
			function(geoInfo){
				deferred.resolve(geoInfo,{
					status:1,
					message:"OK"
				});
			},
			function(err){
				deferred.reject({
					status:err.code,
					message:err.message
				});
			}
		);
	}

	return deferred;

};


