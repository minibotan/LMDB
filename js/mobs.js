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
    //p+= '<img src="' + path + '/play/lib/jpg/'+mob.doll+'.jpg">'
    p += '<div class="mobinfo">'
    p += '<p class="mobname">' + mob.name + '</p>';
    p += '<p class="mobhp">' + mob.maxhp + '/' + mob.maxhp + '</p>';
    p += '</div>';


    p += '<div class="avatar_level">';
    p += '<img class="avatar" src="' + path + '/play/lib/avatar/' + mob.avatar + '.png">';
    p += '<h4 class="mob_level">' + mob.level + '</h4>';
    p += '</div>';


    p += '<img class="mobpic"src="img/mobs/' + mob.doll + '.png">';
    if(settings.showmeall.val) { p += '<a href="' + path + '/play/lib/dolls/' + mob.doll + '.swf" download> скачать </a>'; }
    console.log(mob.name);
    p += lootblock(mob.loot);

    p += '</div>';
    return p;
}


function lootblock(loot) {
    console.log(loot);
    var p = '<div class="loot_block">';
    for (var loottype in loot) {
        console.log(loottype);
        p += '<div class="' + loottype + '">';
        p += '<div class="loot_block_title">' + lootLoc[loottype] + '</div>';
        p += '<div class="loot_block_content">';
        switch (loottype) {
            case 'questloot':
                p += getQuestLoot(loot[loottype]);
                break;
            case 'randloot':
            case 'loot':
            case 'money':
            case 'factionmoney':
            case 'twilights':
            case 'crystals':
                p += getLootBylvl(loot[loottype], loottype);
                break;
            default:
                p += 'скоро будет инфа';
        }
        p += '</div>';
        p += '</div>';
    }
    p += '</div>';
    return p;
}



// высота 2
// создает блоки под каждый квест
function getQuestLoot(loot) {
    var p = '';
    for (var questnum in loot) {
        p += '<div>';
        p += '<div class="loot_block_title" title="инфы о самих квестах у меня пока нет">id квеста: ' + questnum + '</div>';
        p += '<div class="loot_block_content">';
        p += getLootBylvl(loot[questnum], 'questloot');
        p += '</div>';
        p += '</div>';
    }
    return p;
}


// высота 1
//функция создает блоки под каждый уровень
function getLootBylvl(loot, loottype) {
    var p = '';
    console.log(loot);
    for (var lvl in loot) {
        /*
        if (typeof loot[lvl] !== 'object') {
            console.log(loot);
            p += makeDropBlock(loot);
            break;
        }
        */
        p += '<div>';
        p += '<div class="loot_block_title">Для ' + lootLoc[lvl] + ' уровней</div>';
        p += '<div class="loot_block_content">';
        var chance = 1;
        switch (loottype) {
            case 'loot':
                console.log(loot[lvl]);
                chance = getChance(loot[lvl]);
            case 'questloot':
            case 'randloot':
                p += makeDropBlock(loot[lvl], chance);
                break;
            case 'money':
                p += 'От ' + getPrice(loot[lvl].min) + ' До ' + getPrice(loot[lvl].max);
                break;
            case 'factionmoney':
            case 'twilights':
                p += 'От ' + loot[lvl].min + '<img src=""> До ' + loot[lvl].max + '<img src"">';
                break;
            case 'crystals':
                for (var k in loot[lvl]) {
                    if (loot[lvl][k] == 0) break;
                    p += '<img src="img/crystal.png" title="' + loot[lvl][k] + '">';
                }
                break;
        }
        p += '</div>';
        p += '</div>';
    }
    return p;
}

function getChance(loot) {
    var c = 0;
    console.log(loot);
    for(var i in loot) {
        c += loot[i];
    }
    return c/100;
}


// высота 0
// функция создает самый последний уровень, с самими вещами          
function makeDropBlock(loot, chance) {
    console.log(loot);
    var p = '';
    for (var j in loot) {
        var l = j.split('x');
        var c = Math.round(((chance)?(loot[j]/chance):(loot[j])) * 100)/100;
        if (l[0].indexOf(':') !== -1) {
            var k = l[0].split(':');
            p += '<div class="drop" title="' + mobs[k[1]].name + '\nШанс: ' + c + '%">';
            p += '<img class="miniimg" src="' + path + '/play/lib/avatar/' + mobs[k[1]].avatar + '.png">' + ((l.length > 1) ? ("X" + l[1]) : (''));
            p += '</div>';
        } else {
            p += '<div class="drop" title="' + items[l[0]].name + '\nШанс: ' + c + '%" value="' + l[0] + '">';
            p += '<img class="miniimg ' + items[l[0]].rarity + ' borderedpic" src="' + path + '/play/lib/jpg/' + items[l[0]].image + '.jpg">' + ((l.length > 1) ? ("X" + l[1]) : (''));
            p += '</div>';
        }
    }
    return p;
}


/*
// высота 1
//функция создает блок где все отображается уникально.
function getLootUnique(loot, loottype) {
    var p = '';
    for (var lvl in loot) {
        p += '<div>';
        switch (loottype) {
            case 'questloot':
            case 'randloot':
            case 'loot':
                p += makeDropBlock(loot[lvl]);
                break;
            case 'money':
                p += 'От ' + getPrice(loot[lvl].min) + ' До ' + getPrice(loot[lvl].max);
                break;
            case 'factionmoney':
            case 'twilights':
                p += 'От ' + loot[lvl].min + ' До ' + loot[lvl].max + ' ' + lootLoc[loottype];
                break;
            case 'crystals':
                
                break;
        }
        p += '</div>';
    }
    return p;
}
*/



/*


ffffffff    ll                  aaaa          ssssss        hh      hh
ffffffff    ll                  aaaa        sss    sss      hh      hh
ff          ll                 aaaaaa       ss      ss      hh      hh
ff          ll                 aa  aa       sss             hh      hh
ffffffff    ll                aa    aa       sssss          hhhhhhhhhh
ffffffff    ll                aa    aa          ssss        hhhhhhhhhh
ff          ll               aaaaaaaaaa            sss      hh      hh 
ff          ll               aaaaaaaaaa     ss      ss      hh      hh
ff          llllllllll      aa        aa    sss    sss      hh      hh
ff          llllllllll      aa        aa      ssssss        hh      hh





 */


function addLMLoginer() {
    var r = '';
    r += '<div id="login" class="logined"><object data="' + path + '/flash/logined.swf" type="application/x-shockwave-flash" id="flash_428931508" width="217" height="163"><param name="params" value="menu=false&amp;wmode=opaque"><param name="allowScriptAccess" value="always"><param name="flashvars" value="name=Just%20Bot&amp;race=1&amp;level=20&amp;avatar=186&amp;hp=3388&amp;maxhp=3388&amp;inner=0&amp;isgamexp=0&amp;lang=ru&amp;cdn=' + path + '"><param name="movie" value="' + path + '/flash/logined.swf"><param name="wmode" value="opaque"></object></div>';
    return r;
}

function addFlash(mob) {
    /* флеш объект отображается не так, как должен =( */
    /* на гитхабе вообще не грузит, так как не https */
    var swfsrc = '' + path + '/play/lib/dolls/' + mob.doll + '.swf'
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