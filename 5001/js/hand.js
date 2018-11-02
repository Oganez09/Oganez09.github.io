
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

// Parallax background
function bgParallax() {
  if ($(".parallax").length) {
    $(".parallax").each(function() {
      var height = $(this).position().top;
      var resize = height - $(window).scrollTop();
      var parallaxSpeed = $(this).data("speed");
      var doParallax = -(resize / parallaxSpeed);
      var positionValue = doParallax + "px";
      var img = $(this).data("bg-image");

      $(this).css({
        backgroundImage: "url(" + img + ")",
        backgroundPosition: "50%" + positionValue,
      });

      if ( window.innerWidth < 768) {
        $(this).css({
          backgroundPosition: "50% 50%"
        });
      }
    });
  }
}

//ACTIVE CURRENT MENU WHILE SCROLLING
// function for active menuitem
function activeMenuItem($links) {
  var top = $(window).scrollTop(),
      windowHeight = $(window).height(),
      documentHeight = $(document).height(),
      cur_pos = top + 2,
      sections = $("section"),
      nav = $links,
      nav_height = nav.outerHeight(),
      home = nav.find("> li:first");
  // alert(top);


  sections.each(function() {
    var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();

    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find("> li > a").parent().removeClass("active");
      nav.find("a[href='#" + $(this).attr('id') + "']").parent().addClass("active");
    } else if (cur_pos === 2) {
      nav.find("> li > a").parent().removeClass("active");
      home.addClass("active");
    } else if($(window).scrollTop() + windowHeight > documentHeight - 400) {
      nav.find("> li > a").parent().removeClass("active");
    }
  });
}
// smooth-scrolling
function smoothScrolling($links, $topGap) {
  var links = $links;
  var topGap = $topGap;

  links.on("click", function() {
    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) +"]");
      if (target.length) {
        $("html, body").animate({
          scrollTop: target.offset().top - topGap
        }, 600);
        return false;
      }
    }
    return false;
  });
} 

$(window)
.on('scroll',function() {    
  var scroll = $(window).scrollTop(),
    mainHeader = $('#sticky-header'),
    mainHeaderHeight = mainHeader.innerHeight();
  
  // console.log(mainHeader.innerHeight());
  if (scroll > 0) {
    $("#sticky-header").addClass("sticky");
  }else{
    $("#sticky-header").removeClass("sticky");
  }
})
.on("scroll load", function() {
  bgParallax();
  // smoothScrolling($(".main-nav > li > a[href^='#']"), 70);
})
.on("scroll", function() {
  activeMenuItem($(".main-nav"));
  activeMenuItem($(".go-to-subs"));
})
.on('load', function() { // makes sure the whole site is loaded
  $('.loder-wrap').fadeOut(); // will first fade out the loading animation
  $('.loader').delay(150).fadeOut('slow'); // will fade out the white DIV that covers the website.
  $('body').delay(150).css({'overflow':'visible'})
});


$(document).ready(function(){

  $(".main-nav a, .navmenu a, .go-to-subs").mPageScroll2id({
    offset: 70
  });

  $('.navmenu a').click(function(){
    $('.offcanvas').offcanvas('hide');
  });

  // слайдшоу
  $('.slideshow-all').slick({
    dots: true,
    prevArrow: '<button class="prev"></button>',
    nextArrow: '<button class="next"></button>',
    adaptiveHeight: true
  });

  // галерея для index.html
  $(".owl-carousel.owl-four").owlCarousel({
    nav:false,
    margin:10,
    responsive:{
      0:{
        items:1
      },
      580:{
        items:2
      },
      992:{
        items:3
      },
      1200:{
        items:4
      }
    }
  });
  $(".owl-carousel.owl-three").owlCarousel({
    nav:false,
    margin:20,
    responsive:{
      0:{
        items:1
      },
      580:{
        items:2
      },
      992:{
        items:3
      }
    }
  });
  $(".owl-carousel.owl-one").owlCarousel({
    margin:0,
    items:1,
    smartSpeed:800,
    autoplay:true,
    autoplayTimeout:4000,
    loop:true
  });

  // галерея
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
    }, 900);
    return false;
  });

});