$(document).ready(function(){


   $('.slider__inner').slick({
      autoplay: false,
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
    });
      $('[data-modal="consultation"]').on('click', function(){
        $('.overlay').fadeIn();
        $('#consultation').fadeIn();

      });

      $('.modal__close').on('click', function(){
        $('.overlay , #consultation, #order, #thank').fadeOut();
      });

      $('.button_mini').each(function(i){
        $(this).on('click', function(){
          $('#order .modal__header .modal__subtitle').text($('.catalog-item__subtitle').eq(i).text());
          $('.overlay , #order').fadeIn();
        });
        
      }); 

      
      function validateForms (form){
        form.validate({
          rules: {
            name: {
                required: true,
                minlength: 2
            },
            phone: "required",
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            name: {
                required: "Пожалуйста, введите свое имя",
                minlength: jQuery.validator.format("Введите {0} символа!")
              },
            phone: "Пожалуйста, введите свой номер телефона",
            email: {
              required: "Пожалуйста, введите свою почту",
              email: "Неправильно введен адрес почты"
            }
        }
        });
      }
      
      validateForms($('#pageConsultation'));
      validateForms($('#modalConsultation'));
      validateForms($('#modalOrder'));

      $('input[name=phone]').mask("+7 (999) 999-99-99");


      $('form').submit(function(e)  {
        e.preventDefault();
        $.ajax({
          type: "POST",
          url: "../mailer.php",
          data: $(this).serialize()

        }).done(function  (){
          $(this).find('input').val('');
          $('#consultation, #order').fadeOut();
          $('.overlay, #thank').fadeIn();
          $('form').trigger('reset')
        });
        return false
      })
      $(window).scroll(function() {
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

    $("a[href^='#']").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });

    new WOW().init();
      
})

