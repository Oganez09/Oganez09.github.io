$(document).ready(function() {
	
	$(".slideshow").owlCarousel({
		items: 1,
		loop: true,
		autoplay: true,
		autoplayHoverPause: true,
		smartSpeed: 500
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