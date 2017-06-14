var bull = true;

var nulldstats = {
    "minhit": 0,
    "maxhit": 0,
    "defence": 0,
    "strength": 0,
    "agility": 0,
    "stamina": 0,
    "crit": 0,
    "dodge": 0,
    "mastery": 0,
    "resilience": 0
}


function makeOdevalka(){
    var newHTML = '';
    newHTML += '<div class="buttonholder"><button id="odevalka_change">'+ odevalkastate[bull] + '</button></div>';
    newHTML += firstChar();
    return newHTML;
}




function firstChar(){
    var r = '<div class="char norm"><div><table>';
    r += '<tr><td class="itemslot head" /><td class="doll" colspan="5" rowspan="5" /><td class="itemslot neck" /></tr>';
    r += '<tr><td class="itemslot chest" /><td class="itemslot ring" /></tr>';
    r += '<tr><td class="itemslot cloak" /><td class="itemslot ring" /></tr>';
    r += '<tr><td class="itemslot belt" /><td class="itemslot trinket" /></tr>';
    r += '<tr><td class="itemslot legs" /><td class="itemslot trinket" /></tr>';
    r += '<tr><td class="itemslot boots" /><td class="itemslot gloves" /><td class="itemslot weapon rweapon twohandedweapon" /><td class="sep"/><td class="itemslot weapon lweapon shield" /><td class="itemslot rune" /><td class="itemslot totem" /></tr>';
    r += '</table></div>';
    r += stats();
    r+= '</div>';
    return r;
}

function secondChar(){
    var r = '<div class="char reversed">';
    r += stats();
    r += '<div><table>';
    r += '<tr><td class="itemslot neck" /><td class="doll" colspan="5" rowspan="5" /><td class="itemslot head" /></tr>';
    r += '<tr><td class="itemslot ring" /><td class="itemslot chest" /></tr>';
    r += '<tr><td class="itemslot ring" /><td class="itemslot cloak" /></tr>';
    r += '<tr><td class="itemslot trinket" /><td class="itemslot belt" /></tr>';
    r += '<tr><td class="itemslot trinket" /><td class="itemslot legs" /></tr>';
    r += '<tr><td class="itemslot totem" /><td class="itemslot rune" /><td class="itemslot weapon lweapon shield" /><td class="sep"/><td class="itemslot weapon rweapon twohandedweapon" /><td class="itemslot gloves" /><td class="itemslot boots" /></tr>';
    r += '</table></div></div>';
    return r;

}

function stats(){
    var r='';
    r += '<div class ="char_stats">';
    r += '<div class="level"><div class="statname">Уровень:</div><input type="number" min="1" max="20" value="20" class="whitestat"></input></div>'
    r += '<div class="maxhit"><div class="statname">Макс. урон:</div><span class="greenstat"></span></div>';
    r += '<div class="minhit"><div class="statname">Мин. урон:</div><span class="greenstat"></span></div>';
    r += '<div class="defence"><div class="statname">Защита:</div><span class="greenstat"></span></div>';
    r += '<div class="strength"><div class="statname">Сила:</div><input type="number" value="3" size="" class="whitestat"/>+<span class="greenstat"></span></div>';
    r += '<div class="agility"><div class="statname">Ловкость:</div><input type="number" value="3" size="3" class="whitestat"/>+<span class="greenstat"></span></div>';
    r += '<div class="stamina"><div class="statname">Выносливость:</div><input type="number" value="3" size="3" class="whitestat"/>+<span class="greenstat"></span></div>';
    r += '<div class="crit"><div class="statname">Крит:</div><span class="greenstat"></span>%</div>';
    r += '<div class="dodge"><div class="statname">Уворот:</div><span class="greenstat"></span>%</div>';
    r += '<div class="mastery"><div class="statname">Мастерство:</div><span class="greenstat"></span></div>';
    r += '<div class="resilience"><div class="statname">Устойчивость:</div><span class="greenstat"></span></div>';
    r += '</div>';
    return r;
}


function chooseItem(itemtype){
    var p = '<div size="5" class="itemselect">'; 
    if("borderedpic" == itemtype[2]){
    p +='<div class="option" value="-1">';
    p += '<img class="common borderedpic option_item_img" src="http://static.lostmagic.ru/play/lib/jpg/0.jpg">';
    p += '<div class="option_item_name">Снять</div>';
    p += '</div>';
    }
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
    p += '<img class="' + item.rarity + ' borderedpic option_item_img" src="http://static.lostmagic.ru/play/lib/jpg/' + item.image + '.jpg">';
    p += '<div class="option_item_name">'+item.name+'</div>';
    p+= '</div>';
    return p;
}

function equipItem2(slot, itemid){
    $(slot).removeClass("rare epic legendary common uncommon borderedpic");
    if(itemid == -1) {
        $(slot).css("background", "none");    
        $(slot).removeAttr("value");
        recalculate($(slot).parents(".char"));    
        return;
    }
    var item = items[itemid];
    $(slot).css("background", "url('http://static.lostmagic.ru/play/lib/jpg/" + item.image + ".jpg') center center");
    $(slot).addClass("borderedpic " + item.rarity);
    $(slot).attr("value", itemid);
    recalculate($(slot).parents(".char"));
}



function recalculate(char){





    var nulldstats = {
        "minhit": 0,
        "maxhit": 0,
        "defence": 0,
        "strength": 0,
        "agility": 0,
        "stamina": 0,
        "crit": 0,
        "dodge": 0,
        "mastery": 0,
        "resilience": 0
    }
    //console.log(char.attr('class').split(' ')[1] + ' .itemslot');
    $('.'+char.attr('class').split(' ')[1] + ' .itemslot').each(function(index, element){
        //console.log($(element).attr("value"));
        if ($(element).attr('value')){
            for(var i in nulldstats) {
                nulldstats[i] += (items[$(element).attr("value")][i])?(items[$(element).attr("value")][i]):(0);
                //console.log(i + ' ' + nulldstats[i] + ' ' + $(element).attr("value") + ' ' + items[$(element).attr("value")][i]);
            }
        }
    });

    for(var i in nulldstats) {
        $('.'+char.attr('class').split(' ')[1] + ' .' + i + ' span').html(nulldstats[i]);
    }

}