'use strict'

var statsHidden = true;
var lootChance;

function makeMobBlock(mob) {
    let p = '<div class="moboblock">';
    p += '<div class="mobinfo">'
    p += '<img class="info_bg" src="img/other/charinfo.png">';
    p += '<div class="mobname" title="' + mob.name + '"><p>' + getName(mob.name) + '</p></div>';
    p += '<div class="mob__bar hp"><p class="mob__number">' + mob.maxhp + '/' + mob.maxhp + '</p></div>';
    if (!mob.startrage) mob.startrage = 0;
    p += '<div class="mob__bar rage" style="width: ' + (127 * mob.startrage / 100) + 'px;"><p class="mob__number">' + mob.startrage + '/' + 100 + '</p></div>';
    p += '<div class="race" title="' + searchValues.mobs.race[mob.race] + '"><img src="img/race/' + mob.race + '.png"></div>';
    p += '<img class="avatar" src="' + path + '/play/lib/avatar/' + mob.avatar + '.png">';
    p += '<h4 class="mob_level">' + mob.level + '</h4>';
    p += '</div>';
    p += '<div class="empty_space"></div>'
    p += mobBuffs(mob.buffs);
    p += '<img class="mobpic click_to_hide" src="img/mobs/' + mob.picture + '.png"  onerror="imgError(this)"/>';
    p += getMobStats(mob);
    p += '<div class="mob_locations">';
    p += '<p> Места обитания: </p>';
    let locs = mob.location.split(", ");
    for (let loc in locs) {
        p += '<span>' + searchValues.mobs.location[locs[loc]] + '</span>';
    }
    p += '</div>';
    if (settings.showmeall.val) {
        p += '<a href="' + path + '/play/lib/dolls/' + mob.doll + '.swf" download> скачать </a>';
    }
    p += lootblock(mob.loot);

    p += '</div>';
    return p;
}

function imgError(image) {
    image.onerror = "";
    image.src = "img/mobs/lal.png";
    return true;
}


function mobBuffs(){
    return "";
}


function getMobStats(mob) {
    let p = '';
    p += '<div class="mob_stats click_to_hide">';
    p += '<table>';

    let is1 = '<tr><td class="itemstat';
    let is2 = '</td><td class="itemstat2">';

    p += (mob.minhit || mob.maxhit) ? (is1 + '">Урон:' + is2 + ((mob.minhit) ? (mob.minhit) : (0)) + ' - ' + ((mob.maxhit) ? (mob.maxhit) : (0)) + '</td></tr>') : ('');
    p += (mob.defence) ? (is1 + '">Защита:' + is2 + mob.defence + '</td></tr>') : ('');
    p += (mob.strength) ? (is1 + '">Сила:' + is2 + mob.strength + '</td></tr>') : ('');
    p += (mob.agility) ? (is1 + '">Ловкость:' + is2 + mob.agility + '</td></tr>') : ('');
    p += (mob.stamina) ? (is1 + '">Выносливость:' + is2 + mob.stamina + '</td></tr>') : ('');
    p += (mob.crit) ? (is1 + '">Крит:' + is2 + mob.crit + '%</td></tr>') : ('');
    p += (mob.dodge) ? (is1 + '">Уворот:' + is2 + mob.dodge + '%</td></tr>') : ('');
    p += (mob.mastery) ? (is1 + '">Мастерство:' + is2 + mob.mastery + '</td></tr>') : ('');
    p += (mob.resilience) ? (is1 + '">Устойчивость:' + is2 + mob.resilience + '</td></tr>') : ('');
    p += '</table>';
    p += '</div>';
    return p;
}


function getName(name) {
    let names = name.split('|');
    return names[Math.floor(Math.random() * names.length)];
}


