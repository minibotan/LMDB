function showItems() {
    upgradeItems();
    var k = counter*40;
    var p = '';
    for(var i in items) {
        if(check(items[i])){
            if(k < 1){
                p += makeItemBox(items[i]);
            }
            if (k < -38) break;
            k--;
        }
    }
    if(k > -39) {
        $('.moar_button').css("display", "none");
    }
    counter++;
    return p;
}

function makeItemBox(item) {
    var is1 = '<tr><td class="itemstat';
    var is2 = '</td><td class="itemstat2">';
    var p ='';
    p += '<div class = "item">';
    p += '<h6 class = "itemname ' + item.rarity + '_text">' + item.name + '</h6>';
    if($(curPage).attr('id') == 'items')
        p += '<img class="' + item.rarity + ' borderedpic" src="' + path + '/play/lib/jpg/' + item.image + '.jpg">';
    p += '<p class ="itemtype small">' + searchValues.items["type"][item.type] + '</p>';
    p += (item.personal) ? ('<p class="small">Персональный предмет</p>') : ('');
    p += (item.becomepersonal) ? ('<p class="small">Становится персональным при надевании</p>') : ('');
    p += (item.instruction) ? ('<p class="small">' + item.instruction + '</p>') : ('');
    p += Reqs(item);
    p += '<table>'
    p += (item.minhit || item.maxhit) ? (is1 + '">Урон:' + is2 + ((item.minhit)?(item.minhit):(0)) + ' - ' + ((item.maxhit)?(item.maxhit):(0)) + '</td></tr>') : ('');
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
    if(item.dropfrom){
        p += getDrops(item.dropfrom);
    }
    if (item.bottleparams) {
        p += itemParams(item);
    }
    p += '</div>';
    return p;
}

function getDrops(drops){
    var p = '';
    p += '<div>';
    p += '<div class="loot_block_title">Падает с</div>';
    p += '<div class="loot_block_content">';
    p += makeDropBlock(drops) ;
    
    p += '</div></div>';
    return p;
}





function itemParams(item) {
    var type = item.type;
    var params = item.bottleparams;
    var p = '';
    p += '<div>';
    p += '<div class="loot_block_title">Свойства</div>';
    p += '<div class="loot_block_content">';
    for(var i in params) {
        var param = params[i];
        switch (i) {
            case 'loot' :
            case 'randloot':
                p += getLootBylvl(param, i);
                break;
            case 'targettypes':
                p += getTargetTypes(param);
                break;
            case 'type':
                p += 'Тип - ' + param + '<br>';
                break;
            case 'cooldown':
                p += 'кд - ' + param + '<br>';
                break;
            case 'effects':
                p += getEffects(param);
                break;
            case 'strictreqs':
                break;
            default :
                p += i + '<br>';
                break;
        }
    }
    p += '</div></div>';
    return p;
}

function getTargetTypes(tt){
    var p = '';
    p += '<div>';
    p += '<div class="loot_block_title">Используется на</div>';
    p += '<div class="loot_block_content">';
    for(var i in tt) {
        p += searchValues.items.type[tt[i]] + '<br>';   
    }
    p += '</div></div>';
    return p;
}

function getEffects(eff) {
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

function check(a) {
    if (a.hidden) return false;
    if (a[Property] == Value  || (typeof a[Property] == Value) || ((Property == 'location' && a[Property])?(a[Property].indexOf(Value) !== -1):(false)))
        return true;
    return false;
}