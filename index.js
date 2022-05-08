// hover
$(".hover-item-title").hover(function() {
  //change image due to the hover item
  var imgUrl = $(this).data("src");
  $("#sticky-image").attr("src", imgUrl);
  //image animation - fade in
  $("#sticky-image").stop();
  $("#sticky-image").fadeIn();
  //image animation - zoom in
  $("#sticky-image").css("transform","scale("+ 1.1 + ")")
}, function() {
  $("#sticky-image").stop();
  $("#sticky-image").fadeOut();
})

//#sticky-image:hover{
//   transform: scale(1.5);
// }
