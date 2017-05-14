 $('body').css("background", "url('http://www.lostmagic.ru/useruploads/images/desk" + (Math.trunc(Math.random() * 5) + 1) + "_1920x1200.jpg') no-repeat center center fixed");
 
$(document).ready(function () {

  //nav-panel buttons
  $('#nav-bar').html(function () {
    var newHtml = '';
    for (var x in mainButtons) {
      newHtml += '<button class="nav-button" id="' + mainButtons[x].id + '" >' + mainButtons[x].nm + '</button>';
    }
    return newHtml;
  });

  $('.eventbox').on('click', "a", function () {
    $(this).parent().children('div').toggle('normal');
    return false;
  });

  $('.mapbox').on('click', "button", function (){
    showMap(this);
    return false;
  });

  $('.nav-button').click(function () {
    $('.itembox').html('');
    $('.eventbox').html('');
    $('.mapbox').html('');
    switch ($(this).attr("id")) {
      case 'home':
        break;
      case 'items':
         $('.itembox').html(makeItemHTML());
        break;
      case 'mobs':
        break;
      case 'events':
        $('.eventbox').html(makeEventHTML());
        break;
      case 'maps':
        $('.mapbox').html(makeMapHTML());
        break;
      case 'quests':
        break;
    }

  });
});