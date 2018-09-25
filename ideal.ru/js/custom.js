$(function() {

	// $('.owl-carousel').owlCarousel({
	// 	margin:0,
	// 	dots:false,
	// 	nav:true,
	// 	responsive:{
	// 		0:{
	// 			items:1
	// 		},
	// 		600:{
	// 			items:3
	// 		},
	// 		1000:{
	// 			items:4
	// 		}
	// 	}
	// });

	$('.slick_product').slick({
		infinite: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '<button class="slick_prev"><i class="fas fa-angle-left"></i></button>',
		nextArrow: '<button class="slick_next"><i class="fas fa-angle-right"></i></button>',
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1
				}
			},
			{
				breakpoint: 576,
				settings: {
					arrows: false,
					slidesToShow: 1
				}
			}
		]
	});

	$(document)
	.on("click", "#open_menu", function() {
		var target = $(this).attr("data-target");
		if($(target).hasClass("open")) {
			$(target).removeClass("open");
		} else {
			$(target).addClass("open");
			$("body").append("<div id='offcanvas_overlay'></div>");
		}
	})
	.on("click", "#offcanvas_overlay", function() {
		$("#offcanvas").removeClass("open");
		$("#offcanvas_overlay").remove();
	});

	$(document).on("click", "[data-toggle = us-tab]", function(e) {
		e.preventDefault();
		
		var target = $(this).attr("href");
		
		$(".us_tab_pane").removeClass("active");
		$(target).addClass("active");
	})

	$(window).on("load resize", windowSize);

	function windowSize() {
		if ($(window).width() > "991") {
			var menu = $("#open_menu").attr("data-target");
			$(menu).removeClass("open");
			$("#offcanvas_overlay").remove();
		}
	}

	$(document).on("click", "#open_cat_menu", function(){
		$("#cat_menu").slideToggle(300);
	})
});