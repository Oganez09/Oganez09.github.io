$(document).ready(function () {
  $(document)
    .on('click', '.urm_card_head', function () {
      $(this).next().slideToggle(300).parent().toggleClass('show');
    })
    .on('click', '.urm_card_toggle_all', function () {
      $(this).parent().find('.urm_card_body').slideToggle(300);
    });
});

function init () {
  var multiRoute = new ymaps.multiRouter.MultiRoute({
      referencePoints: [
          [62.998683, 76.949073],
          [65.568653, 72.372517],
      ],
      params: {
          results: 1
      }
  }, {
      boundsAutoApply: true
  });

  var myMap = new ymaps.Map('map', {
      center: [55.750625, 37.626],
      zoom: 7,
      controls: []
  });

  // Добавляем мультимаршрут на карту.
  myMap.geoObjects.add(multiRoute);
}

ymaps.ready(init);
