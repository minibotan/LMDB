function makeSearchItemBox() {
    item = items[2];
    var p = '';

    p += '<div class = "item search_box">';
    p += '<input class = "itemname" placeholder="Название предмета">';
    //rarity
    p += '<div id = "rarity"><span title="Можно выбрать несколько\nЕсли ни один не выбран, то качество не учитывается">Качество:</span> '
    p += '<div class = "common_text" value = "common">common</div>';
    p += '<div class = "uncommon_text" value = "uncommon">uncommon</div>';
    p += '<div class = "rare_text" value = "rare">rare</div>';
    p += '<div class = "epic_text" value = "epic">epic</div>';
    p += '<div class = "legend_text" value = "legend">legendary</div>';
    p += '</div>'

    //персональность и прочее
    p += '<div id = "personality"><span title="то же самое как и с качеством">Персональность: </span>'
    p += '<div class = "goldentext" value = "personal">персональный</div>';
    p += '<div class = "goldentext" value = "becomepersonal">становится персональным</div>';
    p += '</div>'

    p+= '<button class = "open_select" id="stats">Характеристики</button>';
    p+= '<button class = "open_select" id="itemtypes">Тип вещи</button>';
    p+= '<button class = "open_select" id="requirements">Требования</button>';


    // тип предмета
    p += '<p class ="itemtypes">Тип Вещи:</p>';

    p += addSelect("items", "type", true);
    p += '<button id="need_more_types">еще тип!</button>'
    p += '<button id="need_less_types" style="display:none">убрать последний!</button>'


    //статы
    p += '<table class="stats">'
    p += '<tr><td class="itemstat">Урон:</td><td class="itemstat2"><input class = "minhit">-<input class = "maxhit"></td></tr>';
    p += '<tr><td class="itemstat">Защита:</td><td class="itemstat2"><input class = "defence"></td></tr>';
    p += '<tr><td class="itemstat">Сила:</td><td class="itemstat2"><input class = "strength"></td></tr>';
    p += '<tr><td class="itemstat">Ловкость:</td><td class="itemstat2"><input class = "agility"></td></tr>';
    p += '<tr><td class="itemstat">Выносливость:</td><td class="itemstat2"><input class = "stamina"></td></tr>';
    p += '<tr><td class="itemstat">Крит:</td><td class="itemstat2"><input class = "crit">%</td></tr>';
    p += '<tr><td class="itemstat">Уворот:</td><td class="itemstat2"><input class = "dodge">%</td></tr>';
    p += '<tr><td class="itemstat">Мастерство:</td><td class="itemstat2"><input class = "mastery"></td></tr>';
    p += '<tr><td class="itemstat">Устойчивость:</td><td class="itemstat2"><input class = "resilience"></td></tr>';
    p += '<tr><td class="itemstat">Прочность:</td><td class="itemstat2"><input class = "maxdur"></td></tr>';
    p += '<tr><td class="itemstat itemtype">Цена:</td><td class="itemstat2"><input class = "price"></td></tr>';
    p += '</table>'
    // требования
    p += '<table class="requirements">'
    p += '<tr class="reqs"><td class="itemstat">Уровень:</td><td class="itemstat2"><input class = "reqlevel"></td></tr>';
    p += '<tr class="reqs"><td class="itemstat">Ступень:</td><td class="itemstat2"><input class = "reqparagon"></td></tr>';
    p += '<tr class="reqs"><td class="itemstat">Сила:</td><td class="itemstat2"><input class = "reqstrength"></td></tr>';
    p += '<tr class="reqs"><td class="itemstat">Ловкость:</td><td class="itemstat2"><input class = "reqagility"></td></tr>';
    p += '<tr class="reqs"><td class="itemstat">Выносливость:</td><td class="itemstat2"><input class = "reqstamina"></td></tr>';
    p += '</table>'



    p+= '<button id="MakeSearch"> Найти! </button>'
    p+='</div>';
    return p;
}



