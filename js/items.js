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
    if (item.bottleparams && item.bottleparams.charges)
        p += itemChargesInfo(item.bottleparams.charges);
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
    p += (item.price) ? (is1 + ' itemtype">Цена:' + is2 + GetPrice(item.price) + '</td></tr>') : ('');
    p += (item.buff_id && buffs[item.buff_id]) ? ('<div class="buff_block">Имеет бафф - <img value="'+item.buff_id+'" class="buffimg buffcolor' + buffs[item.buff_id].isdebuff + ' borderedpic" src="' + path + '/play/lib/jpg/' + buffs[item.buff_id].image + '.jpg"></div>') : ('');
    p += (item.validtime) ? (is1 + ' itemtype">Срок жизни:' + is2 + GetTime(item.validtime) + '</td></tr>') : ('');
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
            case 'socket':
                p += socketInfo(param);
                break;
            case 'charges':
                // реализовано в характеристиках
                break;
            case 'strictreqs':
                break;
            case 'reqs':
                break;
            case 'misc':
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

function socketInfo(sockets) {
    let p = '';
    p += '<div>';
    p += '<div class="loot_block_title">Сокеты</div>';
    p += '<div class="loot_block_content">';
    for (let socket in sockets) {
        if (socket == 0 || sockets[socket] == 0) continue;
        p += '<div class="socketimg"><div>' + sockets[socket] + '%</div></div>';
    }
    p += '</div></div>';
    return p;
}

function itemChargesInfo(charges) {
    let p = '';
    for (let charge in charges) {
        if (charge == 0) continue;
        p += '<tr class="reqs"><td class="itemstat">Заряды:</td><td class="itemstat2">' + charge + '(' + charges[charge] + '%)</td></tr>';
    }
    return p;
}


function getEffects(effects) {
    let p = '';
    for (let e of effects) {
        let type = e.type;
        let value = e.value;
        switch (type) {
            case 'buff':
                if (buffs[value]) {
                    if (buffs[value].ishidden) break;
                    p += '<div class="buff_block">накладывает бафф - <img value="'+value+'" class="buffimg buffcolor' + buffs[value].isdebuff + ' borderedpic" src="' + path + '/play/lib/jpg/' + buffs[value].image + '.jpg"></div>';
                }
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
                break;
            case 'system':
                p += 'Выводит системное сообщение: <div class="system_message">' + e.text + '</div>';
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
    return p;
}




function GetPrice(price) {
    var r = '';
    r += (price > 9999) ? ((Math.floor(price / 10000)) + ' <span style="color:rgb(245, 208, 10);font-size:9px;vertical-align: top;">&#11044;</span> ') : ('');
    r += ((Math.floor(price / 100)) % 100 > 0) ? ((Math.floor(price / 100)) % 100 + ' <span style="color:rgb(168, 168, 168);font-size:9px;vertical-align: top;">&#11044;</span> ') : ('');
    r += (price % 100 > 0) ? (price % 100 + ' <span style="color:rgb(158, 81, 21);font-size:9px;vertical-align: top;">&#11044;</span>') : ('');
    return r;
}

function GetTime(time) {
    var r = '';
    r += (time >= 86400) ? ((Math.floor(time / 86400)) + ' дней ') : ('');
    r += ((Math.floor(time / 3600)) % 24 > 0) ? ((Math.floor(time / 3600)) % 24 + ' часов ') : ('');
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