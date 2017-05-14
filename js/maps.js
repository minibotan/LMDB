function makeMapHTML(){
    var newHTML = '<div class="map-button-bar">';
    for(var i in maps) {
        newHTML += '<button class="map-button" id="' + maps[i].id + '" >' + maps[i].nm + '</button>';
    }
    newHTML += '</div>';
    return newHTML;
}