$(function() {

	$(document).on("click", "[data-toggle = us_modal]", function(e) {
		
		e.preventDefault();

		var target = $(this).attr("href");
		$(target).addClass("open");
		
	})
	.on("click", "[data-dismiss = us_modal], .us_modal", function() {
		$(".us_modal").removeClass("open");
	})
	.on("click", ".us_modal_box", function(e) {
		e.stopPropagation();
	});

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
					dots: true,
					slidesToShow: 1
				}
			}
		]
	});
	$('.slider_main').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.slider_nav',
		infinite: false,
		swipe: false,		
		responsive: [
			{
				breakpoint: 576,
				settings: {
					dots: true,
					swipe: true
				}
			}
		]
	});
	$('.slider_nav').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.slider_main',
		dots: false,
		nav: true,
		focusOnSelect: true,
		vertical: true,
		verticalSwiping: true,
		centerPadding: '0',
		infinite: false,
		swipeToSlide: true,
		centerMode: true,
		prevArrow: '<button class="slick_prev"><i class="fas fa-angle-up"></i></button>',
		nextArrow: '<button class="slick_next"><i class="fas fa-angle-down"></i></button>',
	});
	
	$('[data-fancybox="gallery"]').fancybox({
		buttons: [
			//"zoom",
			//"share",
			//"slideShow",
			//"fullScreen",
			//"download",
			"thumbs",
			"close"
		]
	});

	$(document)
	.on("click", "#open_menu", function() {
		var target = $(this).attr("data-target");
		if($(target).hasClass("open")) {
			$(target).removeClass("open");
		} else {
			$(target).addClass("open");
			$("body").append("<div id='offcanvas_overlay' onclick=''></div>");
		}
	})
	.on("click", "#offcanvas_overlay", function() {
		$("#offcanvas").removeClass("open");
		$("#offcanvas_overlay").remove();
	});

	$(document).on("click", "[data-toggle = us-tab]", function(e) {
		e.preventDefault();
		
		var target = $(this).attr("href");

		$(".us_tab_nav li").removeClass("active");
		$(this).parent().addClass("active");

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
	});
	$(document).on("click", ".filter_title", function(){
		$(this).next().slideToggle(300);
	});
	$(document).on("click", ".sort_view_row", function(e){
		e.preventDefault();
		$(".sort_view li").removeClass("active");
		$(this).addClass("active");
		$(".flex_product_container").addClass("item_row");
	});
	$(document).on("click", ".sort_view_col", function(e){
		e.preventDefault();
		$(".sort_view li").removeClass("active");
		$(this).addClass("active");
		$(".flex_product_container").removeClass("item_row");
	});

	
	$('.minus').click(function () {
		var $input = $(this).parent().find('input');
		var count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();
		return false;
	});
	$('.plus').click(function () {
		var $input = $(this).parent().find('input');
		$input.val(parseInt($input.val()) + 1);
		$input.change();
		return false;
	});

});

$(window).on('load', function() {
	
	setTimeout(function() {
		$('.preloader').fadeOut('slow');
		$('body').css('overflowY', 'auto');
	}, 150);

});
