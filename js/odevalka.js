var bull = true;

function makeOdevalka(){
    var newHTML = '';
    newHTML += '<div><button id="odevalka-change">'+ odevalkastate[bull] + '</button></div>';
    newHTML += firstChar();
    return newHTML;
}




function firstChar(){
    var r = '<div class="char"><table>';
    r += '<tr><td class="itemslot head" /><td class="doll" colspan="5" rowspan="5" /><td class="itemslot neck" /></tr>';
    r += '<tr><td class="itemslot chest" /><td class="itemslot ring" /></tr>';
    r += '<tr><td class="itemslot cloak" /><td class="itemslot ring" /></tr>';
    r += '<tr><td class="itemslot belt" /><td class="itemslot trinket" /></tr>';
    r += '<tr><td class="itemslot legs" /><td class="itemslot trinket" /></tr>';
    r += '<tr><td class="itemslot boots" /><td class="itemslot gloves" /><td class="itemslot weapon rweapon twohandedweapon" /><td class="sep"/><td class="itemslot weapon lweapon shield" /><td class="itemslot rune" /><td class="itemslot totem" /></tr>';
    r += '</table></div>';
    return r;
}

function secondChar(){
    var r = '<div class="char reversed"><table>';
    r += '<tr><td class="itemslot neck" /><td class="doll" colspan="5" rowspan="5" /><td class="itemslot head" /></tr>';
    r += '<tr><td class="itemslot ring" /><td class="itemslot chest" /></tr>';
    r += '<tr><td class="itemslot ring" /><td class="itemslot cloak" /></tr>';
    r += '<tr><td class="itemslot trinket" /><td class="itemslot belt" /></tr>';
    r += '<tr><td class="itemslot trinket" /><td class="itemslot legs" /></tr>';
    r += '<tr><td class="itemslot totem" /><td class="itemslot rune" /><td class="itemslot weapon lweapon shield" /><td class="sep"/><td class="itemslot weapon rweapon twohandedweapon" /><td class="itemslot gloves" /><td class="itemslot boots" /></tr>';
    r += '</table></div>';
    return r;

}


function chooseItem(itemtype){
    var p = '<div size="5" class="itemselect">';
        for (var i in items) {
            for(var j in itemtype) {
                if(items[i].type == itemtype[j]){
                    p += itemOption(i);
                }
            }
        }
    p+= '</div>';
    return p;

}

function itemOption(itemid){
    var item = items[itemid];
    var p ='<div class="option" value="' + itemid + '">';
    p += '<img class="' + item.rarity + ' borderedpic" src="http://static.lostmagic.ru/play/lib/jpg/' + item.image + '.jpg">';
    p += '<span>'+item.name+'</span>';
    p+= '</div>';
    return p;
}

function equipItem(slot, itemid){
    var item = items[itemid];
    $(slot).html('<img class="' + item.rarity + ' borderedpic" src="http://static.lostmagic.ru/play/lib/jpg/' + item.image + '.jpg">');

}

function equipItem2(slot, itemid){
    var item = items[itemid];
    $(slot).toggleClass("borderedpic " + item.rarity);
    $(slot).css("background", "url('http://static.lostmagic.ru/play/lib/jpg/" + item.image + ".jpg') no-repeat center center");
}