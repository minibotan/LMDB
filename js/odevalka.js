var bull = true;

function makeOdevalka(){
    var newHTML = '';
    newHTML += '<div><button id="odevalka-change">'+ odevalkastate[bull] + '</button></div>';
    newHTML += firstChar();
    return newHTML;
}




function firstChar(){
    var r = '<div class="char"><table>';
    r += '<tr><td class="borderedpic head" /><td class="doll" colspan="5" rowspan="5" /><td class="borderedpic neck" /></tr>';
    r += '<tr><td class="borderedpic chest" /><td class="borderedpic ring" /></tr>';
    r += '<tr><td class="borderedpic cloak" /><td class="borderedpic ring" /></tr>';
    r += '<tr><td class="borderedpic belt" /><td class="borderedpic trinket" /></tr>';
    r += '<tr><td class="borderedpic legs" /><td class="borderedpic trinket" /></tr>';
    r += '<tr><td class="borderedpic boots" /><td class="borderedpic gloves" /><td class="borderedpic weapon" /><td class="sep"/><td class="borderedpic weapon" /><td class="borderedpic rune" /><td class="borderedpic totem" /></tr>';
    r += '</table></div>';
    return r;
}

function secondChar(){
    var r = '<div class="char reversed"><table>';
    r += '<tr><td class="borderedpic neck" /><td class="doll" colspan="5" rowspan="5" /><td class="borderedpic head" /></tr>';
    r += '<tr><td class="borderedpic ring" /><td class="borderedpic chest" /></tr>';
    r += '<tr><td class="borderedpic ring" /><td class="borderedpic cloak" /></tr>';
    r += '<tr><td class="borderedpic trinket" /><td class="borderedpic belt" /></tr>';
    r += '<tr><td class="borderedpic trinket" /><td class="borderedpic legs" /></tr>';
    r += '<tr><td class="borderedpic totem" /><td class="borderedpic rune" /><td class="borderedpic weapon" /><td class="sep"/><td class="borderedpic weapon" /><td class="borderedpic gloves" /><td class="borderedpic boots" /></tr>';
    r += '</table></div>';
    return r;

}


function chooseItem(itemtype){
    var p = '<select size="5" class="itemselect">';
        for (var i in items) {
            if(items[i].type == itemtype){
                p += itemOption(i);
            }
        }
    p+= '</p>';
    return p;

}

function itemOption(itemid){
    var item = items[itemid];
    var p ='<option value="' + itemid + '">';
    p += '<img class="' + item.rarity + ' borderedpic" src="http://static.lostmagic.ru/play/lib/jpg/' + item.image + '.jpg">';
    p += item.name;
    p+= '</option>';
    return p;
}