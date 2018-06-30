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




});