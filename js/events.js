function makeEventHTML(){
    var newHTML = '<div class="events_block">';
    newHTML += '<div class ="event_selector">';
    for(var i in events) {
        newHTML += '<option class="event_title" value="'+i+'">' + events[i].name + '</option>';
    }
    newHTML += '</div>';
    newHTML += '<div class ="events_content">';
    newHTML += '<div class="event_descr">Выберите Событие</div>';
    newHTML += '<div class="event_img">Картиночка</div>';
    newHTML += '<div class="event_loc">Локация</div>';
    newHTML += '<div class="event_misc">'
    newHTML += '<div class="event_cd">КД</div>';
    newHTML += '<div class="event_start">уровень</div>';
    newHTML += '<div class="event_end">уровень</div>';
    newHTML += '</div>';
    newHTML += '</div>';
    return newHTML;
}



function showEvent(event){
    $('.event_descr').html(event.description);
    $('.event_img').html('<img class="borderedpic" src="img/events/'+event.img+'.png"/>');
    $('.event_loc').html("Локация: "+event.location);
    $('.event_cd').html('КД: '+event.cd);
    $('.event_start').html("С "+event.start+" уровня");
    $('.event_end').html("До "+event.end+" уровня");
}