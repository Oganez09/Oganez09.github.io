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

function init () {
  const startPoint = [62.998683, 76.949073];
  const endPoint = [65.568653, 72.372517];

  const multiRoute = new ymaps.multiRouter.MultiRoute({
    referencePoints: [ startPoint, endPoint ],
    params: {
      results: 1
    }
  }, {
    wayPointStartIconLayout: "default#image",
    wayPointStartIconImageHref: "img/startPoint.png",
    wayPointStartIconImageSize: [16, 20],
    wayPointStartIconImageOffset: [-8, -10],
    wayPointFinishIconLayout: "default#image",
    wayPointFinishIconImageHref: "img/endPoint.png",
    wayPointFinishIconImageSize: [16, 20],
    wayPointFinishIconImageOffset: [-8, -10],

    routeActiveStrokeColor: "#0a39c2",

    boundsAutoApply: true,
  });

  const myMap = new ymaps.Map('map', {
    center: [64, 74],
    zoom: 7,
    controls: []
  });

  myMap.geoObjects.add(multiRoute);
}

ymaps.ready(init);
