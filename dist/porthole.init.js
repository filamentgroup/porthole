/*! porthole - v0.3.0 - 2017-02-16
* https://github.com/filamentgroup/porthole
* Copyright (c) 2017 Filament Group; Licensed MIT */
;(function( $ ) {

	var selector = "[data-scroll-activate]";

	$( document ).bind("enhance",function(){
		$( selector ).porthole();
	} );

})( jQuery );