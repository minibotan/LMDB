function makeSelectHTML(t) {
    var newHTML = '<div class="selector_parent">';
    newHTML += '<div class="div_prop selector">';
    newHTML += '<select class="prop_selector">';
    newHTML += '<option selected hidden>Параметр Выбора</option>';
    for (var i in searchProps[t]) {
        newHTML += '<option class="prop_option" value="' + i + '">' + searchProps[t][i] + '</option>';
    }
    newHTML += '</select>';
    newHTML += '</div>';
    newHTML += '<div class="div_val selector"></div>';
    newHTML += '</div>';
    newHTML += '<div class="stuff_holder content"></div>';
    return newHTML;
}


function addSelect(t) {
    var newHTML = '<select class="val_selector">';
    newHTML += '<option selected hidden>Выберите ' + searchProps[t][Property] + '</option>';
    for (var i in searchValues[t][Property]) {
        newHTML += '<option value="' + i + '">' + searchValues[t][Property][i] + '</option>';
    }
    newHTML += '<select>';
    return newHTML;
}


function showContent() {
    console.log('show');
    $('.moar_button').before(($(curPage).attr('id') == 'items') ? showItems() : showMobs());
    change('ok');
    change('gender');
}


function showMobs() {
    var k = counter * 40;
    var newHTML = '';
    for (var i in mobs) {
        if (check(mobs[i])) {
            if (k < 1) {
                newHTML += makeMobBlock(mobs[i]);
            }
            if (k < -38) break;
            k--;
        }
    }
    if (k > -39) {
        $('.moar_button').css("display", "none");
    }
    counter++;
    return newHTML;
}



function makeMobBlock(mob) {
    var p = '<div class="moboblock">';
    //p+= '<img src="http://static.lostmagic.ru/play/lib/jpg/'+mob.doll+'.jpg">'
    p += '<div class="mobinfo">'
    p += '<p class="mobname">' + mob.name + '</p>';
    p += '<p class="mobhp">' + mob.maxhp + '/' + mob.maxhp + '</p>';
    p += '</div>';


    p += '<div class="avatar_level">';
    p += '<img class="avatar" src="http://static.lostmagic.ru/play/lib/avatar/' + mob.avatar + '.png">';
    p += '<h4 class="mob_level">' + mob.level + '</h4>';
    p += '</div>';


    p += '<img class="mobpic"src="img/mobs/' + mob.doll + '.png">';

    p += lootblock(mob);

    p += '</div>';
    return p;
}


function lootblock(mob) {
    var p = '<div class="loot_block">';
    for (var loottype in mob.loot) {
        console.log(loottype);
        p += '<div class="' + loottype + '">';
        p += '<div class="loot_block_title">' + loottype + '</div>';
        p += '<div class="loot_block_content">';
        var loot = mob.loot[loottype];
        switch (loottype) {
            case 'randloot':
            case 'loot':
                p += getLoot(loot);
                break;
            case 'questloot':
                p += getQuestLoot(loot);
                break;
            case 'money':
            case 'money':
            case 'factionmoney':
            default:
                p += 'скоро будет инфа';
        }
        p += '</div>';
        p += '</div>';
    }
    p += '</div>';
    return p;
}

function getQuestLoot(loot) {
    var p = '';
    for (var questnum in loot) {
        p += '<div>';
        p += '<div class="loot_block_title" title="инфы о самих квестах у меня пока нет">id квеста ' + questnum + '</div>';
        p += '<div class="loot_block_content">';
        p += getLoot(loot[questnum]);
        p += '</div>';
        p += '</div>';
    }
    return p;
}


function getLoot(loot) {
    var p ='';
    for (var i in loot) {
        if(typeof loot[i] !== 'object') {
            p += makeDropBlock(loot);
            break;
        }
        p += '<div>';
        p += '<div class="loot_block_title">' + i + '</div>';
        p += '<div class="loot_block_content">';
        p += makeDropBlock(loot[i]);
        p += '</div>';
        p += '</div>';
    }
    return p;
}



function makeDropBlock(loot) {
    var p = '';
    for (var j in loot) {
        var l = j.split('x');
        p += '<div class="drop" title="' + items[l[0]].name + ((settings.showmeall.val) ? ('\nШанс: ' + loot[j]) : ('')) + '" value="'+ l[0] +'">';
        p += '<img class="' + items[l[0]].rarity + ' borderedpic" src="http://static.lostmagic.ru/play/lib/jpg/' + items[l[0]].image + '.jpg">' + ((l.length > 1) ? ("X" + l[1]) : (''));
        p += '</div>'
    }
    return p;

}



function addLMLoginer() {
    var r = '';
    r += '<div id="login" class="logined"><object data="http://static.lostmagic.ru/flash/logined.swf" type="application/x-shockwave-flash" id="flash_428931508" width="217" height="163"><param name="params" value="menu=false&amp;wmode=opaque"><param name="allowScriptAccess" value="always"><param name="flashvars" value="name=Just%20Bot&amp;race=1&amp;level=20&amp;avatar=186&amp;hp=3388&amp;maxhp=3388&amp;inner=0&amp;isgamexp=0&amp;lang=ru&amp;cdn=http://static.lostmagic.ru"><param name="movie" value="http://static.lostmagic.ru/flash/logined.swf"><param name="wmode" value="opaque"></object></div>';
    return r;
}

function addFlash(mob) {
    /* флеш объект отображается не так, как должен =( */
    /* на гитхабе вообще не грузит, так как не https */
    var swfsrc = 'http://static.lostmagic.ru/play/lib/dolls/' + mob.doll + '.swf'
    var p = '';
    p += '<object type="application/x-shockwave-flash">'
    p += '<param name="movie" value="' + swfsrc + '">'
    p += '<embeded src="' + swfsrc + '"></embeded>'
    p += '<param name="wmode" value="transparent" />';
    p += '<param name="allowScriptAccess" value="always" />';
    p += '<param name="flashvars" value="stage=1"/>';
    p += '<param name="play" value="true" />';
    p += '<param name="loop" value="true" />';
    p += '</object>';
    return p;
}