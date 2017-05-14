function makeMapHTML(){
    var newHTML = '<div class="map-button-bar">';
    for(var i in maps) {
        newHTML += '<button class="map-button" id="' + maps[i].id + '" >' + maps[i].nm + '</button>';
    }
    newHTML += '</div><img class="pic-holder"></img>';
    return newHTML;
}



function showMap(but) {
    var p = 'img/karta_' + $(but).attr("id") + '.png';
    $(".pic-holder").attr('src', p);
    return true;
}