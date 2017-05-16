var itemProperty;
var itemValue;

function makeItemHTML() {
    var newHTML = '<div class="item-selector-parent">'
    newHTML += '<div class="item-prop item-selector">'
    newHTML += '<select class="item-prop-selector">';
    newHTML += '<option selected disabled>Параметр Выбора</option>';
    for (var i in searchProps) {
        newHTML += '<option class="item-prop-option" value="' + i + '">' + searchProps[i] + '</option>';
    }
    newHTML += '<select>';
    newHTML += '</div>';
    newHTML += '<div class="item-val item-selector"></div>';
    newHTML += '</div>';
    newHTML += '<div class="items-holder"></div>';
    return newHTML;
}



function addItemSelect(sel) {
    var newHTML = '<select class="item-val-selector">';
    newHTML += '<option selected disabled>Выберите '+searchProps[itemProperty]+'</option>';
    for (var i in searchValues[itemProperty]) {
        newHTML += '<option value="' + i + '">' + searchValues[itemProperty][i] + '</option>';
    }
    newHTML += '<select>';
    return newHTML;
}



function showItems() {
    var newHTML = '<table>';
    var j = 0;
    var k = 4; // k = columns
    for (var i in items) {
        if (check(items[i])) {
            if (j % k === 0) newHTML += '<tr>';
            newHTML += makeItemBox(items[i]);
            if (j % k === (k - 1)) newHTML += '</tr>';
            j++;
        }
    }
    if (j % 2 === 1) newHTML += '</tr>';
    newHTML += '</table>';
    $('.items-holder').html(newHTML);
    return true;
}

function makeItemBox(item) {
    var is1 = '<tr><td class="itemstat';
    var is2 = '</td><td class="itemstat2">';
    var newHTML ='';
    newHTML += '<td class = "item">';
    newHTML += '<h6 class = "itemname">' + item.adminname + '</h6>';
    newHTML += '<img class="' + item.rarity + ' borderedpic" src="http://static.lostmagic.ru/play/lib/jpg/' + item.image + '.jpg">';
    newHTML += '<p>';
    newHTML += '<p class ="itemtype small">' + searchValues["type"][item.type] + '</p>';
    newHTML += (item.personal) ? ('<p class="small">Персональный предмет</p>') : ('');
    newHTML += (item.becomepersonal) ? ('<p class="small">Становится персональным при надевании</p>') : ('');
    newHTML += '<table>'
    newHTML += Reqs(item);
    newHTML += '</table>'
    newHTML += '<table>'
    newHTML += (item.minhit || item.maxhit) ? (is1 + '">Урон:' + is2 + item.minhit + ' - ' + item.maxhit + '</td></tr>') : ('');
    newHTML += (item.defence) ? (is1 + '">Защита:' + is2 + item.defence + '</td></tr>') : ('');
    newHTML += (item.strength) ? (is1 + '">Сила:' + is2 + item.strength + '</td></tr>') : ('');
    newHTML += (item.agility) ? (is1 + '">Ловкость:' + is2 + item.agility + '</td></tr>') : ('');
    newHTML += (item.stamina) ? (is1 + '">Выносливость:' + is2 + item.stamina + '</td></tr>') : ('');
    newHTML += (item.crit) ? (is1 + '">Крит:' + is2 + item.crit + '%</td></tr>') : ('');
    newHTML += (item.dodge) ? (is1 + '">Уворот:' + is2 + item.dodge + '%</td></tr>') : ('');
    newHTML += (item.mastery) ? (is1 + '">Мастерство:' + is2 + item.mastery + '</td></tr>') : ('');
    newHTML += (item.resilience) ? (is1 + '">Устойчивость:' + is2 + item.resilience + '</td></tr>') : ('');
    newHTML += (item.maxdur) ? (is1 + '">Прочность:' + is2 + item.maxdur + '</td></tr>') : ('');
    newHTML += '</table>'
    newHTML += (item.descr) ? ('<p class="goldentext">' + item.descr + '</p>') : ('');
    newHTML += '<table class = "bot">'
    newHTML += (item.price) ? (is1 + ' itemtype">Цена:' + is2 + getPrice(item.price) + '</td></tr>') : ('');
    newHTML += '</table>'
    newHTML += '</p></td>';
    return newHTML;
}

function getPrice(price) {
    var r = '';
    r += (price > 9999) ? ((Math.floor(price / 10000)) + 'з ') : ('');
    r += ((Math.floor(price / 100)) % 100 > 0) ? ((Math.floor(price / 100)) % 100 + 'с ') : ('');
    r += (price % 100 > 0) ? (price % 100 + 'м') : ('');
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
    return (bool) ? (t + r) : ('');
}

function check(item) {
    console.log(item[itemProperty] == itemValue);
    if (item[itemProperty] == itemValue)
        return true;
    return false;
}