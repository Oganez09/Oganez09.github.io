$(document).ready(function() {

	$(document).on("click", ".checkbox_input", function() {
		if ( $(".checkbox_input").is(":checked") ) {
			$("#download-select").addClass("show");
		} else {
			$("#download-select").removeClass("show");
		}
	});

	function getCoords(elem) { // кроме IE8-
		var box = elem.getBoundingClientRect();
	
		return box.top + pageYOffset;
	}

	var searchSurah = document.querySelector('#search-surah');
	var surahItems = document.querySelectorAll('.chp__item');

	searchSurah.oninput = function() {
    surahItems.forEach(function(item) {
			var surahNum = item.getAttribute('surah-num');
			if (surahNum === searchSurah.value) {
				$("html, body").animate({
					scrollTop: getCoords(item) - 35
				}, 600);
			}
		})
	};
	
	var coordsSearch = getCoords(searchSurah);

	$(window).on("scroll", function() {
		if ($(window).scrollTop() >= coordsSearch) {
			searchSurah.classList.add('fixed');
		} else {
			searchSurah.classList.remove('fixed');
		}
	});	

})