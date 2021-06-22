/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app/index.js":
/*!**************************!*\
  !*** ./src/app/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style/app.scss */ \"./src/style/app.scss\");\n\n\n$(document).ready(function () {\n\n  let windowWidth = $('body').innerWidth();\n  let menuNavBtn = $(\"#nav-menu-mob\");\n  let menuNav = $(\"#menu-nav\");\n\n  //----менять стили в навигаторе при ховере начало ----\n  $(\".nav_item\").hover(function () {\n    $(\".nav_item\").removeClass(\"active\");\n  }, function () {\n    $(\".nav_item\").addClass(\"active\");\n  });\n  //----менять стили в навигаторе при ховере начало--------\n\n\n  //----менять стили в футере при ховере начало--------\n  $(\".footer_item\").hover(function () {\n    $(\".footer_item\").removeClass(\"active\");\n  }, function () {\n    $(\".footer_item\").addClass(\"active\");\n  });\n  //----менять стили в футере при ховере конец--------\n\n\n  //----переход между вопросами в тесте начало--------\n  // .test_inner - весь блок\n  // .block_return назад\n  // progress_line вся линия\n  // progress_test сколько закрасить\n\n  let userAuth = false; // авторизован пользователь или нет\n\n  if (userAuth) {\n    $(\"#block_question-email\").remove();\n  }\n\n  let arrQuestions = $(\".block_question\"); // весь список вопросов\n  let activeQuestion = 0; // активный сейчас вопрос. 0 по умолчанию\n  let btnNext = $(\".btn-next\");\n  let btnReturn = $(\".block_return\");\n  let progressLine = $(\".progress_line\"); // вся линия\n  let widthProgressLine = progressLine.width(); // вся линия\n\n  let progressTest = $(\".progress_question\"); // закрашенная линия в зависимости от номера выбранного вопроса\n  let widthProgressQuestion = widthProgressLine / arrQuestions.length;\n\n  function setProgress() {\n    let width = (activeQuestion + 1) * widthProgressQuestion;\n    progressTest.css(\"width\", width + \"px\");\n  }\n\n  let chooseNothing = false;\n\n  function setCheckbox() {\n\n    var others = arrQuestions.eq(activeQuestion).find($('input').not('.nothing'));\n    var btnNothing = arrQuestions.eq(activeQuestion).find($('.nothing'));\n    btnNothing.change(function () {\n      if (this.checked) {\n        others.prop('checked', false);\n        chooseNothing = true;\n      }\n    });\n    others.change(function () {\n      if (this.checked) {\n        btnNothing.prop('checked', false);\n        chooseNothing = false;\n      }\n    });\n  }\n\n  function goTo() {\n    var url = \"course_ready.html\";\n    $(location).attr('href', url);\n  }\n\n  function validateEmail(email) {\n    var re = /\\S+@\\S+\\.\\S+/;\n    return re.test(email.val());\n  }\n\n  function checkAnswers(answers) {\n    if (answers.length == 0) {\n      $('.notification').text(\"Выберите хотя бы один вариант\");\n      $('.notification').css(\"display\", \"block\");\n      $('.notification').fadeOut(4000);\n      return false;\n    } else {\n      return true;\n    }\n  }\n\n  btnNext.on(\"click\", function (e) {\n    e.stopPropagation();\n\n    if (activeQuestion >= arrQuestions.length - 1) {\n      if (userAuth) {\n        if (checkAnswers(arrQuestions.eq(activeQuestion).find($('input:checked')))) {\n          goTo();\n        }\n      } else {\n        if (validateEmail($(\"#email-address\"))) {\n          goTo();\n        } else {\n          $('.notification').text(\"Некорректный email\");\n          $('.notification').css(\"display\", \"block\");\n          $('.notification').fadeOut(4000);\n        }\n      }\n    }\n\n    if (activeQuestion < arrQuestions.length - 1) {\n      if (checkAnswers(arrQuestions.eq(activeQuestion).find($('input:checked')))) {\n        arrQuestions.eq(activeQuestion).addClass(\"hide\");\n        activeQuestion += 1;\n        arrQuestions.eq(activeQuestion).removeClass(\"hide\");\n      }\n      if (activeQuestion == arrQuestions.length - 1) {\n        btnNext.text(\"Готово\");\n      }\n    }\n\n    setProgress();\n    setCheckbox();\n  });\n\n  btnReturn.on(\"click\", function (e) {\n    e.stopPropagation();\n    if (activeQuestion > 0) {\n      arrQuestions.eq(activeQuestion).addClass(\"hide\");\n      activeQuestion -= 1;\n      arrQuestions.eq(activeQuestion).removeClass(\"hide\");\n      if (activeQuestion != arrQuestions.length - 1) {\n        btnNext.text(\"Дальше\");\n      }\n      setProgress();\n    }\n  });\n\n  setProgress();\n  setCheckbox();\n\n  $(window).on(\"resize\", function (e) {\n    widthProgressLine = progressLine.width(); // вся линия\n    widthProgressQuestion = widthProgressLine / arrQuestions.length;\n    setProgress();\n  });\n\n  //----переход между вопросами в тесте  конец--------\n\n  // ----добавлять фон если не загружена картинка начало---\n\n\n  if ($(\".material-el\")) {\n    let materialsEl = $(\".material-el\");\n\n    function checkImg(i) {\n      let blocksImg = materialsEl.eq(i).find($(\".img\"));\n\n      for (var j = 0; j < blocksImg.length; j++) {\n        if (blocksImg.eq(j).find(\"img\").length > 0) {\n          blocksImg.eq(j).css(\"background\", \"transparent\");\n          var srcName = blocksImg.eq(j).find(\"img\")[0].getAttribute('src');\n          var srcNameSplit = srcName.split(\".\");\n          if (srcNameSplit[srcNameSplit.length - 1] == \"svg\") blocksImg.eq(j).find(\"img\").css(\"height\", \"auto\");\n        }\n      }\n    }\n\n    for (var i = 0; i < materialsEl.length; i++) {\n      checkImg(i);\n    }\n  }\n  // ----добавлять фон если не загружена картинка конец ---\n\n  // ------ туду начало-------\n  if ($(\".todo-list_wrapper\")) {\n    let todoHeaderNotDo = $(\"#todo-not-do\");\n    let todoHeaderDone = $(\"#todo-done\");\n    let todoListDone = $(\"#todo-list-done\");\n    let todoListNotDo = $(\"#todo-list-not-do\");\n\n    let arrDescription = $(\".description\");\n    let arrInstruction = $(\".instruction\");\n    let arrBbtnOpenInstr = $(\".el_how-do_btn\");\n    let arrTask = $(\".el_task\");\n\n    let arrBtnCheck = $(\".el-task-checkbox\");\n\n    let arrMarker = $(\".marker\");\n\n    function checkBtn(i) {\n      arrBtnCheck.eq(i).on(\"change\", function (e) {\n        //оправлять на сервер отмеченную таску\n      });\n    }\n\n    for (var i = 0; i < arrBtnCheck.length; i++) {\n      checkBtn(i);\n      arrMarker.eq(i).text(i + 1);\n    }\n\n    function toggleInstrauctionVisibility(i) {\n      arrBbtnOpenInstr.eq(i).on(\"click\", function (e) {\n        let arrow = $(\".btn-arrow_todo\").eq(i);\n        if (arrInstruction.eq(i).hasClass(\"hide\")) {\n          arrInstruction.eq(i).removeClass(\"hide\");\n          arrow.css(\"transform\", \"rotate(90deg)\");\n          followScroll();\n        } else {\n          arrInstruction.eq(i).addClass(\"hide\");\n          arrow.css(\"transform\", \"rotate(0deg)\");\n        }\n      });\n    }\n\n    for (var i = 0; i < arrTask.length; i++) {\n      toggleInstrauctionVisibility(i);\n    }\n\n    todoHeaderNotDo.on(\"click\", function (event) {\n      if (todoListNotDo.hasClass(\"hide\")) {\n        todoListNotDo.removeClass(\"hide\");\n        todoHeaderNotDo.addClass(\"header-border-bottom\");\n        todoHeaderNotDo.find($(\".btn-arrow_header\")).css(\"transform\", \"rotate(180deg)\");\n      } else {\n        todoListNotDo.addClass(\"hide\");\n        todoHeaderNotDo.removeClass(\"header-border-bottom\");\n        todoHeaderNotDo.find($(\".btn-arrow_header\")).css(\"transform\", \"rotate(0deg)\");\n      }\n    });\n\n    todoHeaderDone.on(\"click\", function (event) {\n      if (todoListDone.hasClass(\"hide\")) {\n        todoListDone.removeClass(\"hide\");\n        todoHeaderDone.addClass(\"header-border-bottom\");\n        todoHeaderDone.find($(\".btn-arrow_header\")).css(\"transform\", \"rotate(180deg)\");\n      } else {\n        todoListDone.addClass(\"hide\");\n        todoHeaderDone.removeClass(\"header-border-bottom\");\n        todoHeaderDone.find($(\".btn-arrow_header\")).css(\"transform\", \"rotate(0deg)\");\n      }\n    });\n  }\n  // ------ туду конец-------\n\n  // ----убирать фон если загружена картинк начало ---\n  if ($(\".material\")) {\n    let arrMaterialEl = $(\".material-el\");\n    for (var i = 0; i < arrMaterialEl.length; i++) {\n      if (arrMaterialEl.eq(i).find($('.img')).find('img')) {\n        // arrMaterialEl.eq(i).find($('.img')).css(\"background\", \"transparent\")\n      }\n    }\n  }\n\n  // ----убирать фон если загружена картинк конец  ---\n\n  // ------ горизонтальный скролл начало -----\n\n  function followScroll() {\n    if ($(\".material\").find($('.material-list')) && $(\".material\").find($('.material-list')).length > 0) {\n      var distance = 250;\n      var arrScrollingBox = $(\".material\");\n      var max = [];\n      var min = [];\n\n      function scrollBox(i) {\n        var el = arrScrollingBox.eq(i).find($('.material-list'));\n        var btnRight = arrScrollingBox.eq(i).find($('.arrow-right'));\n        var btnLeft = arrScrollingBox.eq(i).find($('.arrow-left'));\n\n        max[i] = el[0].scrollWidth - el.width();\n\n        if (el[0].scrollWidth <= el.width()) {\n          if (!btnRight.hasClass(\"hide\")) {\n            btnRight.addClass(\"hide\");\n          }\n        } else {\n          if (btnRight.hasClass(\"hide\")) {\n            btnRight.removeClass(\"hide\");\n          }\n        }\n\n        arrScrollingBox.eq(i).find($('button')).on('click', function () {\n\n          el.stop().animate({\n            scrollLeft: '+=' + distance * $(this).data('factor')\n          });\n\n          if (el.scrollLeft() + distance * $(this).data('factor') >= max[i]) {\n            if (!btnRight.hasClass(\"hide\")) {\n              btnRight.addClass(\"hide\");\n            }\n          } else {\n            if (btnRight.hasClass(\"hide\")) {\n              btnRight.removeClass(\"hide\");\n            }\n          }\n\n          if (el.scrollLeft() + distance * $(this).data('factor') <= 0) {\n            if (!btnLeft.hasClass(\"hide\")) {\n              btnLeft.addClass(\"hide\");\n            }\n          } else {\n            if (btnLeft.hasClass(\"hide\")) {\n              btnLeft.removeClass(\"hide\");\n            }\n          }\n        });\n      }\n\n      for (var i = 0; i < arrScrollingBox.length; i++) {\n        scrollBox(i);\n      }\n    }\n  }\n\n  followScroll();\n\n  // ------ горизонтальный скролл конец -----\n\n\n  // ------ ховер на иконку in-coaching начало -----\n  if ($(\".in-coaching\")) {\n    let arrIconsCoaching = $(\".in-coaching\"); // весь список иконок\n    var popup = $('<div class=\"popup\">Это занятие включено в вашу тренировку<div class=\"arrow\"></div></div>');\n    popup.appendTo($(\"body\"));\n\n    function onHoverIcon(i) {\n      arrIconsCoaching.eq(i).on(\"mouseenter\", function (e) {\n        var left = arrIconsCoaching.eq(i).offset().left;\n        popup.css(\"display\", \"block\");\n        var popupWidth = popup.width();\n        var bodyWidth = $(\"body\").width();\n        var shift = bodyWidth - (left + 15 + popupWidth);\n        if (shift < 0) {\n          left += shift;\n          popup.find($(\".arrow\")).css(\"left\", shift * -1 + 15);\n        }\n        popup.css(\"top\", arrIconsCoaching.eq(i).offset().top + 35);\n        popup.css(\"left\", left - 15);\n      }).on('mouseleave', function () {\n        popup.css(\"display\", \"none\");\n        popup.find($(\".arrow\")).css(\"left\", 15);\n      });\n    }\n\n    for (var i = 0; i < arrIconsCoaching.length; i++) {\n      onHoverIcon(i);\n    }\n  }\n\n  // ------ ховер на иконку in-coaching конец -----\n\n\n  // ------ поиск начало ------\n  let panelSearch = $(\"#search-panel\");\n  let btnOpenSearch = $(\"#open-search-btn\");\n  let btnCloseSearch = $(\"#close-search-btn\");\n  let btnSearch = $(\"#search-btn\");\n  let searchInput = $(\"#search_input\");\n  let clearBtn = $(\"#clear-btn\");\n\n  let clearBtnInPage = $(\"#clear-btn-in-page\");\n  let searchBtnInPage = $(\"#search-btn-in-page\");\n  let searchInputInPage = $(\"#search_input-in-page\");\n\n  function toggleSearchVisibility() {\n    // показать, скрыть поиск\n    if (panelSearch.hasClass(\"hide\")) {\n      panelSearch.removeClass(\"hide\");\n      searchInput.focus();\n    } else {\n      panelSearch.addClass(\"hide\");\n    }\n  }\n\n  function openSearchPage(query) {\n    // перейти на страницу с результатами\n    let url = \"/search.html\" + \"?q=\" + query; //для localhost\n    // let url = \"/search/\" + \"?q=\" + query; //для dev\n    $(location).attr('href', url);\n  }\n\n  function clearSearchInput(input, btn) {\n    // очистить инпут с поиском\n    input.val(\"\");\n    btn.addClass(\"hide\");\n  }\n\n  clearBtnInPage.on(\"click\", function (e) {\n    e.stopPropagation();\n    clearSearchInput(searchInputInPage, clearBtnInPage);\n  });\n\n  clearBtn.on(\"click\", function (e) {\n    e.stopPropagation();\n    clearSearchInput(searchInput, clearBtn);\n  });\n\n  searchInput.on('change paste keyup', function () {\n    clearBtn.removeClass(\"hide\");\n  });\n\n  searchInputInPage.on('change paste keyup', function () {\n    clearBtnInPage.removeClass(\"hide\");\n  });\n\n  searchInput.keypress(function (e) {\n    // выполнить поиск по клику на ентер\n    if (e.which == 13) {\n      openSearchPage(searchInput[0].value);\n      clearSearchInput(searchInput, clearBtn);\n    }\n    e.stopPropagation();\n  });\n\n  searchInputInPage.keypress(function (e) {\n    // выполнить поиск по клику на ентер\n    if (e.which == 13) {\n      openSearchPage(searchInputInPage[0].value);\n      clearSearchInput(searchInputInPage, clearBtnInPage);\n    }\n    e.stopPropagation();\n  });\n\n  searchBtnInPage.on(\"click\", function (e) {\n    //выполнить поиск по клику на кнопку\n    openSearchPage(searchInputInPage[0].value);\n    e.stopPropagation();\n  });\n\n  btnOpenSearch.on(\"click\", function (e) {\n    //выполнить поиск по клику на кнопку\n    if (windowWidth < 640) {\n      toggleMenuVisibility();\n    }\n    toggleSearchVisibility();\n    e.stopPropagation();\n  });\n\n  btnCloseSearch.on(\"click\", function (e) {\n    //закрыть поиск по кнопке\n    toggleSearchVisibility();\n    e.stopPropagation();\n  });\n\n  panelSearch.on(\"click\", function (e) {\n    //отклбчить закрытие при клике на блок с поиском\n    e.stopPropagation();\n  });\n\n  btnSearch.on(\"click\", function (e) {\n    //открыть поиск при клике из меню\n    openSearchPage(searchInput[0].value);\n    e.stopPropagation();\n  });\n\n  // ------ конец блока с поискам ------\n\n\n  function onChangeWidth() {\n    // меняет расположение меню\n    var logoImg = $(\"#nav_logo\");\n    if (windowWidth >= 640) {\n      logoImg.attr(\"src\", \"./images/logo.svg\");\n      menuNav.removeClass(\"hide\");\n    } else {\n      logoImg.attr(\"src\", \"./images/logo_small.svg\");\n      menuNav.addClass(\"hide\");\n    }\n    clearSearchInput(searchInput, clearBtn);\n  }\n\n  function toggleMenuVisibility() {\n    // меняет видимость меню. используется для мобилы\n    if (windowWidth < 640) {\n      if (menuNav.hasClass(\"hide\")) {\n        menuNav.removeClass(\"hide\");\n      } else {\n        menuNav.addClass(\"hide\");\n      }\n    }\n  }\n\n  $('body').on(\"click\", function (e) {\n    if (windowWidth < 640) {\n      if (!menuNav.hasClass(\"hide\")) {\n        //закрыть меню при клике в любое место. используется для мобилы\n        toggleMenuVisibility();\n      }\n    }\n    if (!panelSearch.hasClass(\"hide\")) {\n      //закрыть поиск при клике в любое место. используется для мобилы\n      toggleSearchVisibility();\n      clearSearchInput(searchInput, clearBtn);\n    }\n    e.stopPropagation();\n  });\n\n  menuNavBtn.on(\"click\", function (e) {\n    toggleMenuVisibility();\n    e.stopPropagation();\n  });\n\n  // -----начало прогресса----\n  // let progressSkillDigital = 100 // будет приходить с сервера\n  // let progressSkillTwo = 23 // будет приходить с сервера\n  // let progressSkillThree = 53 // будет приходить с сервера\n  //\n  // $(\"#progress_skill-digital\").text(progressSkillDigital)\n  // $(\"#progress_skill-personal\").text(progressSkillTwo)\n  // $(\"#progress_skill-financial\").text(progressSkillThree)\n  //\n  // let progressSkillDigitalStyle = \"linear-gradient(rgb(255, 255, 255), rgb(255, 255, 255)), conic-gradient(#21AF73 \" + progressSkillDigital + \"%, #D8EDE4 \" + progressSkillDigital + \"%)\"\n  // $(\"#skill-digital\").css({\"background-image\": progressSkillDigitalStyle})\n  //\n  // let progressSkillPersonalStyle = \"linear-gradient(rgb(255, 255, 255), rgb(255, 255, 255)), conic-gradient(#5C59EB \" + progressSkillTwo + \"%, #D9D9EE \" + progressSkillTwo + \"%)\"\n  // $(\"#skill-personal\").css({\"background-image\": progressSkillPersonalStyle})\n  //\n  // let progressSkillFinancialStyle  = \"linear-gradient(rgb(255, 255, 255), rgb(255, 255, 255)), conic-gradient(#1299C6 \" + progressSkillThree + \"%, #D9E9EE \" + progressSkillThree + \"%)\"\n  // $(\"#skill-financial\").css({\"background-image\": progressSkillFinancialStyle })\n\n\n  function toggleProgressTitleLocation() {\n    //перемещает тайтлы прогрессов\n    let skills = $(\".skill\"),\n        skillTitle = $(\".skill-title\"),\n        skillWrapper = $(\".skill_wrapper\");\n\n    if ($('body').innerWidth() >= 1200) {\n      for (var i = 0; i < skills.length; i++) {\n        skillTitle.eq(i).appendTo(skills.eq(i));\n      }\n    } else {\n      for (var i = 0; i < skills.length; i++) {\n        skillTitle.eq(i).appendTo(skillWrapper.eq(i));\n      }\n    }\n\n    if ($('.progress_popup_inner')) {\n      let skillsPopup = $('.progress_popup_inner').find($(\".skill\"));\n      let skillTitlePopup = $('.progress_popup_inner').find($(\".skill-title\")),\n          skillWrapperPopup = $('.progress_popup_inner').find($(\".skill_wrapper\"));\n\n      if ($('body').innerWidth() >= 640) {\n        for (var i = 0; i < skillsPopup.length; i++) {\n          skillTitlePopup.eq(i).appendTo(skillsPopup.eq(i));\n        }\n      } else {\n        for (var i = 0; i < skills.length; i++) {\n          skillTitlePopup.eq(i).appendTo(skillWrapperPopup.eq(i));\n        }\n      }\n    }\n  }\n\n  $(window).on(\"resize\", function (e) {\n    toggleProgressTitleLocation();\n  });\n  window.toggleProgressTitleLocation = toggleProgressTitleLocation();\n  toggleProgressTitleLocation();\n\n  // -----конец прогресса----\n\n\n  onChangeWidth();\n  clearSearchInput(searchInput, clearBtn);\n\n  $(window).on(\"resize\", function (e) {\n    windowWidth = $('body').innerWidth();\n    onChangeWidth();\n    followScroll();\n  });\n});\n\n//# sourceURL=webpack://personal_security/./src/app/index.js?");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??ruleSet[1].rules[0].use[1]!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/app.scss":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ruleSet[1].rules[0].use[1]!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/app.scss ***!
  \*******************************************************************************************************************************************************************************************/
/***/ (() => {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://personal_security/./src/style/app.scss?./node_modules/mini-css-extract-plugin/dist/loader.js??ruleSet%5B1%5D.rules%5B0%5D.use%5B1%5D!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./src/style/app.scss":
/*!****************************!*\
  !*** ./src/style/app.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ruleSet_1_rules_0_use_1_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/mini-css-extract-plugin/dist/loader.js??ruleSet[1].rules[0].use[1]!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./app.scss */ \"./node_modules/mini-css-extract-plugin/dist/loader.js??ruleSet[1].rules[0].use[1]!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/app.scss\");\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ruleSet_1_rules_0_use_1_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ruleSet_1_rules_0_use_1_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_1__);\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()((_node_modules_mini_css_extract_plugin_dist_loader_js_ruleSet_1_rules_0_use_1_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_1___default()), options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((_node_modules_mini_css_extract_plugin_dist_loader_js_ruleSet_1_rules_0_use_1_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_1___default().locals) || {});\n\n//# sourceURL=webpack://personal_security/./src/style/app.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://personal_security/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app/index.js");
/******/ 	
/******/ })()
;