function lootblock(loot) {

    let p = '<div class="loot_block">';
    for (let loottype in loot) {
        if (loottype == 'money' || loottype == 'crystals')
            continue;

        p += '<div class="' + loottype + '">';
        p += '<div class="loot_block_title">' + lootLoc[loottype] + '</div>';
        p += '<div class="loot_block_content">';
        switch (loottype) {
            case 'loot':
            case 'randloot':
                p += makeItemInfo(loot[loottype], loottype);
                break;
            case 'questloot':
                p += getQuestLoot(loot[loottype]);
                break;
            case 'factionmoney':
            case 'twilights':
                p += getLootBylvl(loot[loottype], loottype);
                break;
            case 'psevdorandloot':
                var prl = loot[loottype];
                for (var it in prl) {
                    p += '<div class="drop" title="' + items[it].name + '\nШанс: от ' + prl[it].min + '% до ' + prl[it].max + '%" value="' + it + '">';
                    p += '<img class="miniimg ' + items[it].rarity + ' borderedpic" src="' + path + '/play/lib/jpg/' + items[it].image + '.jpg">';
                    p += '</div>';
                }
                break;
            case 'personalloot':
                p += makeDropBlock(loot[loottype], 1);
                break;
            case 'reqloot':
                p += makeReqLootBlock(loot[loottype]);
                break;
            default:
                p += 'скоро все будет';
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
    let p = '';
    for (let questnum in loot) {
        p += '<div>';
        p += '<div class="loot_block_title" title="инфы о самих квестах у меня пока нет">id квеста: ' + questnum + '</div>';
        p += '<div class="loot_block_content">';
        p += makeItemInfo(loot[questnum]);
        p += '</div>';
        p += '</div>';
    }
    return p;
}


function makeItemInfo(loot, loottype) {
    let itemInfo = {};
    let p = '';
    let totalChance = {};
    for (let lvl in loot) {
        totalChance[lvl] = 0;
        for (let item in loot[lvl]) {
            if (!itemInfo[item]) {
                itemInfo[item] = {};
            }
            itemInfo[item][lvl] = loot[lvl][item];
            totalChance[lvl] += loot[lvl][item]
        }
    }
    let chance = 0;
    for (let item in itemInfo) {
        let pp = '\nШансы:';
        for (let lvl in itemInfo[item]) {
            if (loottype == 'loot')
                chance = Math.round((itemInfo[item][lvl] / totalChance[lvl]) * 10000) / 100;
            else
                chance = itemInfo[item][lvl];
            pp += "\n" + ((lvl == 'default') ? ("любой") : (lvl)) + " лвл : " + chance + "%";
        }

        let l = item.split('x');
        if (l[0].indexOf(':') !== -1) {
            var k = l[0].split(':');
            p += '<div class="dropmob" title="' + mobs[k[1]].name + pp + '" value="' + k[1] + '">';
            p += '<img class="miniimg" src="' + path + '/play/lib/avatar/' + mobs[k[1]].avatar + '.png">' + ((l.length > 1) ? ("X" + l[1]) : (''));
            p += '</div>';
        } else {
            p += '<div class="drop" title="' + items[l[0]].name + pp + '" value="' + l[0] + '">';
            p += '<img class="miniimg ' + items[l[0]].rarity + ' borderedpic" src="' + path + '/play/lib/jpg/' + items[l[0]].image + '.jpg">' + ((l.length > 1) ? ("X" + l[1]) : (''));
            p += '</div>';
        }
    }
    return p;
}



// высота 1
//функция создает блоки под каждый уровень
function getLootBylvl(loot, loottype) {
    let p = '';

    for (let lvl in loot) {
        let chance = 1;
        switch (loottype) {
            case 'factionmoney':
                p += 'oт ' + loot[lvl].min + '<img src=""> до ' + loot[lvl].max + '<img src="">';
                break;
            case 'twilights':
                p += 'oт ' + loot[lvl].min + '<img src=""> до ' + loot[lvl].max + '<img src="">';
                break;
        }
    }
    return p;
}

function getCrystalInfo(loot) {
    let itemInfo = {};
    let p = '';
    for (let lvl in loot) {
        for (let item in loot[lvl]) {
            if (!itemInfo[item])
                itemInfo[item] = {};
            itemInfo[item][lvl] = loot[lvl][item];
        }
    }

    let chance = getChance(loot[lvl]);
    for (let k in loot[lvl]) {
        if (k == 0) continue;
        if (loot[lvl][k] == 0) break;
        let c = Math.round(((chance) ? (loot[lvl][k] / chance) : (loot[lvl][k])) * 100) / 100;
        p += '<img src="img/crystal.png" title="' + c + '%">';
    }
}

function getChance(loot) {
    let c = 0;

    for (let i in loot) {
        c += loot[i];
    }
    return c / 100;
}


// высота 0
// функция создает самый последний уровень, с самими вещами          
function makeDropBlock(loot, chance) {

    let p = '';
    for (let j in loot) {
        let l = j.split('x');
        let c;
        if (chance) {
            c = Math.round(((chance) ? (loot[j] / chance) : (loot[j])) * 1000) / 1000;
        } else {
            l = [loot[j]];
        }

        if (l[0].indexOf(':') !== -1) {
            let k = l[0].split(':');
            p += '<div class="dropmob" title="' + mobs[k[1]].name + ((c) ? ('\nШанс: ' + c + '%') : ('')) + '" value="' + k[1] + '">';
            p += '<img class="miniimg" src="' + path + '/play/lib/avatar/' + mobs[k[1]].avatar + '.png">' + ((l.length > 1) ? ("X" + l[1]) : (''));
            p += '</div>';
        } else {
            p += '<div class="drop" title="' + items[l[0]].name + ((c) ? ('\nШанс: ' + c + '%') : ('')) + '" value="' + l[0] + '">';
            p += '<img class="miniimg ' + items[l[0]].rarity + ' borderedpic" src="' + path + '/play/lib/jpg/' + items[l[0]].image + '.jpg">' + ((l.length > 1) ? ("X" + l[1]) : (''));
            p += '</div>';
        }
    }
    return p;
}

function makeReqLootBlock(loot) {
    let reqs = loot.reqs;
    let drop = loot.items;
    let p = '';
    p += '<div> Требования: </div>';
    p += '<div class="dropreqs">';

    for (let r of reqs) {
        if (r.type == "buff") {
            p += '<div class="drop" title="' + buffs[r.key].name + '" value="' + r.key + '">';
            p += '<img class="buffimg buffcolor' + buffs[r.key].isdebuff + ' borderedpic" src="' + path + '/play/lib/jpg/' + buffs[r.key].image + '.jpg">';
            p += '</div>';
        } else {
            p += '<div>Надо получить 1% репы Роутега</div>';
        }
    }
    p += '</div>';

    for (let l in drop) {
        p += '<div class="drop" title="' + items[l].name + '\nШанс: ' + drop[l] + '%' + '" value="' + l + '">';
        p += '<img class="miniimg ' + items[l].rarity + ' borderedpic" src="' + path + '/play/lib/jpg/' + items[l].image + '.jpg">';
        p += '</div>';
    }
    return p;
}

