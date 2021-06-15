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


  //----переход между вопросами в тесте начало--------
  // .test_inner - весь блок
  // .block_return назад
  // progress_line вся линия
  // progress_test сколько закрасить

  let userAuth = false // авторизован пользователь или нет

  if (userAuth) {
    $("#block_question-email").remove()
  }

  let arrQuestions = $(".block_question") // весь список вопросов
  let activeQuestion = 0 // активный сейчас вопрос. 0 по умолчанию
  let btnNext = $(".btn-next")
  let btnReturn = $(".block_return")
  let progressLine = $(".progress_line") // вся линия
  let widthProgressLine = progressLine.width() // вся линия

  let progressTest = $(".progress_question") // закрашенная линия в зависимости от номера выбранного вопроса
  let widthProgressQuestion = widthProgressLine / arrQuestions.length

  function setProgress () {
    let width = (activeQuestion + 1) * widthProgressQuestion
    progressTest.css("width", width + "px")
  }

  let chooseNothing = false;

  function setCheckbox() {

    var others = arrQuestions.eq(activeQuestion).find($('input').not('.nothing'))
    var btnNothing = arrQuestions.eq(activeQuestion).find($('.nothing'))
    btnNothing.change(function () {
        if (this.checked) {
            others.prop('checked', false)
            chooseNothing = true
        }
    });
    others.change(function () {
        if (this.checked) {
            btnNothing.prop('checked', false)
            chooseNothing = false
        }
    })
  }

  function goTo () {
    var url = "course_ready.html";
    $(location).attr('href',url);
  }

  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email.val());
  }

  function checkAnswers(answers) {
    if (answers.length == 0) {
      $('.notification').text("Выберите хотя бы один вариант")
      $('.notification').css("display", "block")
      $('.notification').fadeOut(4000);
      return false
    } else {
      return true
    }
  }



  btnNext.on("click", function (e) {
    e.stopPropagation();

    if (activeQuestion >= (arrQuestions.length - 1)) {
      if (userAuth) {
        if (checkAnswers (arrQuestions.eq(activeQuestion).find($('input:checked')))) {
            goTo()
        }
      } else {
        if (validateEmail($("#email-address"))) {
          goTo()
        } else {
          $('.notification').text("Некорректный email")
          $('.notification').css("display", "block")
          $('.notification').fadeOut(4000);
        }
      }
    }

    if  (activeQuestion < (arrQuestions.length - 1)) {
      if (checkAnswers (arrQuestions.eq(activeQuestion).find($('input:checked')))) {
          arrQuestions.eq(activeQuestion).addClass("hide");
          activeQuestion += 1;
          arrQuestions.eq(activeQuestion).removeClass("hide");
      }
      if (activeQuestion == (arrQuestions.length - 1)) {
        btnNext.text("Готово")
      }

    }

    setProgress()
    setCheckbox()

  })

  btnReturn.on("click", function (e) {
    e.stopPropagation();
    if (activeQuestion > 0) {
      arrQuestions.eq(activeQuestion).addClass("hide");
      activeQuestion -= 1;
      arrQuestions.eq(activeQuestion).removeClass("hide");
      if (activeQuestion != (arrQuestions.length - 1)) {
        btnNext.text("Дальше")
      }
      setProgress()
    }
  })

  setProgress()
  setCheckbox()




  $(window).on("resize", function (e) {
    widthProgressLine = progressLine.width() // вся линия
    widthProgressQuestion = widthProgressLine / arrQuestions.length
    setProgress();
  })


  //----переход между вопросами в тесте  конец--------


