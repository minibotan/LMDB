function makeMapHTML(){
    var newHTML = '<div class="map-button-bar">';
    for(var i in maps) {
        newHTML += '<button class="map-button" id="' + maps[i].id + '" >' + maps[i].nm + '</button>';
    }
    newHTML += '</div><div class="pic-holder"></div>';
    return newHTML;
}


function showMap(but) {
    alert('2 '+$(but).attr("id"));
    var pic = '<img src="img/karta_'+$(but).attr("id")+'.png">';
    $(but).parent().children('div.pic-holder').html(pic);
    alert('3');
    return false;
}