
$(document).ready(function() {
  // отрисовка общего прогресса на главной
  let progressData = 73 // будет приходить с сервера
  $("#progress_line > .progress_line-inner").css("width", progressData + "%")
  $("#progress").text(progressData)

})
