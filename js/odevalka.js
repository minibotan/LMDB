var bull = true;

var baseStats = {
    'strength': 3,
    'agility': 3,
    'stamina': 3,
}

var statbonus = {
    '2': 'stamina',
    '3': 'strength',
    '4': 'agility',
    '5': 'stamina',
    '6': 'strength',
    '7': 'agility',
    '8': 'stamina',
    '9': 'strength',
    '10': 'agility',
    '11': 'stamina',
    '12': 'strength',
    '13': 'agility',
    '14': 'stamina',
    '15': 'strength',
    '16': 'agility',
    '17': 'stamina',
    '18': 'strength',
    '19': 'agility',
    '20': 'stamina',
    '21': 'strength',
    '22': 'agility',
    '23': 'stamina'
}

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


function makeOdevalka() {
    var newHTML = '';
    newHTML += '<div class="buttonholder"><button id="odevalka_change">' + odevalkastate[bull] + '</button></div>';
    newHTML += firstChar();
    return newHTML;
}




function firstChar() {
    var r = '<div class="char norm"><div><table>';
    r += '<tr><td class="itemslot head" /><td class="doll" colspan="5" rowspan="5" /><td class="itemslot neck" /></tr>';
    r += '<tr><td class="itemslot chest" /><td class="itemslot ring" /></tr>';
    r += '<tr><td class="itemslot cloak" /><td class="itemslot ring" /></tr>';
    r += '<tr><td class="itemslot belt" /><td class="itemslot trinket" /></tr>';
    r += '<tr><td class="itemslot legs" /><td class="itemslot trinket" /></tr>';
    r += '<tr><td class="itemslot boots" /><td class="itemslot gloves" /><td class="itemslot weapon rweapon twohandedweapon" /><td class="sep"/><td class="itemslot weapon lweapon shield" /><td class="itemslot rune" /><td class="itemslot totem" /></tr>';
    r += '</table></div>';
    r += stats();
    r += '</div>';
    return r;
}

function secondChar() {
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

function stats() {
    var r = '';
    r += '<div class ="char_stats">';
    r += '<div class="level"><div class="statname">Уровень:</div><input type="number" value="1" class="whitestat"></input></div>'
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


function chooseItem(cell) {
    var itemtype = cell.attr("class").split(' ')
    var p = '<div size="5" class="itemselect">';
    if ("borderedpic" == itemtype[2]) {
        p += '<div class="option" value="-1">';
        p += '<img class="common borderedpic option_item_img" src="http://static.lostmagic.ru/play/lib/jpg/0.jpg">';
        p += '<div class="option_item_name">Снять</div>';
        p += '</div>';
    }
    for (var i in items) {
        for (var j in itemtype) {
            if (items[i].type == itemtype[j] &&
                (items[i].reqlevel <= cell.parents('.char').find('.level input').val())) {
                p += itemOption(i);
            }
        }
    }
    p += '</div>';
    return p;

}

function itemOption(itemid) {
    var item = items[itemid];
    var p = '<div class="option" value="' + itemid + '">';
    p += '<img class="' + item.rarity + ' borderedpic option_item_img" src="http://static.lostmagic.ru/play/lib/jpg/' + item.image + '.jpg">';
    p += '<div class="option_item_name">' + item.name + '</div>';
    p += '</div>';
    return p;
}

function equipItem2(slot, itemid) {
    $(slot).removeClass("rare epic legendary common uncommon borderedpic");
    if (itemid == -1) {
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



function recalculate(char) {
    var chrClass = char.attr('class').split(' ')[1];




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
    //console.log(chrClass + ' .itemslot');
    $('.' + chrClass + ' .itemslot').each(function (index, element) {
        //console.log($(element).attr("value"));
        if ($(element).attr('value')) {
            for (var i in nulldstats) {
                nulldstats[i] += (items[$(element).attr("value")][i]) ? (items[$(element).attr("value")][i]) : (0);
                //console.log(i + ' ' + nulldstats[i] + ' ' + $(element).attr("value") + ' ' + items[$(element).attr("value")][i]);
            }
        }
    });

    for (var st in nulldstats) {
        $('.' + chrClass + ' .' + st + ' span').html(nulldstats[st]);
    }
}





$('.contentbox').on('change', '.level input', function () {
    var input = $(this);
    lvl = input.val();
    if (lvl < 1) {
        lvl = 1;
        input.val("1");
    }
    if (lvl == 20) {
        lvl = 23;
        $(this).parent().after('<div class="paragon"><div class="statname">Ступень:</div><input type="number" value="0" class="whitestat"></input></div>');
    }
    if (lvl > 20) {
        lvl = 23;
        input.val("20");
    }
    if (lvl < 20) {
        $(this).parent().parent().children('.paragon').remove();
    }
    var stats = {
        "strength": $(this).parent().parent().children('.strength').children('input'),
        "agility": $(this).parent().parent().children('.agility').children('input'),
        "stamina": $(this).parent().parent().children('.stamina').children('input')
    };
    var bS = {
        'strength': 3,
        'agility': 3,
        'stamina': 3,
    }
    baseStats = bS;
    stats.strength.val(baseStats.strength);
    stats.agility.val(baseStats.agility);
    stats.stamina.val(baseStats.stamina);

    for (var i = 2; i <= lvl; i++) {
        baseStats[statbonus[i]]++;
        stats[statbonus[i]].val(baseStats[statbonus[i]]);
    }
    console.log(lvl);
});


$('.contentbox').on('change', '.paragon input', function () {
    paragon = $(this).val();
    if (paragon < 0) {
        $(this).val("0");
    }
    if (paragon > 75) {
        $(this).val("75");
    }

    var stats = {
        "strength": $(this).parent().parent().children('.strength').children('input'),
        "agility": $(this).parent().parent().children('.agility').children('input'),
        "stamina": $(this).parent().parent().children('.stamina').children('input')
    };
    for (var st in stats) {
        stats[st].val(Number(baseStats[st]) + Number($(this).val()));
    }
});


$('.contentbox').on('change', '.stamina input, .agility input, .strength input', function () {
    var lvl = $('.level input').val();
    var par = $('.paragon input').val();
    var stats = {
        "strength": $('.strength input'),
        "agility": $('.agility input'),
        "stamina": $('.stamina input')
    };
});