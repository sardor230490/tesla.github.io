$(function(){
 $('.slider').slick({
  arrows:false, 
  fade:true, 
  autoplay:3000,
  dots:true, 
 });
 $('.header__btn').on('click', function() {
   $('.menu').addClass('active');  
 })
 $('.menu__close').on('click', function() {
   $('.menu').removeClass('active');  
 })
});