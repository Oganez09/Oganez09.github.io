$(document).ready(function () {
  $(document)
    .on('click', '.urm_card_head', function () {
      // $(this).next().slideToggle(300).parent().toggleClass('show');
      if ($(this).parent().hasClass('show')) {
        $(this).next().slideUp(300).parent().removeClass('show');
      } else {
        $(this).next().slideDown(300).parent().addClass('show');
      }
    })
    .on('click', '.urm_card_toggle_all', function () {
      // $(this).toggleClass('show_all');
      // $('.urm_card').find('.urm_card_body').slideToggle(300);
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
  const a = [62.998683, 76.949073];
  const b = [65.568653, 72.372517];

  const multiRoute = new ymaps.multiRouter.MultiRoute({
      referencePoints: [ a, b ],
      params: {
          results: 1
      }
  }, {
      boundsAutoApply: true
  });

  const myMap = new ymaps.Map('map', {
      center: [64, 74],
      zoom: 7,
      controls: []
  });

  // Добавляем мультимаршрут на карту.
  myMap.geoObjects.add(multiRoute);
}

ymaps.ready(init);
