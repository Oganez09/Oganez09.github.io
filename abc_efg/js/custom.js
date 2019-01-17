
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
