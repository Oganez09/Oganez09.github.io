$(document).ready(function () {
  $(document)
    .on('click', '.urm_card_head', function () {
      if ($(this).parent().hasClass('show')) {
        $(this).next().slideUp(300).parent().removeClass('show');
      } else {
        $(this).next().slideDown(300).parent().addClass('show');
      }
    })
    .on('click', '.urm_card_toggle_all', function () {
      if ($(this).hasClass('show_all')) {
        $(this).text("Свернуть все");
        $(this).removeClass('show_all');
        $('.urm_card').addClass('show');
        $('.urm_card').find('.urm_card_body').slideDown(300);
      } else {
        $(this).text("Развернуть все");
        $(this).addClass('show_all');
        $('.urm_card').removeClass('show');
        $('.urm_card').find('.urm_card_body').slideUp(300);
      }
    });
  
});

// button Scroll Up/Down
const $btn = $('.urm_up_btn');
let positionScroll = window.scrollY;
let scrollDown = 0;
if (positionScroll > 0) {
  showUpBtn();
}

$btn.on('click', function() {
  positionScroll = window.scrollY;
  if (positionScroll > 0 && positionScroll >= scrollDown) {
    window.scrollTo({top: 0, behavior: 'smooth'});
    scrollDown = window.scrollY;
    $btn.addClass('down');
  } else {
    window.scrollTo({top: scrollDown, behavior: 'smooth'});
    $btn.removeClass('down');
  }
});

$(window).scroll(function() {
  positionScroll = window.scrollY;
  if (scrollDown === 0 && positionScroll < 1) {
    hideUpBtn();
  } else {
    showUpBtn();
    if (positionScroll >= scrollDown) {
      $btn.removeClass('down');
    }
    console.log('positionScroll: ', positionScroll);
    console.log('scrollDown: ', scrollDown);
  }
});

function showUpBtn() {
  $btn.css('display', 'block');
}
function hideUpBtn() {
  $btn.css('display', 'none');
}



// Yandex map
// function init () {
//   const startPoint = [62.998683, 76.949073];
//   const endPoint = [65.568653, 72.372517];

//   const multiRoute = new ymaps.multiRouter.MultiRoute({
//     referencePoints: [ startPoint, endPoint ],
//     params: {
//       results: 1
//     }
//   }, {
//     wayPointStartIconLayout: "default#image",
//     wayPointStartIconImageHref: "img/startPoint.png",
//     wayPointStartIconImageSize: [16, 20],
//     wayPointStartIconImageOffset: [-8, -10],
//     wayPointFinishIconLayout: "default#image",
//     wayPointFinishIconImageHref: "img/endPoint.png",
//     wayPointFinishIconImageSize: [16, 20],
//     wayPointFinishIconImageOffset: [-8, -10],

//     routeActiveStrokeColor: "#0a39c2",

//     boundsAutoApply: true,
//   });

//   const myMap = new ymaps.Map('map', {
//     center: [64, 74],
//     zoom: 7,
//     controls: [],
//   }, {
//     suppressMapOpenBlock: true
//   });

//   myMap.geoObjects.add(multiRoute);
// }

// ymaps.ready(init);


// Mapbox
// TO MAKE THE MAP APPEAR YOU MUST
// ADD YOUR ACCESS TOKEN FROM
// https://account.mapbox.com
mapboxgl.accessToken = 'pk.eyJ1IjoiYW5kcmV5bWFvIiwiYSI6ImNscHloc3R6NzE2eTQyc29oOWhxbXl5ZmMifQ.WyqmNhYzdWi71xA6sn2AkA';

const startPoint = [62.998683, 76.949073];
const endPoint = [65.568653, 72.372517];

const map = new mapboxgl.Map({
	container: 'map', // container ID
	style: 'mapbox://styles/mapbox/streets-v12', // style URL
	center: startPoint, // starting position [lng, lat]
	zoom: 12, // starting zoom
});
