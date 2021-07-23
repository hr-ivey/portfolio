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
 
 // Web Development examples.
 $('.web-gallery ul li a').click(function() {
    var itemID = $(this).attr('href');
    $('.web-gallery ul').addClass('item_open');
    $(itemID).addClass('item_open');
    return false;
});
$('.close').click(function() {
    $('.port, .web-gallery ul').removeClass('item_open');
    return false;
});

$(".web-gallery ul li a").click(function() {
    $('html, body').animate({
        scrollTop: parseInt($("#top").offset().top)
    }, 400);
});

// Digital art gallery settings.
$( ".img-wrapper" ).hover(
  function() {
    $(this).find(".img-overlay").animate({opacity: 1}, 600);
  }, function() {
    $(this).find(".img-overlay").animate({opacity: 0}, 600);
  }
);

// Lightbox
var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");

// Add overlay
$overlay.append($image);
$(".art-gallery").append($overlay);

// Hide overlay on default
$overlay.hide();

// When an image is clicked
$(".img-overlay").click(function(event) {
  // Prevents default behavior
  event.preventDefault();
  // Adds href attribute to variable
  var imageLocation = $(this).prev().attr("href");
  // Add the image src to $image
  $image.attr("src", imageLocation);
  // Fade in the overlay
  $overlay.fadeIn("slow");
});

// When the overlay is clicked
$overlay.click(function() {
  // Fade out the overlay
  $(this).fadeOut("slow");
});