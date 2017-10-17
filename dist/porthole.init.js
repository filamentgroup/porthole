/*! porthole - v0.5.0 - 2017-10-17
* https://github.com/filamentgroup/porthole
* Copyright (c) 2017 Filament Group; Licensed MIT */
;(function( $ ) {

	var selector = "[data-scroll-activate]";

	$( document ).bind("enhance",function(){
		$( selector ).porthole();
	} );

})( jQuery );