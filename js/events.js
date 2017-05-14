function makeEventHTML(){
    var newHTML = '';
    for(var i in events) {
        newHTML += '<div class ="spoiler">';
        newHTML += '<p class="sp-title">' + events[i].name + '</p>';
        newHTML += '<div class="sp-content">' + events[i].description + '</div>';
        newHTML += '</div>';
    }
    return newHTML;
}