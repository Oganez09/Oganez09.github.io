$(document).ready(function(){

	$('.owl-testimonials').owlCarousel({
		items: 1,
		smartSpeed: 500
	});

	$(window)
	.on('load', function() {

		setTimeout(function() {
			$('.preloader').fadeOut('slow');
		}, 150);

		$('.menu_list_item_link').mPageScroll2id();

	})
	.scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('#menu').addClass('down');
		} else {
			$('#menu').removeClass('down');
		}
	});

	$(document)
	.on('click', '#menu_btn', function() {
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
			$(this).next().removeClass('show');
		} else {
			$(this).addClass('active');
			$(this).next().addClass('show');
		}
	})
	.on('click', '.menu_list_item_link', function() {
		if ($('#menu_btn').hasClass('active')) {
			$('#menu_btn').removeClass('active');
			$('#menu_btn').next().removeClass('show');
		}
	})

	$('.backstretch').backstretch([
		"img/background/1.jpg",
		"img/background/2.jpg",
		"img/background/3.jpg"
	], {
		duration: 3000,
		fade: 750
	});

});

function initMap() {

	var map = new google.maps.Map(document.getElementById('map'), {
		center: {
			lat: 47.285339,
			lng: 9.644274
		},
		zoom: 15,
		styles: [{"elementType":"geometry","stylers":[{"color":"#272e32"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#272e32"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#403e3e"}]},{"featureType":"administrative.locality","elementType":"labels.text.fill","stylers":[{"color":"#909090"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#dbfb7e"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#414242"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#909090"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#bdd96b"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"color":"#849457"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#eefbc8"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#364605"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ababab"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#ebfdb7"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#777777"}]},{"featureType":"transit.station","elementType":"labels.text.fill","stylers":[{"color":"#6b6b6b"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#414d54"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#6b6b6b"}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"color":"#272727"}]}]
	});

	new google.maps.Marker({
		position: {
			lat: 47.285339,
			lng: 9.644274
		},
		map: map,
		title: 'Friseur',
		icon: 'img/blank.png'
	});

}
