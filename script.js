// Lightbox
$(document).on('click', '[data-toggle="lightbox"]', function(event) {
  // event.preventDefault();
  $(this).ekkoLightbox();
}); 
 
 // Sticky nav settings.
window.onscroll = function() {myFunction()};
var navbar = document.getElementById("stickynav");
var sticky = navbar.offsetTop;
function myFunction() {
  if ($(window).scrollTop() >= 1000 & $(window).width() > 1024) {
    navbar.classList.add("sticky");
    $('#stickynav').fadeIn();
    $('#logo').fadeIn();
  } else {
    navbar.classList.remove("sticky");
    $('#logo').fadeOut();
  }
} 