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
      showNotification()
      $('.notification').text("Выберите хотя бы один вариант")
      $('.notification').css("display", "block")
      $('.notification').fadeOut(6000);
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

  // ----добавлять фон если не загружена картинка начало---


  if ($(".material-el")) {
    let materialsEl = $(".material-el")

    function checkImg(i) {
      let blocksImg = materialsEl.eq(i).find($(".img"))

      for (var j = 0; j < blocksImg.length; j++) {
        if (blocksImg.eq(j).find("img").length > 0) {
          blocksImg.eq(j).css("background", "transparent")
          var srcName = blocksImg.eq(j).find("img")[0].getAttribute('src');
          var srcNameSplit = srcName.split(".");
          if (srcNameSplit[srcNameSplit.length-1] == "svg") (
            blocksImg.eq(j).find("img").css("height", "auto")
          )
        }
      }

    }

    for (var i = 0; i < materialsEl.length; i++) {
      checkImg(i)
    }
  }
  // ----добавлять фон если не загружена картинка конец ---

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

  let arrMarker = $(".marker")

  function checkBtn (i) {
      arrBtnCheck.eq(i).on("change", function (e) {
        //оправлять на сервер отмеченную таску
      })
    }

  for (var i = 0; i < arrBtnCheck.length; i++) {
    checkBtn(i)
    arrMarker.eq(i).text(i+1)
  }

  function toggleInstrauctionVisibility (i) {
    arrBbtnOpenInstr.eq(i).on("click", function (e) {
      let arrow =  ($(".btn-arrow_todo")).eq(i)
      if (arrInstruction.eq(i).hasClass("hide")) {
        arrInstruction.eq(i).removeClass("hide");
        arrow.css("transform", "rotate(90deg)");
        followScroll()
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

function followScroll () {
  if ($(".material").find($('.material-list')) && $(".material").find($('.material-list')).length > 0) {
    var distance = 500;
    var arrScrollingBox = $(".material")
    var max = []
    var min = []

    function scrollBox (i) {
      var el = arrScrollingBox.eq(i).find($('.material-list'))
      var btnRight = arrScrollingBox.eq(i).find($('.arrow-right'))
      var btnLeft = arrScrollingBox.eq(i).find($('.arrow-left'))

       max[i] = el[0].scrollWidth - el.width()

       if (el[0].scrollWidth <=  el.width()) {
         if (!btnRight.hasClass("hide")) {
           btnRight.addClass("hide")
         }
       } else {
          if (btnRight.hasClass("hide")) {
            btnRight.removeClass("hide")
          }
       }

       arrScrollingBox.eq(i).find($('button')).on('click', function() {

        el.stop().animate({
           scrollLeft: '+=' + (distance * $(this).data('factor'))
         })

         if ((el.scrollLeft() + (distance * $(this).data('factor'))) >=  max[i]) {
           if (!btnRight.hasClass("hide")) {
             btnRight.addClass("hide")
           }
         } else {
            if (btnRight.hasClass("hide")) {
              btnRight.removeClass("hide")
            }
         }

         if ((el.scrollLeft() + (distance * $(this).data('factor'))) <=  0) {
           if (!btnLeft.hasClass("hide")) {
             btnLeft.addClass("hide")
           }
         } else {
            if (btnLeft.hasClass("hide")) {
              btnLeft.removeClass("hide")
            }
         }


      })
    }

     for (var i = 0; i < arrScrollingBox.length; i++) {
       scrollBox(i)
     }
   }
}

  followScroll ()

  // ------ горизонтальный скролл конец -----


  // ------ служебные сообщения начало -----
  window.showNotification = function showNotification(textNotification) {
    var notification = $('<div class="notification" id="notification"><span></span></div>')
    notification.appendTo($("body"))
    notification.find($('span')).text(textNotification)
    notification.css("left",  ($("body").width() / 2 - notification.width() / 2))
  }

  function addBtnClose() {
    var btnClose = $('<div class="btn-close"><svg class="icons icons--close" width="16" height="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><use xlink:href="sprite.svg#icon-close"></use></svg></div>')
    btnClose.appendTo($("#notification"))
    btnClose.on("click", function (e) {
      $('#notification').fadeOut(1000);
      $('#notification').remove()
    })
  }

  function addTimerClosing() {
    console.log($("#notification"))

    var timerClosing = $('<div class="btn-timer"><div class="wrapper" data-anim="base wrapper"><div class="circle" data-anim="base left"></div><div class="circle" data-anim="base right"></div></div></div>')
    timerClosing.appendTo($("#notification"))
    setTimeout(function () {
        $('#notification').fadeOut(1000);
        setTimeout(function() {$('#notification').remove()}, 1000)
        }, 6000);


  }
  // window.showNotification()
  // addBtnClose()
  // showNotification ("добавить текст уведомления добавить текст уведомления добавить текст уведомлениядобавить текст уведомлениядобавитьдобавить текст уведомлениядобавить текст уведомлениядобавить текст уведомлениядобавить текст уведомления") // вызывать когда надо


  // addBtnClose() // вызывать если надо добавить кнопку для закрытия уведомления
  // addTimerClosing() // вызывать если надо не нужна кнопка для закрытия уведомления, показывает таймер, через сколько уведомление закроется само
  // ------ служебные сообщения конец -----

  // ------ ховер на иконку in-coaching начало -----

window.getInCoachingTooltip = function getInCoachingTooltip() {
  if ($(".in-coaching")) {
    let arrIconsCoaching = $(".in-coaching") // весь список иконок
    var popup = $('<div class="popup">Это занятие включено в вашу тренировку<div class="arrow"></div></div>')
    popup.appendTo($("body"))

    function onHoverIcon (i) {
      arrIconsCoaching.eq(i).on("mouseenter", function (e) {
        var left = arrIconsCoaching.eq(i).offset().left
        popup.css("display", "block")
        var popupWidth = popup.width()
        var bodyWidth = $("body").width()
        var shift = bodyWidth - (left + 15 + popupWidth)
        if (shift < 0)  {
          left += shift
          popup.find($(".arrow")).css("left", ((shift*(-1)) + 15))
        }
        popup.css("top", (arrIconsCoaching.eq(i).offset().top + 35))
        popup.css("left", (left - 15))
      }).on('mouseleave',function(){
        popup.css("display", "none")
        popup.find($(".arrow")).css("left", 15)
      })
    }

    for (var i = 0; i < arrIconsCoaching.length; i++) {
      onHoverIcon(i)
    }
  }
}
window.getInCoachingTooltip()



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
  // let progressSkillDigital = 100 // будет приходить с сервера
  // let progressSkillTwo = 23 // будет приходить с сервера
  // let progressSkillThree = 53 // будет приходить с сервера
  //
  // $("#progress_skill-digital").text(progressSkillDigital)
  // $("#progress_skill-personal").text(progressSkillTwo)
  // $("#progress_skill-financial").text(progressSkillThree)
  //
  // let progressSkillDigitalStyle = "linear-gradient(rgb(255, 255, 255), rgb(255, 255, 255)), conic-gradient(#21AF73 " + progressSkillDigital + "%, #D8EDE4 " + progressSkillDigital + "%)"
  // $("#skill-digital").css({"background-image": progressSkillDigitalStyle})
  //
  // let progressSkillPersonalStyle = "linear-gradient(rgb(255, 255, 255), rgb(255, 255, 255)), conic-gradient(#5C59EB " + progressSkillTwo + "%, #D9D9EE " + progressSkillTwo + "%)"
  // $("#skill-personal").css({"background-image": progressSkillPersonalStyle})
  //
  // let progressSkillFinancialStyle  = "linear-gradient(rgb(255, 255, 255), rgb(255, 255, 255)), conic-gradient(#1299C6 " + progressSkillThree + "%, #D9E9EE " + progressSkillThree + "%)"
  // $("#skill-financial").css({"background-image": progressSkillFinancialStyle })


  function toggleProgressTitleLocation () { //перемещает тайтлы прогрессов
    let skills  = $(".progress-main .skill"),
        skillTitle = $(".progress-main .skill-title"),
        skillWrapper = $(".progress-main .skill_wrapper")

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
  window.toggleProgressTitleLocation = toggleProgressTitleLocation()
  toggleProgressTitleLocation()


// -----конец прогресса----


  onChangeWidth();
  clearSearchInput(searchInput, clearBtn);

  $(window).on("resize", function (e) {
    windowWidth = $('body').innerWidth()
    onChangeWidth();
    followScroll()
  })
})
