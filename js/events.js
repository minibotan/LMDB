function makeEventHTML(){
    var newHTML = '';
    for(var i in events) {
        newHTML += '<div class ="spoiler">';
        newHTML += '<a class="sp-title">' + events[i].name + '</a>';
        newHTML += '<div class="sp-content">' + events[i].description + '</div>';
        newHTML += '</div>';
    }
    return newHTML;
}