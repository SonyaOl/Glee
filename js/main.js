$(function () {

    
  $('.menu__btn').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
  });

  $('.footer-top__title').on('click', function () {
    $(this).next().slideToggle();
    $(this).toggleClass('active');
  });

  $('.shop__filter-btn').on('click', function () {
    $('.shop__filters').slideToggle();
  });



    
    $('.top-slider__inner').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpead: 2000
    });
});