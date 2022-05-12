//scroll down navbar animation
$(function(){
  var scroll = $(document).scrollTop();
  var navHeight = $(".navbar-container").outerHeight();

  $(window).scroll(function(){
    var scrolled = $(document).scrollTop();

    if (scrolled > navHeight) {
      $(".navbar-container").addClass("animate");
    } else{
      $(".navbar-container").removeClass("animate");
    }

    if (scrolled > scroll){
      $(".navbar-container").removeClass("sticky");
    } else{
      $(".navbar-container").addClass("sticky");
    }

    scroll = $(document).scrollTop();
  });
})

//project page: background section
