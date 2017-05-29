function makeEventHTML(){
    var newHTML = '<div class="events-block">';
    newHTML += '<div class ="event-selector">';
    for(var i in events) {
        newHTML += '<option class="event-title" value="'+i+'">' + events[i].name + '</option>';
    }
    newHTML += '</div>';
    newHTML += '<div class ="events-content">';
    newHTML += '<div class="event-descr">Выберите Событие</div>';
    newHTML += '<div class="event-img">Картиночка</div>';
    newHTML += '<div class="event-loc">Локация</div>';
    newHTML += '<div class="event-misc">'
    newHTML += '<div class="event-cd">КД</div>';
    newHTML += '<div class="event-start">уровень</div>';
    newHTML += '<div class="event-end">уровень</div>';
    newHTML += '</div>';
    newHTML += '</div>';
    return newHTML;
}



function showEvent(event){
    $('.event-descr').html(event.description);
    $('.event-img').html('<img class="borderedpic" src="img/events/'+event.img+'.png"/>');
    $('.event-loc').html("Локация: "+event.location);
    $('.event-cd').html('КД: '+event.cd);
    $('.event-start').html("С "+event.start+" уровня");
    $('.event-end').html("До "+event.end+" уровня");
}