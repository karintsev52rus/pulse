$(document).ready(function(){
  $('.slider__inner').slick({
      autoplay: true,
      prevArrow: '<button type="button" class="slick-prev"><img src="../img/img-chevron-left.png"></button>',
      nextArrow:'<button type="button" class="slick-next"><img src="../img/img-chevron-right.png"></button>',
      dots: false,
      responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
            
          }
      ]}
  )})