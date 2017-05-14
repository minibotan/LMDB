function makeItemHTML() {
    var newHTML = '<table >';
    var j = 0; var k = 4; // k = columns
    var is1 = '<tr><td class="itemstat';
    var is2 = '</td><td class="itemstat2">';
    for (var i in items) {
        if(j%k === 0) newHTML += '<tr>';
        newHTML += '<td class = "item">';
        newHTML += '<h6 class = "itemname">' + items[i].adminname + '</h6>';
        newHTML += '<img class="'+items[i].rarity+' borderedpic" src="http://static.lostmagic.ru/play/lib/jpg/' + items[i].image + '.jpg">';
        newHTML += '<p>';
        newHTML += '<p class ="itemtype small">' + getType(items[i].type) + '</p>';
        newHTML += (items[i].personal)?('<p class="small">Персональный предмет</p>'):('');
        newHTML += (items[i].becomepersonal)?('<p class="small">Становится персональным при надевании</p>'):('');
        newHTML += '<table>'
        newHTML += Reqs(items[i]);
        newHTML += '</table>'
        newHTML += '<table>'
        newHTML += (items[i].minhit || items[i].maxhit)?(is1 + '">Урон:' + is2  + items[i].minhit +' - '+items[i].maxhit+'</td></tr>'):('');
        newHTML += (items[i].defence)?(is1 + '">Защита:' + is2  + items[i].defence+'</td></tr>'):('');
        newHTML += (items[i].strength)?(is1 + '">Сила:' + is2  + items[i].strength+'</td></tr>'):('');
        newHTML += (items[i].agility)?(is1 + '">Ловкость:' + is2  + items[i].agility+'</td></tr>'):('');
        newHTML += (items[i].stamina)?(is1 + '">Выносливость:' + is2  + items[i].stamina+'</td></tr>'):('');
        newHTML += (items[i].crit)?(is1 + '">Крит:' + is2  + items[i].crit+'%</td></tr>'):('');
        newHTML += (items[i].dodge)?(is1 + '">Уворот:' + is2  + items[i].dodge+'%</td></tr>'):('');
        newHTML += (items[i].mastery)?(is1 + '">Мастерство:' + is2  + items[i].mastery+'</td></tr>'):('');
        newHTML += (items[i].resilience)?(is1 + '">Устойчивость:' + is2  + items[i].resilience+'</td></tr>'):('');
        newHTML += (items[i].maxdur)?(is1 + '">Прочность:' + is2  + items[i].maxdur+'</td></tr>'):('');
        newHTML += '</table>'
        newHTML += (items[i].descr)?('<p class="goldentext">' + items[i].descr+'</p>'):('');
        newHTML += '<table class = "bot">'
        newHTML += (items[i].price)?(is1 + ' itemtype">Цена:' + is2  + getPrice(items[i].price) + '</td></tr>'):('');
        newHTML += '</table>'

        newHTML += '</p></td>';

        if(j%k===(k-1)) newHTML += '</tr>';
        j++;
    }
    if(j%2===1) newHTML += '</tr>';
    newHTML += '</table>';

    return newHTML;
}


function getPrice(price){
    var r = '';
    r += (price>9999)?((Math.floor(price/10000)) + 'з '):('');
    r += ((Math.floor(price/100))%100>0)?((Math.floor(price/100))%100 + 'с '):('');
    r += (price%100>0)?(price%100 + 'б'):('');
    return r;
}




function getType(type) {
    var r = 'что-то еще';
    switch(type) {
        case 'other':
            r = 'другое';
            break;
        case 'weapon':
            r = 'Оружие в любую руку';
            break;
        case 'rweapon':
            r = 'Оружие в основную руку';
            break;
        case 'lweapon':
            r = 'Оружие в левую руку';
            break;
        case 'twohandedweapon':
            r = 'Двуручное оружие';
            break;
         case 'shield':
            r = 'Щит';
            break;
        case 'head':
            r = 'Шлем';
            break;
        case 'chest':
            r = 'Нагрудник';
            break;
        case 'gloves':
            r = 'Перчатки';
            break;
        case 'legs':
            r = 'Поножи';
            break;
        case 'boots':
            r = 'Боты';
            break;
        case 'neck':
            r = 'Ожерелье';
            break;
        case 'ring':
            r = 'Кольцо';
            break;
        case 'trinket':
            r = 'Безделушка';
            break;
        case 'bottle':
            r = 'Бутылка';
            break;
        case 'sunduk':
            r = 'Коробка';
            break;
        case 'present':
            r = 'Подарок';
            break;
    }
    return r;
}



function Reqs(item) {
    var bool = false;
    var t = '<tr class="reqs"><td class="itemstat">Требования:</td>'
    var r ='';
    var s ='<tr class="reqs"><td></td>';
    if(item.reqlevel){
        r+= '<td class="itemstat2">Уровень ' + item.reqlevel + '</td></tr>';
        bool = true;
    }
    if (item.reqparagon) {
         r+= (bool)?(s):('');
         r+= '<td class="itemstat2">Ступень ' + item.reqparagon + '</td></tr>';
         bool = true;
    }
    if(item.reqstrength) {
        r+= (bool)?(s):('');
        r+= '<td class="itemstat2">Сила ' + item.reqstrength + '</td></tr>';
        bool = true;
    }
    if (item.reqagility){
        r+= (bool)?(s):('');
         r+= '<td class="itemstat2">Ловкость ' + item.reqagility + '</td></tr>';
         bool = true;
    }
    if(item.reqstamina) {
        r+= (bool)?(s):('');
         r+= '<td class="itemstat2">Выносливость ' + item.reqstamina + '</td></tr>';
         bool = true;
    }
    return (bool)?(t+r):('');
}
