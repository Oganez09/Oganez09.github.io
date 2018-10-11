$(function() {
	
	$(document)// tabs
	.on("click", "[data-toggle = us_tab]", function(e) {
		e.preventDefault();
		
		var target = $(this).attr("href");
		
		$("[data-toggle = us_tab]").parent().removeClass("active");
		$(this).parent().addClass("active");
		
		$(".us_tab_pane").removeClass("active");
		$(target).addClass("active");
	});

});