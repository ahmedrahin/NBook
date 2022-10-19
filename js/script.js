

$('.nav-1').click(function(){
  $(this).addClass('active')
  $('.nav-2').removeClass('active')
  $('.nav-3').removeClass('active')
  $('.nav-4').removeClass('active')
  $('.nav-5').removeClass('active')
});
$('.nav-2').click(function(){
  $(this).addClass('active')
  $('.nav-1').removeClass('active')
  $('.nav-3').removeClass('active')
  $('.nav-4').removeClass('active')
  $('.nav-5').removeClass('active')
});
$('.nav-3').click(function(){
  $(this).addClass('active')
  $('.nav-1').removeClass('active')
  $('.nav-2').removeClass('active')
  $('.nav-4').removeClass('active')
  $('.nav-5').removeClass('active')
});
$('.nav-4').click(function(){
  $(this).addClass('active')
  $('.nav-1').removeClass('active')
  $('.nav-2').removeClass('active')
  $('.nav-3').removeClass('active')
  $('.nav-5').removeClass('active')
});
$('.nav-5').click(function(){
  $(this).addClass('active')
  $('.nav-1').removeClass('active')
  $('.nav-2').removeClass('active')
  $('.nav-3').removeClass('active')
  $('.nav-4').removeClass('active')
});


$(".owl-carousel").owlCarousel({
    center: true,
    items: 1,
    loop: true,
    nav: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 3,
      },
      600: {
        items: 4,
      },
      1000: {
        items: 4,
      },
    },
  });
  
