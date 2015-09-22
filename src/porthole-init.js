/*
* porthole init
* Copyright (c) 2015 Filament Group, Inc.
* MIT License
*/

;(function( $ ) {

	var selector = "[data-scroll-activate]";

	$( document ).bind("enhance",function(){
		$( selector ).porthole();
	} );

})( jQuery );