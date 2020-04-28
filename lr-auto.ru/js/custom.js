$(document).ready(function() {

	$(document)
	.on("click", "[data-toggle = us-tab]", function(e) {
		e.preventDefault();

		var target = $(this).attr("href");

		$(".us_tab_nav").removeClass("us_active");
		$(this).addClass("us_active");
		$(".us_tab_pane").removeClass("us_active");
		$(target).addClass("us_active");
	})
	.on("click", ".catalog_sidebar_filter_item_head", function(){
		if ( $(this).parent().hasClass("us_active") ) {
			$(this).next().slideUp(300);
			$(this).parent().removeClass("us_active");
		} else {
			$(this).next().slideDown(300);
			$(this).parent().addClass("us_active");
		}
	})
	.on("click", "#us-mobile-search", function() {
		$(this).parent().next().toggleClass("us_show");
	})
	

	$(".brand_block_owl").owlCarousel({
		margin: 10,
		dots: false,
		nav: true,
		loop: true,
		navText: ["<i class='lr-autoru-back'></i>","<i class='lr-autoru-next'></i>"],
		responsive: {
			0: {
				items: 3
			},
			768:{
				items: 5
			},
			992:{
				items: 6
			},
			1200:{
				items: 7
			}
		}
	});
	
	$(".banner_product_owl").owlCarousel({
		items: 1,
		margin: 10,
		nav: true,
		loop: true,
		navText: ["<i class='lr-autoru-back'></i>","<i class='lr-autoru-next'></i>"],
	});
	
	$(".our_certificates_owl").owlCarousel({
		margin: 20,
		dots: false,
		nav: true,
		loop: true,
		navText: ["<i class='lr-autoru-back'></i>","<i class='lr-autoru-next'></i>"],
		responsive: {
			0: {
				items: 1
			},
			576:{
				items: 2
			},
			768:{
				items: 3
			},
			992:{
				items: 4
			},
			1200:{
				items: 5
			}
		}
	});
	
	$(".catalog_sidebar_certificates_owl").owlCarousel({
		items: 1,
		margin: 10,
		dots: false,
		nav: true,
		loop: true,
		navText: ["<i class='lr-autoru-back'></i>","<i class='lr-autoru-next'></i>"]
	});
	
	$(".latest_reviews_owl").owlCarousel({
		margin: 15,
		dots: false,
		loop: true,
		navText: ["<i class='lr-autoru-back'></i>","<i class='lr-autoru-next'></i>"],
		responsive: {
			0: {
				items: 1,
				nav: true
			},
			576:{
				items: 2,
				nav: false
			},
			768:{
				items: 3
			},
			992:{
				items: 4
			}
		}
	});
	
	$(".product_slider_owl").owlCarousel({
		margin: 15,
		dots: false,
		nav: true,
		loop: true,
		navText: ["<i class='lr-autoru-back'></i>","<i class='lr-autoru-next'></i>"],
		responsive: {
			0: {
				items: 1
			},
			576:{
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
	
	$(".catalog_product_slider_owl").owlCarousel({
		margin: 15,
		dots: false,
		nav: true,
		loop: true,
		navText: ["<i class='lr-autoru-back'></i>","<i class='lr-autoru-next'></i>"],
		responsive: {
			0: {
				items: 1
			},
			576:{
				items: 2
			},
			768:{
				items: 3
			}
		}
	});
	
	$(".related_products_owl").owlCarousel({
		margin: 15,
		dots: false,
		nav: true,
		loop: true,
		navText: ["<i class='lr-autoru-back'></i>","<i class='lr-autoru-next'></i>"],
		responsive: {
			0: {
				items: 1
			},
			576:{
				items: 2
			},
			992:{
				items: 3
			}
		}
	});
	
	$(".product_detail_gallery_main").owlCarousel({
		items: 1,
		margin: 10,
		dots: false,
		nav: true,
		loop: true,
		navText: ["<i class='lr-autoru-back'></i>","<i class='lr-autoru-next'></i>"]
	});

	$(".product_detail_gallery_thrumbs_item").on("click", function() {
		var index = $(this).index();

		$(".product_detail_gallery_main").trigger("to.owl.carousel", [index, 300, true]);
	});



	var minLength = +$(".us_slider_range_val_min").attr("value");
	var maxLength = +$(".us_slider_range_val_max").attr("value");

	$("#us-slider-range").slider({
		range: true,
		min: minLength,
		max: maxLength,
		step: 1,
		values: [ minLength, maxLength ],
		slide: function( event, ui ) {
			$(".us_slider_range_val_min").text(ui.values[0]);
			$(".us_slider_range_val_max").text(ui.values[1]);
		}
	});
	$(".us_slider_range_val_min").text($("#us-slider-range").slider("values", 0));
	$(".us_slider_range_val_max").text($("#us-slider-range").slider("values", 1));

});