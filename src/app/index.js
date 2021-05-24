import '../style/app.scss';

$(document).ready(function() {

  let windowWidth = $('body').innerWidth()
  let menuNavBtn = $("#nav-menu-mob")
  let menuNav = $("#menu-nav")

  //----менять стили в навигаторе при ховере начало ----
  $(".nav_item").hover(function(){
    $(".nav_item").removeClass("active");
    }, function(){
    $(".nav_item").addClass("active");
  });
  //----менять стили в навигаторе при ховере начало--------


  //----менять стили в футере при ховере начало--------
  $(".footer_item").hover(function(){
    $(".footer_item").removeClass("active");
    }, function(){
    $(".footer_item").addClass("active");
  });
  //----менять стили в футере при ховере конец--------


// ------ туду начало-------
  let todoHeaderNotDo = $("#todo-not-do");
  let todoHeaderDone = $("#todo-done");
  let todoListDone = $("#todo-list-done");
  let todoListNotDo = $("#todo-list-not-do");

  let arrDescription = $(".description");
  let arrInstruction = $(".instruction");
  let arrBbtnOpenInstr = $(".el_how-do_btn");
  let arrTask = $(".el_row");

  let arrBtnCheck = $(".el_check");

  function checkBtn (i) {
    arrBtnCheck.eq(i).on("click", function (e) {
      //оправлять на сервер отмеченную таску
    })
  }
  for (var i = 0; i < arrBtnCheck.length; i++) {
    checkBtn(i)
  }

  function toggleInstrauctionVisibility (i) {
    arrBbtnOpenInstr.eq(i).on("click", function (e) {
      if (arrInstruction.eq(i).hasClass("hide")) {
        arrInstruction.eq(i).removeClass("hide");
      } else {
        arrInstruction.eq(i).addClass("hide");
      }
    })
  }

  for (var i = 0; i < arrTask.length; i++) {
    toggleInstrauctionVisibility(i)
  }


  todoHeaderNotDo.on("click", function (event) {
    if (todoListNotDo.hasClass("hide")) {
      todoListNotDo.removeClass("hide");
    } else {
      todoListNotDo.addClass("hide");
    }
  })

  todoHeaderDone.on("click", function (event) {
    if (todoListDone.hasClass("hide")) {
      todoListDone.removeClass("hide");
    } else {
      todoListDone.addClass("hide");
    }
  })

  // ------ туду конец-------


  // ------ поиск начало ------
  let panelSearch = $("#search-panel")
  let btnOpenSearch = $("#open-search-btn")
  let btnCloseSearch = $("#close-search-btn")
  let btnSearch = $("#search-btn")
  let searchInput = $("#search_input")

  function toggleSearchVisibility() { // показать, скрыть поиск
    if (panelSearch.hasClass("hide")) {
      panelSearch.removeClass("hide");
    } else {
      panelSearch.addClass("hide");
    }
  }

  function openSearchPage() { // перейти на страницу с результатами
    var url = "search.html";
    $(location).attr('href',url);
  }

  function clearSearchInput() { // очистить инпут с поиском
    searchInput.val("");
  }

  searchInput.keypress(function(e) { // выполнить поиск по клику на ентер
    if(e.which == 13) {
      openSearchPage()
      clearSearchInput()
    }
    e.stopPropagation();
  })

  btnOpenSearch.on("click", function (e) {  //выполнить поиск по клику на кнопку
    if(windowWidth >= 640){
    } else {
      toggleMenuVisibility()
    }
    toggleSearchVisibility()
    e.stopPropagation();
  })

  btnCloseSearch.on("click", function (e) { //закрыть поиск по кнопке
    toggleSearchVisibility()
    e.stopPropagation();
  })

  panelSearch.on("click", function (e) {  //отклбчить закрытие при клике на блок с поиском
    e.stopPropagation();
  })

  btnSearch.on("click", function (e) {  //открыть поиск при клике из меню
    openSearchPage()
    e.stopPropagation();
  })

  // ------ конец блока с поискам ------


  function onChangeWidth() { // меняет расположение меню
    var logoImg = $("#nav_logo");
    if(windowWidth >= 640){
      logoImg.attr("src", "./images/logo.svg");
      menuNav.removeClass("hide");
    } else {
      logoImg.attr("src", "./images/logo_small.svg");
        menuNav.addClass("hide");
    }
    clearSearchInput()
  }

  function toggleMenuVisibility() { // меняет видимость меню. используется для мобилы
      if(windowWidth < 640){
        if (menuNav.hasClass("hide")) {
          menuNav.removeClass("hide");
        } else {
          menuNav.addClass("hide");
        }
      }
  }

  $('body').on("click", function (e) {
      if(windowWidth < 640) {
        if (!menuNav.hasClass("hide")) { //закрыть меню при клике в любое место. используется для мобилы
            toggleMenuVisibility()
          }
        }
      if (!panelSearch.hasClass("hide")) { //закрыть поиск при клике в любое место. используется для мобилы
          toggleSearchVisibility()
          clearSearchInput()
        }
        e.stopPropagation();
  })

  menuNavBtn.on("click", function (e) {
    toggleMenuVisibility()
    e.stopPropagation();
  })

// -----начало прогресса----
  let progressSkillOne = 100 // будет приходить с сервера
  let progressSkillTwo = 23 // будет приходить с сервера
  let progressSkillThree = 53 // будет приходить с сервера

  $("#progress_skill-one").text(progressSkillOne)
  $("#progress_skill-two").text(progressSkillTwo)
  $("#progress_skill-three").text(progressSkillThree)

  let progressSkillOneStyle = "linear-gradient(rgb(255, 255, 255), rgb(255, 255, 255)), conic-gradient(#21AF73 " + progressSkillOne + "%, #D8EDE4 " + progressSkillOne + "%)"
  $("#skill-one").css({"background-image": progressSkillOneStyle})

  let progressSkillTwoStyle = "linear-gradient(rgb(255, 255, 255), rgb(255, 255, 255)), conic-gradient(#5C59EB " + progressSkillTwo + "%, #D9D9EE " + progressSkillTwo + "%)"
  $("#skill-two").css({"background-image": progressSkillTwoStyle})

  let progressSkillThreeStyle = "linear-gradient(rgb(255, 255, 255), rgb(255, 255, 255)), conic-gradient(#1299C6 " + progressSkillThree + "%, #D9E9EE " + progressSkillThree + "%)"
  $("#skill-three").css({"background-image": progressSkillThreeStyle})


  function toggleProgressTitleLocation () { //перемещает тайтлы прогрессов
    let skills  = $(".skill"),
        skillTitle = $(".skill-title"),
        skillWrapper = $(".skill_wrapper")
    if($('body').innerWidth() >= 1200){
        for (var i = 0; i < skills.length; i++){
          skillTitle.eq(i).appendTo(skills.eq(i))
        }
    } else {
      for (var i = 0; i < skills.length; i++){
        skillTitle.eq(i).appendTo(skillWrapper.eq(i))
      }
    }
  }

  $(window).on("resize", function (e) {
    toggleProgressTitleLocation()
  })

  toggleProgressTitleLocation ()

// -----конец прогресса----


  onChangeWidth();
  clearSearchInput();

  $(window).on("resize", function (e) {
    windowWidth = $('body').innerWidth()
    onChangeWidth();
  })
})
