$(function(){
	var menu = $('#menu-mobile');
	var width = menu.width();

	// var open = $('.open-menu');
	// var close = $('.close-menu');

	var toggle = $('.toggle-menu');
	toggle.on('click', function(){
		if(menu.hasClass('active')){
			menu.removeClass('active');
			$('.toggle-menu .menu-icon').css('background-image', 'url("../img/icons/menu.svg")');
			toggle.css({'left': '-75px', 'transition': 'left 0.15s ease-in-out'});
			// $('.toggle-menu .menu-icon').css({
			// 	'background-image':'url("../img/icons/menu.svg")',
			// 	'right':'0'
			// });

		}else{
			menu.addClass('active');
			$('.toggle-menu .menu-icon').css('background-image', 'url("../img/icons/close.svg")');
			toggle.css({'left': '1rem', 'transition': 'left 0.15s ease-in-out'});
		}
	});

	// open.on("click", function(){
	// 	// if(menu.hasClass("close-menu")){
	// 	// 	menu.removeClass("close-menu");
	// 	// }
	// 	menu.addClass('active');
	// 	$('.open-menu .menu-icon').css('background-image', 'url("../img/icons/close.svg")');
   //
	// });
   //
	// close.on("click", function(){
	// 	// if(menu.hasClass("open-menu")){
	// 	// 	menu.removeClass("open-menu");
	// 	// }
	// 	menu.removeClass("active");
	// 	$('.open-menu .menu-icon').css('background-image', 'url("../img/icons/close.svg")');
	// });

});
