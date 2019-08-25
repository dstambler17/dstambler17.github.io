//Navbar changes upon scroll
$(function () {
  $(document).scroll(function () {
    var $nav = $(".is-fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());

    var $head = $(".headingText");
    $head.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});


//Make navbar supercool for mobile
$(document).ready(function() {

  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function() {

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");

  });
});

const scroll = new SmoothScroll('.navbar a[href*="#"]', {
  speed: 500
});

const scrollTwo = new SmoothScroll('.section-is-top a[href*="#about"]', {
  speed: 500
});