// ------ туду начало-------
if ($(".todo-list_wrapper")) {
  let todoHeaderNotDo = $("#todo-not-do");
  let todoHeaderDone = $("#todo-done");
  let todoListDone = $("#todo-list-done");
  let todoListNotDo = $("#todo-list-not-do");

  let arrDescription = $(".description");
  let arrInstruction = $(".instruction");
  let arrBbtnOpenInstr = $(".el_how-do_btn");
  let arrTask = $(".el_task");

  let arrBtnCheck = $(".el-task-checkbox");

  function checkBtn (i) {
      arrBtnCheck.eq(i).on("change", function (e) {
        //оправлять на сервер отмеченную таску
      })
    }

  for (var i = 0; i < arrBtnCheck.length; i++) {
    checkBtn(i)
  }

  function toggleInstrauctionVisibility (i) {
    arrBbtnOpenInstr.eq(i).on("click", function (e) {
      let arrow =  ($(".btn-arrow_todo")).eq(i)
      if (arrInstruction.eq(i).hasClass("hide")) {
        arrInstruction.eq(i).removeClass("hide");
        arrow.css("transform", "rotate(90deg)");
      } else {
        arrInstruction.eq(i).addClass("hide");
        arrow.css("transform", "rotate(0deg)");
      }
    })
  }

  for (var i = 0; i < arrTask.length; i++) {
    toggleInstrauctionVisibility(i)
  }


  todoHeaderNotDo.on("click", function (event) {
    if (todoListNotDo.hasClass("hide")) {
      todoListNotDo.removeClass("hide");
      todoHeaderNotDo.addClass("header-border-bottom")
      todoHeaderNotDo.find($(".btn-arrow_header")).css("transform", "rotate(180deg)");
    } else {
      todoListNotDo.addClass("hide");
      todoHeaderNotDo.removeClass("header-border-bottom")
      todoHeaderNotDo.find($(".btn-arrow_header")).css("transform", "rotate(0deg)");

    }
  })

  todoHeaderDone.on("click", function (event) {
    if (todoListDone.hasClass("hide")) {
      todoListDone.removeClass("hide");
      todoHeaderDone.addClass("header-border-bottom")
      todoHeaderDone.find($(".btn-arrow_header")).css("transform", "rotate(180deg)");
    } else {
      todoListDone.addClass("hide");
      todoHeaderDone.removeClass("header-border-bottom")
      todoHeaderDone.find($(".btn-arrow_header")).css("transform", "rotate(0deg)");

    }
  })
}
  // ------ туду конец-------

// ----убирать фон если загружена картинк начало ---
if ($(".material")) {
  let arrMaterialEl = $(".material-el")
  for (var i = 0; i < arrMaterialEl.length; i++) {
    if (arrMaterialEl.eq(i).find($('.img')).find('img')) {
      // arrMaterialEl.eq(i).find($('.img')).css("background", "transparent")
      }
    }
  }



