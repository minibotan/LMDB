function makeEventHTML(){
    var p = '<div class="events_block">';
    p += '<div class ="event_selector">';
    for(var i in events) {
        p += '<option class="event_title" value="'+i+'">' + events[i].name + '</option>';
    }
    p += '</div>';
    p += '<div class ="events_content">';
    p += '<div class="event_descr">Выберите Событие</div>';
    p += '<div class="event_img">Картиночка</div>';
    p += '<div class="event_loc">Локация</div>';
    p += '<div class="event_misc">'
    p += '<div class="event_cd">КД</div>';
    p += '<div class="event_start">уровень</div>';
    p += '<div class="event_end">уровень</div>';
    p += '</div>';
    p += '</div>';
    return p;
}



function showEvent(event){
    $('.event_descr').html(event.description);
    $('.event_img').html('<img class="borderedpic" src="img/events/'+event.img+'.png"/>');
    $('.event_loc').html("Локация: "+event.location);
    $('.event_cd').html('КД: '+event.cd);
    $('.event_start').html("С "+event.start+" уровня");
    $('.event_end').html("До "+event.end+" уровня");
}