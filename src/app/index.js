import '../style/app.scss';

$(document).ready(function() {


  window.isTeamPage = (document.location.pathname.includes('/team')) ? true: false

  let windowWidth = $('body').innerWidth()
  let menuNavBtn = $("#nav-menu-mob")
  let menuNav=$("#menu-nav")
  
  let urlImage =  window.isTeamPage ? './../images/' : './images/'
    



  /// ------- TEAM BLOCK START ------
  let popupTeamMenu = $("#team-menu_popup")
  let btnOpenTeamMenu = $("#open-team-menu-btn")


  function toggleTeamMenuVisibility() { // показать, скрыть попап с выбором секьюрно
    if (popupTeamMenu.hasClass("hide")) {
      popupTeamMenu.removeClass("hide");
      searchInput.focus();
    } else {
      popupTeamMenu.addClass("hide");
    }
  }

  $('body').on("click", function (e) {
    if(windowWidth < 640) {
      // if (!popupTeamMenu.hasClass("hide")) { //закрыть меню при клике в любое место. используется для мобилы
      //     toggleMenuVisibility()
      //   }
      }
    if (!popupTeamMenu.hasClass("hide")) { 
      toggleTeamMenuVisibility()
      }
      e.stopPropagation();
  })

  btnOpenTeamMenu.on("click", function (e) { 
    toggleTeamMenuVisibility()
    e.stopPropagation();
  })
  
  /// ------- TEAM BLOCK END ------



  function onChangeWidth() { // меняет расположение меню
    var logoImg = $("#nav_logo");
    if (windowWidth>=640) {
      if (window.isTeamPage) {
        logoImg.attr("src", `${urlImage}logo_team.svg`);
      } else {
        logoImg.attr("src", `${urlImage}logo.svg`);
      }
      
      menuNav.removeClass("hide");
    } else {
      if (window.isTeamPage) {
        logoImg.attr("src", `${urlImage}logo_team.svg`);
      } else {
        logoImg.attr("src", `${urlImage}logo_small.svg`);
      }
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


  //----менять стили в навигаторе при ховере начало ----
  var arrNavItem = $(".nav_item")

  function changeActiveItem (i) {
    arrNavItem.eq(i).hover(function(){

      for (var j = 0; j < arrNavItem.length; j++) {
        arrNavItem.eq(j).find($("a")).css("color", "#787882")
      }

      arrNavItem.eq(i).find($("a")).css("color", "#17171C")
    }, function(){
      arrNavItem.eq(i).find($("a")).css("color", "#787882")

      for (var j = 0; j < arrNavItem.length; j++) {
        if (arrNavItem.eq(j).hasClass("active")){
          arrNavItem.eq(j).find($("a")).css("color", "#17171C")
        }
      }
    })
  }

  for (i = 0; i < arrNavItem.length; i++) {
    changeActiveItem(i)
  }

//----менять стили в навигаторе при ховере начало--------


//----менять стили в футере при ховере начало--------
  $(".footer_item").hover(function(){
    $(".footer_item").removeClass("active");
    }, function(){
    $(".footer_item").addClass("active");
  });
//----менять стили в футере при ховере конец--------




// ----добавлять фон если не загружена картинка начало---
if ($(".material-el")) {
  let arrMaterialEl = $(".material-el")

  for (var a = 0; a < arrMaterialEl.length; a++) {
    let materialsEl = $(".material-el").eq(a)

    function checkImg(i) {
      materialsEl.eq(i)
      let blocksImg = materialsEl.eq(i).find($(".img"))

      for (var j = 0; j < blocksImg.length; j++) {
        if (blocksImg.eq(j).find("img").length > 0) {
          blocksImg.eq(j).css("background", "transparent")
          var srcName = blocksImg.eq(j).find("img")[0].getAttribute('src');
          var srcNameSplit = srcName.split(".");
          if (srcNameSplit[srcNameSplit.length-1] == "svg") (
            blocksImg.eq(j).find("img").css("object-fit", "contain").css("border-radius", "0px")
          )
        }
      }
    }

    for (var i = 0; i < materialsEl.length; i++) {
      checkImg(i)
    }
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

  let listTask = jQuery.map( $(".todo-el"), function(node,key){
    let el = {
      parent: $(node),
      btnRisk:  $(node).find($(".risks-btn")),
      btnCheck:  $(node).find($(".el-task-checkbox")),
      isTaskRefuse:  parseInt($(node).find($(".el-task-checkbox")).data('isrefused')),
      isTaskReady:  parseInt($(node).find($(".el-task-checkbox")).data('isready')),
      taskId: $(node).find($(".el-task-checkbox")).data('task-id'),
    }
    return el
  })


  let arrMarker = $(".marker")

  let amountTaskRefused = parseInt($(".todo-not-do").find(".list-amount").text())
  let amountTaskReady =  parseInt($(".todo-done").find(".list-amount").text())


  function setStateTask(i) {
    listTask[i].btnRisk.on("click", function (e) {
      // const csrfmiddlewaretoken = $("[name=csrfmiddlewaretoken]")[0].value
      // $.post('/tasks/'+listTask[i].taskId+'/toggle/', {
      //   'csrfmiddlewaretoken': csrfmiddlewaretoken,
      //   'refuse': true,
      // })

      if (listTask[i].isTaskRefuse) { // УДАЛЯЕТ задачу из списка не хочу делать
        amountTaskRefused -= 1
        listTask[i].isTaskRefuse = 0
        listTask[i].btnRisk.text("Не хочу делать")
        listTask[i].parent.find($(".risks-text")).text("Не хочу это делать, с некоторыми рисками можно смириться.")
        listTask[i].parent.find($(".el_task")).removeClass("el_task-not-do")
        listTask[i].parent.removeClass($("todo-el_not-do"))
        showNotification("Задание добавлено в Туду-лист")
      } else { // ДОБАВЛЯЕТ задачу в список не хочу делать
        listTask[i].btnRisk.text("Вернуть в список моих задач")
        listTask[i].parent.find($(".risks-text")).html("Вы отказались от этот задачи.<br>Ничего страшного.")
        listTask[i].parent.find($(".el_task")).addClass("el_task-not-do")
        listTask[i].parent.addClass($("todo-el_not-do"))
        showNotification("Перемещено в список 'Не хочу делать'")
        amountTaskRefused += 1
        listTask[i].isTaskRefuse = 1
        if (listTask[i].isTaskReady) {
          amountTaskReady -= 1
          listTask[i].isTaskReady = 0
          $(".todo-done").find(".list-amount").text(amountTaskReady)
          listTask[i].parent.find($(".el-task-checkbox")).data('isready', listTask[i].isTaskReady)
          listTask[i].btnRisk.data('isready', listTask[i].isTaskReady)
          listTask[i].btnCheck.prop("checked", false)
        }
      }
      listTask[i].parent.find($(".el-task-checkbox")).data('isrefused', listTask[i].isTaskRefuse)
      listTask[i].btnRisk.data('isrefused', listTask[i].isTaskRefuse)
      $(".todo-not-do").find(".list-amount").text(amountTaskRefused)

      e.stopPropagation();
    })

    listTask[i].btnCheck.on("change", function (e) {
      // const csrfmiddlewaretoken = $("[name=csrfmiddlewaretoken]")[0].value
      // $.post('/tasks/'+listTask[i].taskId+'/toggle/', {
      //   'csrfmiddlewaretoken': csrfmiddlewaretoken,
      //   'check': true,
      // })
      if (listTask[i].isTaskReady) {
        amountTaskReady -= 1
        listTask[i].isTaskReady = 0
        showNotification("Задание добавлено в Туду-лист")
      } else {
        amountTaskReady += 1
        listTask[i].isTaskReady = 1
        showNotification("Здорово!")
        if (listTask[i].isTaskRefuse) {
          amountTaskRefused -= 1
          listTask[i].isTaskRefuse = 0
          listTask[i].btnRisk.text("Не хочу делать")
          listTask[i].parent.find($(".risks-text")).text("Не хочу это делать, с некоторыми рисками можно смириться.")
          listTask[i].parent.find($(".el_task")).removeClass("el_task-not-do")
          listTask[i].parent.removeClass($("todo-el_not-do"))
          listTask[i].parent.find($(".el-task-checkbox")).data('isrefused', listTask[i].isTaskRefuse)
          listTask[i].btnRisk.data('isrefused', listTask[i].isTaskRefuse)
          $(".todo-not-do").find(".list-amount").text(amountTaskRefused)
        }
      }
      $(".todo-done").find(".list-amount").text(amountTaskReady)
      listTask[i].parent.find($(".el-task-checkbox")).data('isready', listTask[i].isTaskReady)
      listTask[i].btnRisk.data('isready', listTask[i].isTaskReady)

      if (arrTask.eq(i).hasClass("el_task-not-do")) {
        arrTask.eq(i).removeClass("el_task-not-do")

      }
    })
  }

  for (var i = 0; i < listTask.length; i++) {
    setStateTask(i)
    arrMarker.eq(i).text(i+1)
  }

  function toggleInstrauctionVisibility (i) {
    arrBbtnOpenInstr.eq(i).on("click", function (e) {
      let arrow =  ($(".btn-arrow_todo")).eq(i)
      if (arrInstruction.eq(i).hasClass("hide")) {
        arrInstruction.eq(i).removeClass("hide");
        arrow.css("transform", "rotate(-180deg)");
        followScroll()
        if ($('body').innerWidth() < 640) {
          arrInstruction.eq(i).find($('.instruction_btn-close-todo')).on("click", function (event) {
            arrInstruction.eq(i).addClass("hide");
            arrow.css("transform", "rotate(0deg)");
            if ($('body').innerWidth() < 640) {
              $("body").css("overflow-y", "auto")
            }
          })
          $("body").css("overflow-y", "hidden")
        }
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

      if (max[i] > 0) {
        if (!$(".material").eq(i).hasClass("hover-material")) {
          !$(".material").eq(i).addClass("hover-material")
        }
      } else {
        if (!$(".material").eq(i).hasClass("hover-material")) {
          !$(".material").eq(i).removeClass("hover-material")
        }
      }

       if (el[0].scrollWidth <=  el.width()) {
         if (!btnRight.hasClass("hide")) {
           btnRight.addClass("hide")
           btnRight.css("z-index", "0")
         }
       } else {
          if (btnRight.hasClass("hide")) {
            btnRight.removeClass("hide")
            btnRight.css("z-index", "2")
          }
       }

       arrScrollingBox.eq(i).find($('button')).on('click', function() {

        el.stop().animate({
           scrollLeft: '+=' + (distance * $(this).data('factor'))
         })

         if ((el.scrollLeft() + (distance * $(this).data('factor'))) >=  max[i]) {
           if (!btnRight.hasClass("hide")) {
             btnRight.addClass("hide")
             btnRight.css("z-index", "0")
           }
         } else {
            if (btnRight.hasClass("hide")) {
              btnRight.removeClass("hide")
              btnRight.css("z-index", "2")
            }
         }

         if ((el.scrollLeft() + (distance * $(this).data('factor'))) <=  0) {
           if (!btnLeft.hasClass("hide")) {
             btnLeft.addClass("hide")
             btnLeft.css("z-index", "0")
           }
         } else {
            if (btnLeft.hasClass("hide")) {
              btnLeft.removeClass("hide")
              btnLeft.css("z-index", "2")
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
  window.showNotification = function showNotification(textNotification, withClosing) {
    var text = (textNotification.split(";")).filter(String)
    if ($(".notification")) {
      $(".notification").remove()

    }
    var notification = $('<div class="notification" id="notification"><div class="notification_inner"></div></div>')
    notification.appendTo($("body"))
    for (var i = 0; i < text.length; i++) {
      var span = $('<span></span>')
      span.text(text[i])
      span.appendTo(notification.find($('div')))
    }
    notification.css("left",  ($("body").width() / 2 - notification.innerWidth() / 2))
    if (withClosing) {
      var btnClose = $('<div class="btn-close"><svg class="icons icons--close" width="16" height="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><use xlink:href="sprite.svg#icon-close"></use></svg></div>')
      btnClose.appendTo($("#notification"))
      btnClose.on("click", function (e) {
        $('#notification').fadeOut(1000);
        $('#notification').remove()
      })
      $("#notification").css("left",  ($("body").width() / 2 - $("#notification").innerWidth() / 2))
    } else {
      setTimeout(function () {
          $('#notification').fadeOut(1000);
            setTimeout(function() {$('#notification').remove()}, 1000)
          }, 1000);
    }
  }

  //   window.addBtnClose = function addBtnClose() {
  //   var btnClose = $('<div class="btn-close"><svg class="icons icons--close" width="16" height="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><use xlink:href="sprite.svg#icon-close"></use></svg></div>')
  //   btnClose.appendTo($("#notification"))
  //   btnClose.on("click", function (e) {
  //     $('#notification').fadeOut(1000);
  //     $('#notification').remove()
  //   })
  //   $("#notification").css("left",  ($("body").width() / 2 - $("#notification").innerWidth() / 2))
  // }

  // window.addTimerClosing = function addTimerClosing() {
  //   var timerClosing = $('<div class="btn-timer"><div class="wrapper" data-anim="base wrapper"><div class="circle" data-anim="base left"></div><div class="circle" data-anim="base right"></div></div></div>')
  //   timerClosing.appendTo($("#notification"))
  //   setTimeout(function () {
  //       $('#notification').fadeOut(1000);
  //       setTimeout(function() {$('#notification').remove()}, 1000)
  //       }, 6000);
  //   $("#notification").css("left",  ($("body").width() / 2 - $("#notification").innerWidth() / 2))
  // }

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
        let shiftTop = 0
        if ($(".container-theory").length > 0) {
          shiftTop = $(".container-theory").outerHeight(true) - $(".container-theory").height() - 130
        }
        popup.css("top", (arrIconsCoaching.eq(i).offset().top - shiftTop + 35))
        popup.css("left", (left - 15))
      }).on('mouseleave',function(){
        popup.css("display", "none").find($(".arrow")).css("left", 15)
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


  // ------ ховер на иконку done начало -----
  window.getDoneTooltip = function getDoneTooltip() {
    if ($(".descr").find(".done")) {
      let arrIconsDone = $(".done") // весь список иконок
      var popup = $('<div class="popup">Занятие выполнено<div class="arrow"></div></div>')
      popup.appendTo($("body"))
      function onHoverIconDone (i) {
        arrIconsDone.eq(i).on("mouseenter", function (e) {
          var left = arrIconsDone.eq(i).offset().left
          popup.css("display", "block")
          var popupWidth = popup.width()
          var bodyWidth = $("body").width()
          var shift = bodyWidth - (left + 15 + popupWidth)
          if (shift < 0)  {
            left += shift
            popup.find($(".arrow")).css("left", ((shift*(-1)) + 15))
          }
          let shiftTopDone = 0
          if ($(".container-theory").length > 0) {
            shiftTopDone = $(".container-theory").outerHeight(true) - $(".container-theory").height() - 130
          }
          popup.css("top", (arrIconsDone.eq(i).offset().top - shiftTopDone + 35))
          popup.css("left", (left - 15))
        }).on('mouseleave',function(){
          popup.css("display", "none")
          popup.find($(".arrow")).css("left", 15)
        })
      }

      for (var i = 0; i < arrIconsDone.length; i++) {
        onHoverIconDone(i)
      }
    }
  }
  window.getDoneTooltip()

    // ------ ховер на иконку done конец -----



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
    if (query != "") {
      clearBtnInPage.removeClass("hide")
    }
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



  // удаление/добавление из списка своих занятий ----- НАЧАЛО
  window.setList = function setList(el, id) {
    // const csrfmiddlewaretoken = $("[name=csrfmiddlewaretoken]")[0].value
    if (typeof isInUserList === 'undefined') {
      var isInUserList = el.hasAttribute('data-in-course')
    }
    if (!isInUserList) { // добавлять в список
      // $.post('/theory/exercise/'+ id + '/add/', {
      //   'csrfmiddlewaretoken': csrfmiddlewaretoken,
      // })
      if ($('.article-exercise').length) {
          $('.article-exercise').find('.in-coaching').eq(0).removeClass('hide')
          $('.set_exercise').addClass('hide')
      } else {
        el.setAttribute('data-in-course', '')
        $('#exercise-' + id).find('.in-coaching').eq(0).removeClass('hide')
        $(el).addClass('hide')
      }
      isInUserList = true
      showNotification('Занятие добавлено в тренировку', false)
    }
    getBtnSetList()
  }
  // удаление/добавление из списка своих занятий ----- КОНЕЦ


  // установить кнопку добавить или удалить в свои занятия ----- НАЧАЛО
  function getBtnSetList() {
    let popupAdd = $('<div class="popup">Добавить в свою тренировку<div class="arrow"></div></div>')
    popupAdd.appendTo($("body"))

    let arrBtnSetList = $(".btn-set-list")

    for (var i=0; i < arrBtnSetList.length; i++) {
      if (typeof arrBtnSetList.eq(i).attr("data-in-course") != "undefined") {
        arrBtnSetList.eq(i).text('-')
        onHoverIcon(i, true)
      } else {
        arrBtnSetList.eq(i).text('+')
        onHoverIcon(i, false)
      }
    }

    function onHoverIcon (i, isInCourse) {
      let popup = popupAdd
      arrBtnSetList.eq(i).on("mouseenter", function (e) {
        var left = arrBtnSetList.eq(i).offset().left
        popup.css("display", "block")
        var popupWidth = popup.width()
        var bodyWidth = $("body").width()
        var shift = bodyWidth - (left + 15 + popupWidth)
        if (shift < 0)  {
          left += shift
          popup.find($(".arrow")).css("left", ((shift*(-1)) + 15))
        }
        let shiftTop = 0
        if ($(".container-theory").length > 0) {
          shiftTop = $(".container-theory").outerHeight(true) - $(".container-theory").height() - 130
        }
        popup.css("top", (arrBtnSetList.eq(i).offset().top - shiftTop + 35))
        popup.css("left", (left - 15))
      }).on('mouseleave',function(){
        popup.css("display", "none")
        popup.find($(".arrow")).css("left", 15)
      })
    }
  }
  if ($(".btn-set-list")) {
    getBtnSetList()
  }
  // установить кнопку добавить или удалить в свои занятия ----- КОНЕЦ


  onChangeWidth();
  clearSearchInput(searchInput, clearBtn);

  $(window).on("resize", function (e) {
    windowWidth = $('body').innerWidth()
    onChangeWidth();
    followScroll()
  })
})
