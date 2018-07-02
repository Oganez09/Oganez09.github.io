$(document).ready(function(){

	$(".owl-carousel").owlCarousel({
		items:1,
		loop:false,
		margin:10,
		nav:true,
		autoHeight:true,
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
		
		$("[data-toggle = us-tab]").parent().removeClass("active");
		$(this).parent().addClass("active");

		$(".us_tab_pane").removeClass("active");
		$(target).addClass("active");
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