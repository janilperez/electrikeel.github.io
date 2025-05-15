$(document).ready(function () {

  $('.hamburger').on('click', function (e) {
    e.preventDefault();
    $('#myNav').addClass('open');
    $('body').css('overflow', 'hidden'); 
  });

  $('.closebtn').on('click', function () {
    $('#myNav').removeClass('open');
    $('body').css('overflow', 'auto');
  });

  const isArtistsPage = window.location.pathname.includes('artists.html');

  if (isArtistsPage) {
  const navMainLink = document.getElementById('nav-main-link');
  navMainLink.href = 'index.html';
  navMainLink.innerHTML = '<h3>HOME</h3>';
  }

$(".scrollToTop").on("click",function(){
  var rootElement = document.documentElement;
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  }) 
});


$('.gallery').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  dots: true,
  nextArrow: '<button type="button" class="slick-next"><img src="images/next.png" alt="Next"></button>',
  prevArrow: '<button type="button" class="slick-prev"><img src="images/prev.png" alt="Previous"></button>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});

});