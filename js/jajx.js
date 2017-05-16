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

   $('.contentbox').on('click', "p", function () {
     $(this).parent().children('div').toggle('normal');
     return false;
   });

   $('.contentbox').on('click', "button", function () {
     showMap(this);
     return false;
   });

   $('.contentbox').on('change', ".val-selector", function () {
     Value = $(this).val();
     $('.stuff-holder').html((curPage == 'items')?showItems():showMobs());
     return false;
   });


   $('.contentbox').on('change', ".prop-selector", function () {
     Property = $(this).val();
     $(this).parent().parent().children('.div-val').html(addSelect(curPage));
     return false;
   });







   /* NAVIGATOR */


   $('.nav-button').click(function () {
     $('.contentbox').html('');
     id = $(this).attr("id");
     switch (id) {
       case 'home':
         break;
       case 'items':
       case 'mobs':
         curPage =  id;
         $('.contentbox').html(makeSelectHTML(curPage));
         break;
       case 'events':
         $('.contentbox').html(makeEventHTML());
         break;
       case 'maps':
         $('.contentbox').html(makeMapHTML());
         break;
       case 'quests':
         break;
     }

   });
 });