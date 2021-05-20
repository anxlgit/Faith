$(function() {
  // $(document).ready shorthand
  $("section, img, p, h1, h2, h3, h4, span").fadeIn("slow"); });

$(document).ready(function() {
  /* Every time the window is scrolled ... */
  $(window).scroll(function() {
    /* Check the location of each desired element */
    $("section, img, p, h1, h2, h3, h4, span").each(function(i) {
      var bottom_of_object = $(this).position().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      /* If the object is completely visible in the window, fade it in */
      if (bottom_of_window > bottom_of_object - 200) {
        $(this).animate({ opacity: "1" }, 1000),
        $(this).find('.lefttitle').animate({left:"0px"}, 1500);
        $(this).find('.righttitle').animate({right:"0px"}, 1500);
      }}); }); });