function makeItemBox(item) {
    var is1 = '<tr><td class="itemstat';
    var is2 = '</td><td class="itemstat2">';
    var p = '';
    p += '<div class = "item"  value="' + item.id + '">';
    p += '<h6 class = "itemname ' + item.rarity + '_text">' + item.name + '</h6>';
    p += '<div class="item_pic_holder"><img class="' + item.rarity + ' borderedpic" src="' + path + '/play/lib/jpg/' + item.image + '.jpg">';
    if (item.maxcnt > 1)
        p += '<div class="item_maxcnt">' + item.maxcnt + '</div>';
    if (item.id == 809) //прикол с лопаткой у одного из админов
        p += '<div class="item_maxcnt">2</div>';

    p += '</div>';
    p += '<p class ="itemtype small">' + searchValues.items["type"][item.type] + '</p>';
    p += (item.personal) ? ('<p class="small">Персональный предмет</p>') : ('');
    p += (item.becomepersonal) ? ('<p class="small">Становится персональным при надевании</p>') : ('');
    p += (item.instruction) ? ('<p class="small">' + item.instruction + '</p>') : ('');
    p += Reqs(item);
    p += '<table>'
    p += (item.minhit || item.maxhit) ? (is1 + '">Урон:' + is2 + ((item.minhit) ? (item.minhit) : (0)) + ' - ' + ((item.maxhit) ? (item.maxhit) : (0)) + '</td></tr>') : ('');
    p += (item.defence) ? (is1 + '">Защита:' + is2 + item.defence + '</td></tr>') : ('');
    p += (item.strength) ? (is1 + '">Сила:' + is2 + item.strength + '</td></tr>') : ('');
    p += (item.agility) ? (is1 + '">Ловкость:' + is2 + item.agility + '</td></tr>') : ('');
    p += (item.stamina) ? (is1 + '">Выносливость:' + is2 + item.stamina + '</td></tr>') : ('');
    p += (item.crit) ? (is1 + '">Крит:' + is2 + item.crit + '%</td></tr>') : ('');
    p += (item.dodge) ? (is1 + '">Уворот:' + is2 + item.dodge + '%</td></tr>') : ('');
    p += (item.mastery) ? (is1 + '">Мастерство:' + is2 + item.mastery + '</td></tr>') : ('');
    p += (item.resilience) ? (is1 + '">Устойчивость:' + is2 + item.resilience + '</td></tr>') : ('');
    p += (item.maxdur) ? (is1 + '">Прочность:' + is2 + item.maxdur + '</td></tr>') : ('');
    p += '</table>'
    p += (item.descr) ? ('<p class="goldentext">' + item.descr + '</p>') : ('');
    p += '<table>'
    p += (item.price) ? (is1 + ' itemtype">Цена:' + is2 + getPrice(item.price) + '</td></tr>') : ('');
    p += (item.validtime) ? (is1 + ' itemtype">Срок Жизни:' + is2 + getTime(item.validtime) + '</td></tr>') : ('');
    p += '</table>';
    p += (item.owner) ? ('<p class="itemowner">Владелец - <a href="http://lostmagic.ru/player/' + item.owner + '/" target="_blank">' + item.owner + '</a></p>') : ('');
    p += '<div class="loot_block">'
    if (item.dropfrom) {
        p += getDrops(item.dropfrom);
    }
    if (item.bottleparams) {
        p += itemParams(item);
    }
    p += '</div></div>';
    return p;
}

function getDrops(drops) {
    var p = '<div>';
    p += '<div class="loot_block_title">Падает с</div>';
    p += '<div class="loot_block_content">';
    p += makeDropBlock(drops);

    p += '</div></div>';
    return p;
}





