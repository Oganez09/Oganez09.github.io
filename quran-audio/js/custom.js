$(document).ready(function() {

	var widthDoc = document.documentElement.clientWidth;

	if (widthDoc <= 567) {
		$("#lang-select").click(function(e) {
			e.stopPropagation();
			$(this).parent().toggleClass("show");
		});
		$("body").click(function() {
			$("#lang-select").parent().removeClass("show");
		})
	}

})
