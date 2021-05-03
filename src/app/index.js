import '../style/app.scss';

$(document).ready(function() {
  function onChangeWidth() {
    var windowWidth = $('body').innerWidth(),
        logoImg = $("#nav_logo");
    if(windowWidth >= 640){
      logoImg.attr("src", "./images/logo.svg");
    } else {
      logoImg.attr("src", "./images/logo_small.svg");
    }
  }

  onChangeWidth();

  $(window).on("resize", function (e) {
    onChangeWidth();
  })
})
