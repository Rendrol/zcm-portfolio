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
  //image animation - hoverout:fade out
  $("#sticky-image").stop();
  $(".hover-base-sticky").css("transform","scale("+ 1 +")");
  $("#sticky-image").fadeOut(1000);
  //image animation - hoverout:zoom out
})
