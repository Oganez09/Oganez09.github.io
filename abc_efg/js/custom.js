$(document).ready(function() {

	$(".num_icon").hover(function() {
		$(this).toggleClass("show");
	})

	$(".us_flex_name").on("click", function() {
		if ($(this).hasClass("us_flex_name_show")) {
			$(this).removeClass("us_flex_name_show").parent().children(".us_flex_col:not(.us_flex_name)").slideUp(300);
		}
		else {
			$(this).addClass("us_flex_name_show").parent().children(".us_flex_col").slideDown(300);
		}		
	})

});

$(document)
.on("click", "#open_menu", function() {
	var target = $(this).attr("data-target");
	if($(target).hasClass("open")) {
		$(target).removeClass("open");
	} else {
		$(target).addClass("open");
	}
})
.on("click", "#offcanvas_close", function() {
	$("#offcanvas").removeClass("open");
});

$(window).on("load resize", windowSize);

function windowSize() {
	if ($(window).width() > "991") {
		var menu = $("#open_menu").attr("data-target");
		$(menu).removeClass("open");
	}
}
