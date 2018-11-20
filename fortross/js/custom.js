$(document).ready(function() {
	
	$(".slideshow").owlCarousel({
		items: 1,
		loop: true,
		autoplay: true,
		autoplayHoverPause: true,
		smartSpeed: 500
	});
	
	$(".product_gallery").owlCarousel({
		items: 1,
		smartSpeed: 500,
		responsive: {
			0: {
				dots: true
			},
			992: {
				dots: false
			}
		}
	});

	$('.product_thrumb').slick({
		infinite: false,
		slidesToShow: 2,
		slidesToScroll: 1,
		nav: true,
		vertical: true,
		verticalSwiping: true,
		prevArrow: '<button class="slick_prev"><i class="icon-up-big"></i></button>',
		nextArrow: '<button class="slick_next"><i class="icon-down-big"></i></button>'
	});

	$(".slick-slide").on("click", function() {
		var index = $(this).index();

		$(".product_gallery").trigger("to.owl.carousel", [index, 500, true]);
	});
	
	
	$("#open-menu").on("click", function() {
		var target = $(this).attr("data-target");
		if($(target).hasClass("show")) {
			$(target).slideUp(300);
		} else {
			$(target).slideToggle(300);
		}		
	})

	$(window).on("load resize", windowSize);

	function windowSize() {
		if ($(window).width() > "991") {
			var menu = $("#open-menu").attr("data-target");
			$(menu).removeClass("show").attr("style","");
		}
	}

	$(document).on("click", "[data-toggle = us-tab]", function(e) {
		e.preventDefault();

		var target = $(this).attr("href");

		$(".us_tab_list_item").removeClass("active");
		$(this).parent().addClass("active");

		$(".us_tab_content_pane").removeClass("active");
		$(target).addClass("active");
	});

});