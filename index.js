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


// hover
$(".hover-item-title").hover(function() {
  //change image due to the hover item
  var imgUrl = $(this).data("src");
  $("#sticky-image").attr("src", imgUrl);
  //image animation - hover:fade in
  $("#sticky-image").stop();
  $("#sticky-image").fadeIn(1000);
  //image animation - hover:zoom in
  $(".hover-base-sticky").css("transform","scale("+ 1.05 +")")
}, function() {
  $("#sticky-image").stop();
  //image animation - hoverout:zoom out
  $(".hover-base-sticky").css("transform","scale("+ 1 +")");
  //image animation - hoverout:fade out
  $("#sticky-image").fadeOut(1000);
})
//hover-item mobile responsive
