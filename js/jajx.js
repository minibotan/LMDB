 $('body').css("background", "url('http://www.lostmagic.ru/useruploads/images/desk" + (Math.trunc(Math.random() * 5) + 1) + "_1920x1200.jpg') no-repeat center center fixed");

 $(document).ready(function () {

   /*               NAVIGATOR  & SETTINGS                   */


   //settings
   $('.settings_bar').on('click', 'li', function(){
     var id = $(this).attr('id');
     settings[id].val = !settings[id].val;
     $(this).html(settings[id][settings[id].val]);
     change(id);
   });

   //nav_panel buttons
   $('.nav_bar').html(function () {
     var newHtml = '';
     for (var x in mainButtons) {
       newHtml += '<button class="nav_button" id="' + mainButtons[x] + '" >' + x + '</button>';
     }
     return newHtml;
   });


   //navigation events
   $('.nav_button').click(function () {
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
         recalculate($('.char'));
         break;
      default: 
         $('.contentbox').html('<p>Тут пока ничего нет, но возможно, скоро что-то появится</p>');
     }

   });


   /*                    CONTENT                       */

   //events
   $('.contentbox').on('click', ".event_title", function () {
     showEvent(events[$(this).val()]);
     return false;
   });


   //maps
   $('.contentbox').on('click', ".map_button", function () {
     showMap(this);
     return false;
   });


   //items & mobs
   $('.contentbox').on('change', ".prop_selector", function () {
     Property = $(this).val();
     $(this).parent().parent().children('.div_val').html(addSelect($(curPage).attr('id')));
     return false;
   });

   $('.contentbox').on('change', ".val_selector", function () {
     counter = 0;
     $('.stuff_holder').empty();
     Value = $(this).val();
     $('.stuff_holder').html('<button class ="moar_button">ЕЩЕ!</button>');
     showContent();
     return false;
   });

   $('.contentbox').on('click', ".moar_button", function () {
      showContent();
      console.log(counter);
      return false;
   }); 


   // odevalka
   $('.contentbox').on('click', "#odevalka_change", function () {
      if(bull){
      $(this).parent().parent().append(secondChar());
      recalculate($('.reversed'));
    } else {
      $('.reversed').remove();
    }
      bull = !bull;
      $('#odevalka_change').html(odevalkastate[bull]);
      return false;
   });

   $('.contentbox').on('click', ".char .itemslot", function () {
     $(this).html(chooseItem($(this).attr("class").split(' ')));
     return false;
   });

   $('.contentbox').on('mouseleave', '.char .itemselect', function() {
      $(this).remove();
   });

   $('.contentbox').on('click', ".char .option", function () {
     var selected = $(this);
     equipItem2($(this).parent().parent().empty(), selected.attr("value"));
     
     return false;
   });



   
 });


 function tmp(){
   var p = '<h2> Это список из локаций. Названий у меня нет. И скоро я уберу этот список.<br>Кто успел, тот посмотрел</h2>';
   p += '<ol>';
   for(var i = 1; i < 10; i++) {
      p+=  '<li><img src="http://static.lostmagic.ru/play/lib/location/0'+i+'.jpg"></li>';
   }
   for(var i = 10; i < 300; i++) {
      p+=  '<li><img src="http://static.lostmagic.ru/play/lib/location/'+i+'.jpg"></li>';
   }
   p+= '</ol>';
   return p;
 }


var last = 1;

  function locationObjects(k){
    if(k !== undefined) {
      last = k*100 +1;
    }
   var p = '<h2> Это список из объектов в локациях. Названий у меня нет. И скоро я уберу этот список.<br>Кто успел, тот посмотрел</h2>';
   p += '<ol>';
   for(var i = last; i < last+100; i++) {
     p+='<li>';
    var swfsrc = 'http://static.lostmagic.ru/play/lib/locationObjects/general/'+i+'.swf';
    p+= '<object type="application/x-shockwave-flash" width="970" height="330">';
    p+= '<param name="movie" value="'+swfsrc+'">';
    p+= '<embeded src="'+swfsrc+'"></embeded>'; 
    p+= '<param name="wmode" value="transparent" />';
    p+= '<param name="allowScriptAccess" value="always" />';
    p+= '<param name="flashvars" value="stage=1"/>';
    p+= '<param name="play" value="true" />';
    p+= '<param name="loop" value="true" />';
    p+= '<param name="scale" value="noScale" />';
    p+= '</object>';
    p+= '<a href="'+swfsrc+'" a> ссылочка </a>'; 
    p+= '</li>';
   }
   p+= '</ol>';
   last+=100;
   $('.contentbox').html(p);
 }