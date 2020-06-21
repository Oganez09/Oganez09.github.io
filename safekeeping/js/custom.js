$(document).ready(function() {

	$(document)
	.on('click', '[data-open-menu]', function () {
		$(this).closest('.header_nav').addClass('show');
	})
	.on('click', '[data-close-menu]', function () {
		$(this).closest('.header_nav').removeClass('show');
	})
	.on('click', '.header_nav_item__sub', function () {
		$(this).children('.header_nav_sub_list').slideToggle();
	})
	.on('click', '[data-close-menu]', function () {
		$(this).closest('.header_nav').removeClass('show');
	})

	$('.s_customers_owl').owlCarousel({
		margin: 20,
		dots: false,
		nav: true,
		loop: true,
		mouseDrag: false,
		navText: ['<i class="las la-long-arrow-alt-left"></i>', '<i class="las la-long-arrow-alt-right"></i>'],
		responsive: {
			0: {
				items: 1
			},
			450: {
				items: 2
			},
			768: {
				items: 3
			},
			992: {
				items: 4
			},
			1200: {
				items: 4
			}
		}
	});

});