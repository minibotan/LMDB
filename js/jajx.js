 $('body').css("background", "url('http://www.lostmagic.ru/useruploads/images/desk" + (Math.trunc(Math.random() * 5) + 1) + "_1920x1200.jpg') no-repeat center center fixed");

 $(document).ready(function () {

   //nav-panel buttons
   $('#nav-bar').html(function () {
     var newHtml = '';
     for (var x in mainButtons) {
       newHtml += '<button class="nav-button" id="' + mainButtons[x] + '" >' + x + '</button>';
     }
     return newHtml;
   });

   $('.contentbox').on('change', ".event-selector", function () {
     showEvent(events[$(this).val()]);
     return false;
   });

   $('.contentbox').on('click', ".map-button", function () {
     showMap(this);
     return false;
   });

  $('.contentbox').on('click', "#odevalka-change", function () {
    if(bull){
     $(this).parent().parent().append(secondChar());
    } else {
      $('.reversed').remove();
    }
     bull = !bull;
     $('#odevalka-change').html(odevalkastate[bull]);
     //$('table').html($('tr.widget_view_row_even').get().reverse());
     return false;
   });


   $('.contentbox').on('change', ".val-selector", function () {
     Value = $(this).val();
     $('.stuff-holder').html(($(curPage).attr('id') == 'items')?showItems():showMobs());
     return false;
   });


   $('.contentbox').on('change', ".prop-selector", function () {
     Property = $(this).val();
     $(this).parent().parent().children('.div-val').html(addSelect($(curPage).attr('id')));
     return false;
   });



   /* NAVIGATOR */


   $('.nav-button').click(function () {
     $('.contentbox').html('');
     $(curPage).css('background', 'none');
     $(this).css('background', '#888');
     id = $(this).attr("id");
     curPage =  this;
     switch (id) {
       case 'home':
         break;
       case 'items':
       case 'mobs':
         $('.contentbox').html(makeSelectHTML(id));
         break;
       case 'events':
         $('.contentbox').html(makeEventHTML());
         break;
       case 'maps':
         $('.contentbox').html(makeMapHTML());
         break;
       case 'odevalka':
         $('.contentbox').html(makeOdevalka());
         break;
     }

   });
 });