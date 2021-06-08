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
