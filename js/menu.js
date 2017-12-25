$(function(){

	// Mobile menu
	var menu = $('#menu-mobile');
	var width = menu.width();

	var toggle = $('.toggle-menu');
	toggle.on('click', function(){
		if(menu.hasClass('active')){
			menu.removeClass('active');
			// toggle.removeClass('is-open');
			// toggle.addClass('is-closed');
			// $('body, html').css('overflow', 'auto');
			$('.toggle-menu .menu-icon').css('background-image', 'url("../img/icons/menu-blue.svg")');
			toggle.css({'left': '-75px', 'transition': 'left 0.15s ease-in-out'});

		}else{
			menu.addClass('active');
			// toggle.addClass('is-open');
			// toggle.removeClass('is-closed');
			// $('body, html').css('overflow', 'hidden');
			$('.toggle-menu .menu-icon').css('background-image', 'url("../img/icons/close-white.svg")');
			toggle.css({'left': '1rem', 'transition': 'left 0.15s ease-in-out'});
		}
	});

	// Active state
	var loc = window.location.href; // returns the full URL

	var url_parts = loc.split('/');
	var current_page = url_parts.pop() || url_parts.pop(); // handle potential trailing slash

	var selector = '#menu-normal a[href*="' + current_page + '"]';
	$(selector).addClass('active');
	$('#menu-mobile a[href*="' + current_page + '"]').addClass('active');
});
