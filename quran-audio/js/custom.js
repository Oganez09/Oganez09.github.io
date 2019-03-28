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

	$(document).on("click", ".checkbox_input", function() {
		if ( $(".checkbox_input").is(":checked") ) {
			$("#download-select").addClass("show");
		} else {
			$("#download-select").removeClass("show");
		}
	})

	// $(".chp__item__download").on("click", function(e) {
	// 	e.stopPropagation();
	// });
	


})