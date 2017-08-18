/*! porthole - v0.4.1 - 2017-08-18
* https://github.com/filamentgroup/porthole
* Copyright (c) 2017 Filament Group; Licensed MIT */
;(function( $ ) {

	var selector = "[data-scroll-activate]";

	$( document ).bind("enhance",function(){
		$( selector ).porthole();
	} );

})( jQuery );