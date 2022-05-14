$(document).ready(function () {
  //scroll down navbar animation
  $(function () {
    var scroll = $(document).scrollTop();
    var navHeight = $(".navbar-container").outerHeight();

    $(window).scroll(function () {
      var scrolled = $(document).scrollTop();

      if (scrolled > navHeight) {
        $(".navbar-container").addClass("animate");
      } else {
        $(".navbar-container").removeClass("animate");
      }

      if (scrolled > scroll) {
        $(".navbar-container").removeClass("sticky");
      } else {
        $(".navbar-container").addClass("sticky");
      }

      scroll = $(document).scrollTop();
    });
  });

  // hover

  //mouseenter&touch - image appear:
  $(".hover-item-title").on("touchstart mouseenter", function () {
    //change image due to the hover item
    var imgUrl = $(this).data("src");
    $("#sticky-image").attr("src", imgUrl);
    //image animation - fade in
    $("#sticky-image").stop(true, true);
    $("#sticky-image").fadeIn(1000);
    //image animation - zoom in
    $(".hover-base-sticky").css("transform", "scale(" + 1.05 + ")");
  });

  //mouseleave&touchend - image disappear:
  $(".hover-item-title").on("touchend mouseleave touchcancel", function () {
    //image animation - touchend:zoom out
    $(".hover-base-sticky").css("transform", "scale(" + 1 + ")");
    //image animation - touchend:fade out
    $("#sticky-image").fadeOut(1000);
  });
});
