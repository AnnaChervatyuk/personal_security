import '../style/app.scss';

$(document).ready(function() {
  let todoHeaderNotDo = $("#todo-not-do");
  let todoHeaderDone = $("#todo-done");
  let todoListDone = $("#todo-list-done");
  let todoListNotDo = $("#todo-list-not-do");
  let btnOpenInstr = $("#how-do_btn");
  let instruction = $("#how-do_instr");

  let menuNavBtn = $("#nav-menu-mob")
  let menuNav = $("#menu-nav")

  $(".nav_item").hover(function(){
    $(".nav_item").removeClass("active");
    }, function(){
    $(".nav_item").addClass("active");
  });

  $(".footer_item").hover(function(){
    $(".footer_item").removeClass("active");
    }, function(){
    $(".footer_item").addClass("active");
  });


  todoHeaderNotDo.on("click", function (event) {
    if (todoListNotDo.hasClass("hide")) {
      todoListNotDo.removeClass("hide");
    } else {
      todoListNotDo.addClass("hide");
    }
  })

  btnOpenInstr.on("click", function (event) {
    if (instruction.hasClass("hide")) {
      instruction.removeClass("hide");
    } else {
      instruction.addClass("hide");
    }
  })

  todoHeaderDone.on("click", function (event) {
    if (todoListDone.hasClass("hide")) {
      todoListDone.removeClass("hide");
    } else {
      todoListDone.addClass("hide");
    }
  })


  function onChangeWidth() {
    var windowWidth = $('body').innerWidth(),
        logoImg = $("#nav_logo");
    if(windowWidth >= 640){
      logoImg.attr("src", "./images/logo.svg");
      menuNav.removeClass("hide");
    } else {
      logoImg.attr("src", "./images/logo_small.svg");
        menuNav.addClass("hide");
    }
  }


  function toggleMenuVisibility() {
    menuNavBtn.on("click", function (event) {
      if (menuNav.hasClass("hide")) {
        menuNav.removeClass("hide");
      } else {
        menuNav.addClass("hide");
      }
    })
  }

  onChangeWidth();
  toggleMenuVisibility()



  $(window).on("resize", function (e) {
    onChangeWidth();
  })
})