// ----убирать фон если загружена картинк конец  ---

  // ------ горизонтальный скролл начало -----

  var distance = 250;
  var arrScrollingBox = $(".material")

  function scrollBox (i) {
    arrScrollingBox.eq(i).find($('button')).on('click', function() {
      var el = arrScrollingBox.eq(i).find($('.material-list'))
      el.stop().animate({
         scrollLeft: '+=' + (distance * $(this).data('factor'))
       })
    })
  }

   for (var i = 0; i < arrScrollingBox.length; i++) {
     scrollBox(i)
   }

  // ------ горизонтальный скролл конец -----




  // ------ ховер на иконку in-coaching начало -----
  let arrIconsCoaching = $(".in-coaching") // весь список иконок
  let popup = $("#popup")

  popup.find($('.text')).text("Это занятие включено в вашу тренировку")

  function onHoverIcon (i) {
    arrIconsCoaching.eq(i).on("mouseenter", function (e) {
      popup.appendTo(arrIconsCoaching.eq(i))
      popup.css("display", "block")
      }).on('mouseleave',function(){
      popup.css("display", "none")
    })
  }

  for (var i = 0; i < arrIconsCoaching.length; i++) {
    onHoverIcon(i)
  }


  // ------ ховер на иконку in-coaching конец -----


  // ------ поиск начало ------
  let panelSearch = $("#search-panel")
  let btnOpenSearch = $("#open-search-btn")
  let btnCloseSearch = $("#close-search-btn")
  let btnSearch = $("#search-btn")
  let searchInput = $("#search_input")
  let clearBtn = $("#clear-btn")

  let clearBtnInPage = $("#clear-btn-in-page")
  let searchBtnInPage = $("#search-btn-in-page")
  let searchInputInPage = $("#search_input-in-page")

  function toggleSearchVisibility() { // показать, скрыть поиск
    if (panelSearch.hasClass("hide")) {
      panelSearch.removeClass("hide");
      searchInput.focus();
    } else {
      panelSearch.addClass("hide");
    }
  }

  function openSearchPage(query) { // перейти на страницу с результатами
    let url = "/search.html" + "?q=" + query; //для localhost
    // let url = "/search/" + "?q=" + query; //для dev
    $(location).attr('href', url);
}

  function clearSearchInput(input,btn) { // очистить инпут с поиском
    input.val("");
    btn.addClass("hide")
  }

  clearBtnInPage.on("click", function (e) {
    e.stopPropagation();
    clearSearchInput(searchInputInPage, clearBtnInPage)
  })

  clearBtn.on("click", function (e) {
    e.stopPropagation();
    clearSearchInput(searchInput, clearBtn)
  })

  searchInput.on('change paste keyup', function() {
    clearBtn.removeClass("hide")
  });

  searchInputInPage.on('change paste keyup', function() {
    clearBtnInPage.removeClass("hide")
  });

  searchInput.keypress(function(e) { // выполнить поиск по клику на ентер
    if(e.which == 13) {
      openSearchPage(searchInput[0].value)
      clearSearchInput(searchInput, clearBtn)
    }
    e.stopPropagation();
  })

  searchInputInPage.keypress(function(e) { // выполнить поиск по клику на ентер
    if(e.which == 13) {
      openSearchPage(searchInputInPage[0].value)
      clearSearchInput(searchInputInPage, clearBtnInPage)
    }
    e.stopPropagation();
  })

  searchBtnInPage.on("click", function (e) {  //выполнить поиск по клику на кнопку
    openSearchPage(searchInputInPage[0].value)
    e.stopPropagation();
  })

  btnOpenSearch.on("click", function (e) {  //выполнить поиск по клику на кнопку
    if(windowWidth < 640){
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
    openSearchPage(searchInput[0].value)
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
    clearSearchInput(searchInput, clearBtn)
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
          clearSearchInput(searchInput, clearBtn)
        }
        e.stopPropagation();
  })

  menuNavBtn.on("click", function (e) {
    toggleMenuVisibility()
    e.stopPropagation();
  })

// -----начало прогресса----
  let progressSkillDigital = 100 // будет приходить с сервера
  let progressSkillTwo = 23 // будет приходить с сервера
  let progressSkillThree = 53 // будет приходить с сервера

  $("#progress_skill-digital").text(progressSkillDigital)
  $("#progress_skill-personal").text(progressSkillTwo)
  $("#progress_skill-financial").text(progressSkillThree)

  let progressSkillDigitalStyle = "linear-gradient(rgb(255, 255, 255), rgb(255, 255, 255)), conic-gradient(#21AF73 " + progressSkillDigital + "%, #D8EDE4 " + progressSkillDigital + "%)"
  $("#skill-digital").css({"background-image": progressSkillDigitalStyle})

  let progressSkillPersonalStyle = "linear-gradient(rgb(255, 255, 255), rgb(255, 255, 255)), conic-gradient(#5C59EB " + progressSkillTwo + "%, #D9D9EE " + progressSkillTwo + "%)"
  $("#skill-personal").css({"background-image": progressSkillPersonalStyle})

  let progressSkillFinancialStyle  = "linear-gradient(rgb(255, 255, 255), rgb(255, 255, 255)), conic-gradient(#1299C6 " + progressSkillThree + "%, #D9E9EE " + progressSkillThree + "%)"
  $("#skill-financial").css({"background-image": progressSkillFinancialStyle })


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
  clearSearchInput(searchInput, clearBtn);

  $(window).on("resize", function (e) {
    windowWidth = $('body').innerWidth()
    onChangeWidth();
  })
})
