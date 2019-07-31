$(document).ready(function() {

	$(document)
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
	})

	.on("click", "[data-toggle = us_tabs]", function(e) {
		e.preventDefault();

		var target = $(this).attr("href");

		$(this).closest(".us_tabs_nav").children().removeClass("active");
		$(this).parent().addClass("active");

		$(this).closest(".us_tabs").next().children().removeClass("active");
		$(target).addClass("active");
	})

	.on("click", "#menu_btn", function() {
		if ($(this).closest(".header_box").hasClass("show")) {
			$(this).closest(".header_box").removeClass("show");
		} else {
			$(this).closest(".header_box").addClass("show");
		}
	})

	.on("click", ".header_menu_item_icon", function() {
		if ($(this).closest(".header_menu_item_sub").hasClass("show")) {
			$(this).closest(".header_menu_item_sub").removeClass("show");
		} else {
			$(this).closest(".header_menu_item_sub").addClass("show");
		}
	});

	$(window).on("scroll load", function () {
		if ($(this).scrollTop() > 1) {
			$(".home .header").addClass("header_fixed");
		} else {
			$(".home .header").removeClass("header_fixed");
		}
	});

	$('.services_nav .us_tabs_nav_item_link').on('click', function(e){
		var target = $(this).attr('href');
		$('html,body').stop().animate({ scrollTop: $(target).offset().top - 100 }, 777);
		e.preventDefault();
		return false;
	});

});