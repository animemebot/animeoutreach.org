function scrollToVision() {

    if ($('.section-vision').length != 0) {
        $("html, body").animate({
            scrollTop: $('.section-vision').offset().top - 80
        }, 1000);
    }
}

function scrollToAboutUs() {

    if ($('.section-about-us').length != 0) {
        $("html, body").animate({
            scrollTop: $('.section-about-us').offset().top - 80
        }, 1000);
    }
}

function scrollToContact() {

    if ($('.section-contact').length != 0) {
        $("html, body").animate({
            scrollTop: $('.section-contact').offset().top - 80
        }, 1000);
    }
}

var homeAnimatedHeader = (function() {

	var docElem = document.documentElement,
		header = document.querySelector( '.home-header' ),
		didScroll = false,
		changeHeaderOn = 150;

	function init() {
		window.addEventListener( 'scroll', function( event ) {
			if( !didScroll ) {
				didScroll = true;
				setTimeout( scrollPage, 250 );
			}
		}, false );
	}

	function scrollPage() {
		var sy = scrollY();
		if ( sy >= changeHeaderOn ) {
			classie.add( header, 'home-header-shrink' );
		}
		else {
			classie.remove( header, 'home-header-shrink' );
		}
		didScroll = false;
	}

	function scrollY() {
		return window.pageYOffset || docElem.scrollTop;
	}

	init();

})();
