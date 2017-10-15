var bull = true;

var baseStats;

var bonusStats = {
    'strength': 0,
    'agility': 0,
    'stamina': 0,
    'max':0
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
    '20': 'stamina'
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
    var r = '<div class="char me"><div><table>';
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
    var r = '<div class="char enemy">';
    r += '<div><table>';
    r += '<tr><td class="itemslot head" /><td class="doll" colspan="5" rowspan="5" /><td class="itemslot neck" /></tr>';
    r += '<tr><td class="itemslot chest" /><td class="itemslot ring" /></tr>';
    r += '<tr><td class="itemslot cloak" /><td class="itemslot ring" /></tr>';
    r += '<tr><td class="itemslot belt" /><td class="itemslot trinket" /></tr>';
    r += '<tr><td class="itemslot legs" /><td class="itemslot trinket" /></tr>';
    r += '<tr><td class="itemslot boots" /><td class="itemslot gloves" /><td class="itemslot weapon rweapon twohandedweapon" /><td class="sep"/><td class="itemslot weapon lweapon shield" /><td class="itemslot rune" /><td class="itemslot totem" /></tr>';
    r += '</table></div>'
    r += stats();
    r += '</div>';
    return r;

}

function stats() {
    var r = '';
    r += '<div class ="char_stats">';
    r += '<div class="level"><div class="statname">Уровень:</div><input type="number" value="1" class="whitestat"></input> <span class="leftbonus" title="Свободных очков характеристик"></span></div>'
    r += '<div class="maxhit"><div class="statname">Макс. урон:</div><span class="greenstat"></span></div>';
    r += '<div class="minhit"><div class="statname">Мин. урон:</div><span class="greenstat"></span></div>';
    r += '<div class="defence"><div class="statname">Защита:</div><span class="greenstat"></span></div>';
    r += '<div class="strength"><div class="statname">Сила:</div><input type="number" value="4" size="" class="whitestat"/>+<span class="greenstat"></span></div>';
    r += '<div class="agility"><div class="statname">Ловкость:</div><input type="number" value="4" size="3" class="whitestat"/>+<span class="greenstat"></span></div>';
    r += '<div class="stamina"><div class="statname">Выносливость:</div><input type="number" value="4" size="3" class="whitestat"/>+<span class="greenstat"></span></div>';
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
        p += '<img class="common borderedpic option_item_img" src="' + path + '/play/lib/jpg/0.jpg">';
        p += '<div class="option_item_name">Снять</div>';
        p += '</div>';
    }
    for (var i in items) {
        for (var j in itemtype) {
            if (items[i].type == itemtype[j] &&
                ((!items[i].reqlevel) || items[i].reqlevel <= cell.parents('.char').find('.level input').val()) &&
                ((!items[i].reqparagon) || (items[i].reqparagon <= cell.parents('.char').find('.paragon input').val())) &&
                !items[i].hidden) {
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
    p += '<img class="' + item.rarity + ' borderedpic option_item_img" src="' + path + '/play/lib/jpg/' + item.image + '.jpg">';
    p += '<div class="option_item_name">' + item.name + '</div>';
    p += '</div>';
    return p;
}

function equipItem2(slot, itemid) {
    $(slot).removeClass("rare epic legendary common uncommon borderedpic");
    if (itemid == -1) {
        $(slot).css("background", "url('img/item/"+ $(slot).class().split(' ')[1] +".png') center center");
        $(slot).removeAttr("value");
        recalculate($(slot).parents(".char"));
        return;
    }
    var item = items[itemid];
    $(slot).css("background", "url('" + path + "/play/lib/jpg/" + item.image + ".jpg') center center");
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
    //
    $('.' + chrClass + ' .itemslot').each(function (index, element) {
        //
        if ($(element).attr('value')) {
            for (var i in nulldstats) {
                nulldstats[i] += (items[$(element).attr("value")][i]) ? (items[$(element).attr("value")][i]) : (0);
                //
            }
        }
    });

    for (var st in nulldstats) {
        $('.' + chrClass + ' .' + st + ' span').html(nulldstats[st]);
    }
}



/**Input changes */
/** Level change */
$('.contentbox').on('change', '.level input', function () {
    var input = $(this);
    lvl = input.val();
    if (lvl < 1) {
        lvl = 1;
        input.val("1");
    }
    $(this).parent().parent().children('.paragon').remove();
    if (lvl >= 20) {
        lvl = 20;
        input.val("20");
        $(this).parent().after('<div class="paragon"><div class="statname">Ступень:</div><input type="number" value="0" class="whitestat"></input></div>');
    }

    bonusStats.max = (input.val()-1)*3;
    $(this).parent().children('span').html(bonusStats.max - (bonusStats.strength + bonusStats.agility + bonusStats.stamina));

    var stats = {
        "strength": $(this).parent().parent().children('.strength').children('input'),
        "agility": $(this).parent().parent().children('.agility').children('input'),
        "stamina": $(this).parent().parent().children('.stamina').children('input')
    };
    var bS = {
        'strength': 4,
        'agility': 4,
        'stamina': 4,
    }
    baseStats = bS;
    stats.strength.val(baseStats.strength);
    stats.agility.val(baseStats.agility);
    stats.stamina.val(baseStats.stamina);

    for (var i = 2; i <= lvl; i++) {
        baseStats[statbonus[i]]++;
        stats[statbonus[i]].val(baseStats[statbonus[i]]);
    }
});

/** Paragon change */
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
    var par = Number($('.paragon input').val());
    if(isNaN(par)) par = 0;
    var stats = {
        "strength": $('.strength input'),
        "agility": $('.agility input'),
        "stamina": $('.stamina input')
    };
    var input = $(this);
    var statclass = input.parent().attr('class');
    
    var lav = Number(input.val());

    bonusStats[statclass] = lav - par - baseStats[statclass];

    if(lav < baseStats[statclass] + par) {
        input.val(baseStats[statclass] + par);
        bonusStats[statclass] = 0;
        
    }


    if(bonusStats.max < (bonusStats.strength + bonusStats.agility + bonusStats.stamina)) {
        
        bonusStats[statclass] = bonusStats[statclass] + (bonusStats.max - (bonusStats.strength + bonusStats.agility + bonusStats.stamina));
        input.val(baseStats[statclass] + par + bonusStats[statclass]);
    }
    $(this).parent().parent().children('.level').children('span').html(bonusStats.max - (bonusStats.strength + bonusStats.agility + bonusStats.stamina));

});