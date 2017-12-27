var currentPosition = 0;

function parallaxObj($o, speed) {
	"use strict";
	$o.css('transform', 'translate3d(0, ' + ~~(currentPosition / speed) + 'px, 0)');
}

function fadeInObjects() {
	"use strict";
	var t = $(window).scrollTop(),
		e = $(window).height();
	$(".fade").not(".in").each(function() {
		var $fadeinelem = $(this);
		var n = $fadeinelem.offset().top - e,
			i = (e / 8);
		if (t - i > n) {
			if ($fadeinelem.data('fadedelay')) {
				setTimeout(function() {
					$fadeinelem.addClass("in");
				}, parseInt($fadeinelem.data('fadedelay')) * 100);
			} else {
				$fadeinelem.addClass("in");
			}
		} else if (t < n) {
			/* $(this).removeClass("in"); */
		}
	});
}

$(function() {
	"use strict";
	currentPosition = $(window).scrollTop();

	fadeInObjects();

	$(window).scroll(function() {
	});

});

$(window).scroll(function() {
	"use strict";
	currentPosition = $(window).scrollTop();

	fadeInObjects();
});

$(window).resize(function() {
	"use strict";
	currentPosition = $(window).scrollTop();

	fadeInObjects();
});
