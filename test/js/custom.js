
ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map('map', {
    center: [44.230223, 42.053787],
    zoom: 15,
    controls: ['zoomControl', 'typeSelector',  'fullscreenControl'],
    behaviors: ['default']
  });
  myMap.behaviors.disable('scrollZoom');
  myGeoObject = new ymaps.GeoObject({
    geometry: {
      type: "Point",
      coordinates: [44.230223, 42.053787]
    }
  });
  myMap.geoObjects.add(myGeoObject);
}


$(document).ready(function(){

  // галерея для gallery.html
  $('.zoom-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    closeOnContentClick: false,
    closeBtnInside: false,
    mainClass: 'mfp-with-zoom mfp-img-mobile',
    image: {
      verticalFit: true
    },
    gallery: {
      enabled: true
    },
    zoom: {
      enabled: true,
      duration: 300, // don't foget to change the duration also in CSS
      opener: function(element) {
        return element.find('img');
      }
    }
  });
  
  // для корректной работы плагина меню
  $('#offcanvas-menu').on('shown.bs.offcanvas', function (e) {
    $('body').addClass('canvas-slid');
  });
  
  // плавный переход по кнопке наверх
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $('.top-me').fadeIn();
    } else {
      $('.top-me').fadeOut();
    }
  });
  $('.top-me').click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, 600);
    return false;
  });
  
});