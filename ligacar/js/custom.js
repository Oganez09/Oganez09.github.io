$(document).ready(function() {

	$(document)

	.on("click", "[data-toggle = us_tabs]", function(e) {
		e.preventDefault();

		var target = $(this).attr("href");

		$(this).closest(".us_tabs_nav").children().removeClass("active");
		$(this).parent().addClass("active");

		$(this).closest(".us_tabs_nav").next().children().removeClass("active");
		$(target).addClass("active");
	})

	.on("click", "#menu_btn", function() {
		if ($(this).closest(".header_box").hasClass("show")) {
			$(this).closest(".header_box").removeClass("show");
		} else {
			$(this).closest(".header_box").addClass("show");
		}
	})

	.on("click", ".header_menu_item_icon", function(e) {
		e.preventDefault();

		if ($(this).closest(".header_menu_item_sub").hasClass("show")) {
			$(this).closest(".header_menu_item_sub").removeClass("show");
		} else {
			$(this).closest(".header_menu_item_sub").addClass("show");
		}
	})

	.on("click", ".sidebar_item_head", function() {

		if ($(this).parent().hasClass("show")) {
			$(this).parent().removeClass("show");
		} else {
			$(this).parent().addClass("show");
		}
	});

	$(".main_products_owl").owlCarousel({
		nav: true,
		margin: 30,
		navText: ["<img src='img/i_carousel_arrow_left.png' />","<img src='img/i_carousel_arrow_right.png' />"],
		responsive:{
			0: {
				items: 1
			},
			476:{
				items: 2
			},
			768:{
				items: 3
			},
			992:{
				items: 4
			}
		}
	});

	$(".gallery_thrumbs_item").on("click", function() {
		var index = $(this).index();

		$(".gallery_thrumbs_item").removeClass("active");
		$(this).addClass("active");

		$(".gallery_item").removeClass("active");
		$(".gallery_item:eq(" + index + ")").addClass("active");
	});

	$(document).on('beforeClose.fb', function( e, instance, slide ) {
		var index = instance.currIndex;

		$(".gallery_thrumbs_item").removeClass("active");
		$(".gallery_thrumbs_item:eq(" + index + ")").addClass("active");

		$(".gallery_item").removeClass("active");
		$(".gallery_item:eq(" + index + ")").addClass("active");
	});

});