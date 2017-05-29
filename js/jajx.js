 $('body').css("background", "url('http://www.lostmagic.ru/useruploads/images/desk" + (Math.trunc(Math.random() * 5) + 1) + "_1920x1200.jpg') no-repeat center center fixed");

 $(document).ready(function () {

   //nav-panel buttons
   $('.nav-bar').html(function () {
     var newHtml = '';
     for (var x in mainButtons) {
       newHtml += '<button class="nav-button" id="' + mainButtons[x] + '" >' + x + '</button>';
     }
     return newHtml;
   });

   $('.contentbox').on('click', ".event-title", function () {
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

   $('.contentbox').on('click', ".char td", function () {
     $(this).html(chooseItem($(this).attr("class").split(' ')));
     return false;
   });

   $('.contentbox').on('click', ".char .option", function () {
     var selected = $(this);
     equipItem2($(this).parent().parent().empty(), selected.attr("value"));
     
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
        $('.contentbox').html(tmp());
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
      default: 
         $('.contentbox').html('<p>Тут пока ничего нет, но возможно, скоро что-то появится</p>');
     }

   });
 });



 function tmp(){
   var p = '<h2> Это список из гильдийных значков. Названий у меня нет. И скоро я уберу этот список.<br>Кто успел, тот посмотрел</h2>';
   p += '<ol>';
   var i = 1;
   while (i < 400) {
   p+= '<li>';
   p+='<img src="http://static.lostmagic.ru/play/lib/clan/'+i+'.png"'
   p+='</li>';
   i++;
   }
   p+= '</ol>';
   return p;
 }