$(function(){
    const burger = document.querySelector('.menu__burger');
    burger.addEventListener('click', () => {
        burger.classList.toggle('burger_active');
    });
}());
$(function(){
    $('.photo__slider').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="images/prevarrow.svg" alt="Arrow-left"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/nextarrow.svg" alt="Arrow-right"></button>',
        dots: false,
        autoplay: false,
        autoplaySpeed: 2000,
        responsive: [{
            breakpoint: 740,
            settings: {
                arrows: false,
                dots: true,
                autoplay: true
            }
        }]
    });
    $('.menu__burger').on('click', function(){
        $('.menu__list').slideToggle(700); 
    });
});
$(document).ready(function() {
    //прикрепляем клик по заголовкам acc-head
      $('.footer__accordeon-item .footer__accordeon-item-title').on('click', f_acc);
  });
  
  function f_acc(){
  //скрываем все кроме того, что должны открыть
    $('.footer__accordeon-item .footer__accordeon-item-list').not($(this).next()).slideUp(1000);
  // открываем или скрываем блок под заголовоком, по которому кликнули
      $(this).next().slideToggle(1000);
  }