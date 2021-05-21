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
      ]}),
      $('ul.catalog__tabs').on('click', 'li:not(.tab_active)', function() {
        $(this)
          .addClass('tab_active').siblings().removeClass('tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
        });

        $('.catalog-item__link').each(function(i){
          $(this).on('click', function(e){
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
          })
        });
        $('.catalog-item__link_back').each(function(i){
          $(this).on('click', function(e){
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
          })
        })
        
})
