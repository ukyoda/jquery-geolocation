/*! jquery-geolocation - v0.0.0 - 2014-02-27
* Copyright (c) 2014 ukyoda; Licensed  */
(function($){

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
			status:404,
			message:"You can't use Geolocation API."
		});
	} else {
		navigator.getCurrentPosition(
			function(geoInfo){
				deferred.resolve(geoInfo,{
					status:200,
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



}(jQuery));
