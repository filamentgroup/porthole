/*! porthole - v0.1.0 - 2016-05-20
* https://github.com/filamentgroup/porthole
* Copyright (c) 2016 Filament Group; Licensed MIT */
;(function( $ ) {

	var selector = "[data-scroll-activate]";

	$( document ).bind("enhance",function(){
		$( selector ).porthole();
	} );

})( jQuery );