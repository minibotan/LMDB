'use strict'

function showAchieveCats() {
    $('.contentbox').html(makeAchieveCatBlock());
    SortAchieveCats();
    $(".childs").hide();
    showAchieves(1);
}

function makeAchieveCatBlock() {
    let p = '<div class="achieves_block">';
    p += '<div class ="achieves_selector">';
    for (let i in achievesCat) {
        p += '<div class="achieves_title" id="achCat_' + achievesCat[i].id + '" parent="' + achievesCat[i].parent_id + '" value="' + achievesCat[i].id + '">'
        p += achievesCat[i].name + '&nbsp;(<span style="color:#fff;">' + achievesCat[i].maxcount + '</span>)'
        p += '</div>';
    }
    p += '</div>';
    p += '<div class ="achieves_content">';
    p += '</div>';
    p += '</div>';
    return p;
}

function SortAchieveCats() {
    $(".achieves_title").each(function (i, elem) {
        let parnum = $(elem).attr("parent");
        if (parnum == 0) return true;
        let par = '#achCat_' + parnum;
        if (!$(par).hasClass("parentCat")) {
            $(par).addClass("parentCat");
            $(par).after('<div id="child_of_' + parnum + '" class="childs"></div>');
        }
        $(elem).appendTo("#child_of_" + parnum);
        let a = $(par).children('span').html();
        let b = $(elem).children('span').html();
        let c = Number(a)+Number(b);
        $(par).children('span').html(c);
    });
}


function showAchieves(id) {
    console.log("----------------   " + id);
    $(".achieve").remove();
    for (let i in achieves) {
        let a = achieves[i];
        if (a.categ_id == id) {
            $(".achieves_content").append(AchieveBlock(a));
        }
    }

    if( $(".achieves_content").html() == ""){
        $(".achieves_content").html("В этом разделе ачив нет");
    }

}


function AchieveBlock(a) {
    console.log("-  " + a.categ_id);
    let p = '<div class="achieve ' + ((a.hide) ? ("hidden") : ('')) + '">';
    p += '<div class achieve_name>' + change(a.name) + '</div>';
    p += '<img class="achieve_img" src="' + path + '/play/lib/jpg/' + change(a.image) + '.jpg">';
    p += '<div class="achieve_bg"><img class="achieve_bg_left" src="img/ach_bg.png">'
    p += '<img class="achieve_bg_right" src="img/ach_bg.png"></div>';
    p += '<div class="achieve_desc">' + change(a.descr) + '</div>';
    p += '<div class="achieve_points">' + a.points + '</div>';
    p += '</div>';
    return p;
}