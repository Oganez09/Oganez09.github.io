$(document).ready(function(){

	$(".owl-carousel.owl-slide-big").owlCarousel({
		margin: 30,
		dots: false,
		nav: true,
		center: true,
		loop: true,
		navText: ["<img src='img/i_ar_left.png' class='owl_img'>", "<img src='img/i_ar_right.png' class='owl_img'>"],
		responsive: {
			0: {
				items: 1
			},
			450: {
				items: 2
			},
			650: {
				items: 3
			}
		}
	});

	$(".owl-carousel.owl-slide-small").owlCarousel({
		margin: 10,
		dots: false,
		center: true,
		loop: true,
		responsive: {
			0: {
				items: 3
			},
			450: {
				items: 6
			},
			650: {
				items: 10
			}
		}
	});

	$(".owl-carousel.owl-reviews").owlCarousel({
		items: 1,
		loop: false,
		margin: 10,
		nav: true,
		dots: false,
		autoHeight: true,
		navText: ["<img src='img/owl_ar_left.png' class='owl_img'>", "<img src='img/owl_ar_right.png' class='owl_img'>"]
	})
	.on('changed.owl.carousel', function(event) {
		var item = event.item.index;
		$(".dots li").removeClass("active");
		$(".dots li:eq(" + item + ")").addClass("active");
	})

	$(".dots li").click(function() {

		var index = $(this).index();

		$(".dots li").removeClass("active");
		$(this).addClass("active");

		$(".owl-carousel").trigger("to.owl.carousel", [index, 500, true]);
	});

	$(document).on("click", "[data-toggle = us-tab]", function(e) {
		e.preventDefault();
		
		var target = $(this).attr("href");
		
		$(this).closest(".us_tab_nav").children().removeClass("active");
		$(this).parent().addClass("active");

		$(target).parent().children(".us_tab_pane").removeClass("active");
		$(target).addClass("active show");
		setTimeout (function() {
			$(target).removeClass("show");
		}, 1500);
	})

	$("a.page_scroll").mPageScroll2id();

	$(document).on("click", "#btn_menu", function() {
		// alert("op")
		$("#canvas_menu").toggleClass("open");
	})
	.on("click", "#canvas_menu, #btn_menu", function(e) {
		e.stopPropagation();
	})
	.on("click", "body, #btn_close_menu", function() {
		// alert("cl")
		$("#canvas_menu").removeClass("open");
	});

	$(document).on("click", "#show_all", function(e) {
		e.preventDefault();
		$(this).parent().prev().addClass("show");
	})
});