$(function() {
	
	$(document)// tabs
	.on("click", "[data-toggle = us_tab]", function(e) {
		e.preventDefault();
		
		var target = $(this).attr("href");
		
		$("[data-toggle = us_tab]").parent().removeClass("active");
		$(this).parent().addClass("active");
		
		$(".us_tab_pane").removeClass("active");
		$(target).addClass("active");
	}) // modal
	.on("click", "[data-toggle = us_modal]", function(e) {
		
		e.preventDefault();

		if ($(this).is("a")) {
			var target = $(this).attr("href");
		} else if($(this).is("button")) {
			var target = $(this).attr("data-target");
		}
		
		$(target).addClass("us_visible");
		
	})
	.on("click", "[data-dismiss = us_modal], .us_modal", function() {
		$(".us_modal").removeClass("us_visible");
	})
	.on("click", ".us_modal_box", function(e) {
		e.stopPropagation();
	}) // all products
	.on("click", "#show_all_product", function(e) {
		e.preventDefault();
		$(this).parent().prev().children("#products_wrap").addClass("show_all");
	});


	$(".owl-carousel").owlCarousel({
		items: 1,
		loop:true,
		nav:true,
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		navText: ["<img src='img/i_left.svg'>","<img src='img/i_right.svg'>"],
	});

	$(".footer_menu a, .logo a").mPageScroll2id();

});