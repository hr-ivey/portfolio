 // portfolio
 $('.gallery ul li a').click(function() {
    var itemID = $(this).attr('href');
    $('.gallery ul').addClass('item_open');
    $(itemID).addClass('item_open');
    return false;
});
$('.close').click(function() {
    $('.port, .gallery ul').removeClass('item_open');
    return false;
});

$(".gallery ul li a").click(function() {
    $('html, body').animate({
        scrollTop: parseInt($("#top").offset().top)
    }, 400);
});

// sticky nav
window.onscroll = function() {myFunction()};
var navbar = document.getElementById("stickynav");
var sticky = navbar.offsetTop;
function myFunction() {
  if ($(window).scrollTop() >= 900) {
    navbar.classList.add("sticky")
    $('#stickynav').fadeIn();
    $('#logo').fadeIn();
  } else {
    navbar.classList.remove("sticky");
    $('#logo').fadeOut();
  }
} 