function parallax() {
  var $title = document.querySelector(".title-head");
  var yPos = window.pageYOffset;

  yPos = 1 - yPos / 480;

  var opacity = yPos;

  $title.style.opacity = opacity;
}

window.addEventListener("scroll", function () {
  parallax();
});
