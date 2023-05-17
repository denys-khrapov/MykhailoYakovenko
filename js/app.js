jQuery(document).ready(function ($) {
	initMobileMenu();
	initScrollTo();
	if ($('.services-slick').length > 0 || $('.reviews-slick').length > 0) {
		initSlick();
	}
});



function initSlick() {
	$('.services-slick').slick({
		dots: true,
		arrows: false,
		infinite: true,
		speed: 500,
		variableWidth: true,
		mobileFirst: true,
		responsive: [
			{
				breakpoint: 992,
				settings: 'unslick'
			}
		]
	});

	$('.reviews-slick').slick({
		dots: true,
		infinite: true,
		speed: 500,
		variableWidth: true,
		mobileFirst: true,
		prevArrow: $('.reviews-prev'),
		nextArrow: $('.reviews-next'),
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					infinite: false,
					variableWidth: false,
					slidesToShow: 3,
					slidesToScroll: 1
				}
			}
		]
	});
}

function initMobileMenu() {
	const headerBurger = $('.header__burger');
	const headerMenu = $('.header__menu');
	const body = $('body');
	const headerMenuLink = $('.header__link');
	const headerMenuBtnEnroll = $('.btn-enroll');
	const headerOverlay = $('.overlay');


	headerBurger.on('click', function () {
		headerBurger.toggleClass('active');
		headerMenu.toggleClass('active');
		body.toggleClass('lock');
	});

	headerOverlay.on('click', function () {
		if (body.hasClass('lock') && headerMenu.hasClass('active') && headerBurger.hasClass('active')) {
			body.removeClass('lock');
			headerMenu.removeClass('active');
			headerBurger.removeClass('active');
		}
	});

	headerMenuLink.on('click', function () {
		if (body.hasClass('lock') && headerMenu.hasClass('active') && headerBurger.hasClass('active')) {
			body.removeClass('lock');
			headerMenu.removeClass('active');
			headerBurger.removeClass('active');
		}
	});

	headerMenuBtnEnroll.on('click', function () {
		console.log('test');
		if (body.hasClass('lock') && headerMenu.hasClass('active') && headerBurger.hasClass('active')) {
			body.removeClass('lock');
			headerMenu.removeClass('active');
			headerBurger.removeClass('active');
		}
	});

}

function initScrollTo() {
	$("a.scroll-to").click(function () {
		$("html, body").animate({
			scrollTop: $($(this).attr("href")).offset().top + "px"
		}, {
			duration: 700,
			easing: "swing"
		});
		return false;
	});
}

if ($('[data-fancybox=""]').length > 0) {
	$('[data-fancybox=""]').fancybox({
		autoFocus: false,
		touch: false,
	});
}



