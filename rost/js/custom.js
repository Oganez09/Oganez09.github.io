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

	$(".form_modal_btn").click(function() {	
		var name = $('#name_modal').val();
		var phone = $('#phone_modal').val();
		var email = $('#email_modal').val();

		if (name != "" && phone != "") {

			$.post(
				"../ajax.php",
				{
					name: name,
					phone: phone,
					email: email
				},
				function() {
					$("#form_modal").html("<div class='h2'>Спасибо за заказ!</div>")
				}
			)
		
		}
	});

	$(".form_static_btn").click(function() {
				
		var name = $('#name_static').val();
		var phone = $('#phone_static').val();
		var email = $('#email_static').val();

		if (name != "" && phone != "") {

			$.post(
				"../ajax.php",
				{
					name: name,
					phone: phone,
					email: email
				},
				function() {
					$("#us_modal_check").addClass("us_visible");
				}
			)

		}
	});
	
	$(".form_call_btn").click(function() {
		var name = $('#name_call').val();
		var phone = $('#phone_call').val();

		if (name != "" && phone != "") {

			$.post(
				"../ajax.php",
				{
					name: name,
					phone: phone,
					email: "-"
				},
				function() {
					$("#us_modal_check").addClass("us_visible");
				}
			)

		}
	});
	
});