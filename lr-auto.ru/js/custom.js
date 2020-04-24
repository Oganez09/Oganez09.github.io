$(document).ready(function() {

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
	
});