function itemParams(item) {
    let type = item.type;
    let params = item.bottleparams;
    let p = '<div>';
    p += '<div class="loot_block_title">Свойства</div>';
    p += '<div class="loot_block_content">';
    for (let i in params) {
        let param = params[i];
        switch (i) {
            case 'loot':
            case 'randloot':
                p += makeItemInfo(param, i);
                break;
            case 'targettypes':
                p += getTargetTypes(param);
                break;
            case 'type':
                p += 'Тип - ' + param + '<br>';
                break;
            case 'cooldown':
                p += 'перезарядка - ' + param + '<br>';
                break;
            case 'effects':
                p += getEffects(param);
                break;
            case 'strictreqs':
                break;
            default:
                p += i + '<br>';
                break;
        }
    }
    p += '</div></div>';
    return p;
}

function getTargetTypes(tt) {
    var p = '';
    p += '<div>';
    p += '<div class="loot_block_title">Используется на</div>';
    p += '<div class="loot_block_content">';
    for (var i in tt) {
        p += searchValues.items.type[tt[i]] + '<br>';
    }
    p += '</div></div>';
    return p;
}

function getEffects(effects) {
    let p = '';
    for (let e of effects) {
        let type = e.type;
        let value = e.value;
        switch (type) {
            case 'buff':
                if (buffs[value].ishidden) break;
                p += 'накладывает бафф - <img class="buffimg buffcolor' + buffs[value].isdebuff + ' borderedpic" src="' + path + '/play/lib/jpg/' + buffs[value].image + '.jpg">';
                break;
            case 'rage':
                p += "+" + value + "ярости";
                break;
            case 'changeformob':
            case 'buffall':
            case 'changeparam':
            case 'incrementparam':
            case 'addnbb':
            case 'changelocation':
            case 'system':
            case 'addbuff':
            case 'attackmob':
            case 'buffgroupinlocation':
            case 'maxhp':
            case 'summonmob':
            case 'battleprotect':
            case 'candieseaten':
            case 'hp':
            default:
        }
    }
    return '';
}




function getPrice(price) {
    var r = '';
    r += (price > 9999) ? ((Math.floor(price / 10000)) + ' <img src="img/gold.jpg"> ') : ('');
    r += ((Math.floor(price / 100)) % 100 > 0) ? ((Math.floor(price / 100)) % 100 + ' <img src="img/silver.jpg"> ') : ('');
    r += (price % 100 > 0) ? (price % 100 + ' <img src="img/bronze.jpg">') : ('');
    return r;
}

function getTime(time) {
    var r = '';
    r += (time > 3599) ? ((Math.floor(time / 3600)) + ' часов ') : ('');
    r += ((Math.floor(time / 60)) % 60 > 0) ? ((Math.floor(time / 60)) % 60 + ' минут ') : ('');
    r += (time % 60 > 0) ? (time % 60 + ' секунд ') : ('');
    return r;
}

function Reqs(item) {
    var bool = false;
    var t = '<tr class="reqs"><td class="itemstat">Требования:</td>'
    var r = '';
    var s = '<tr class="reqs"><td></td>';
    if (item.reqlevel) {
        r += '<td class="itemstat2">Уровень ' + item.reqlevel + '</td></tr>';
        bool = true;
    }
    if (item.reqparagon) {
        r += (bool) ? (s) : ('');
        r += '<td class="itemstat2">Ступень ' + item.reqparagon + '</td></tr>';
        bool = true;
    }
    if (item.reqstrength) {
        r += (bool) ? (s) : ('');
        r += '<td class="itemstat2">Сила ' + item.reqstrength + '</td></tr>';
        bool = true;
    }
    if (item.reqagility) {
        r += (bool) ? (s) : ('');
        r += '<td class="itemstat2">Ловкость ' + item.reqagility + '</td></tr>';
        bool = true;
    }
    if (item.reqstamina) {
        r += (bool) ? (s) : ('');
        r += '<td class="itemstat2">Выносливость ' + item.reqstamina + '</td></tr>';
        bool = true;
    }
    return (bool) ? ('<table>' + t + r + '</table>') : ('');
}