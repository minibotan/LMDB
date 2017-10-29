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
        p += '<option class="achieves_title" id="achCat_' + achievesCat[i].id + '" parent="' + achievesCat[i].parent_id + '" value="' + achievesCat[i].id + '">' + achievesCat[i].name + '(' + achievesCat[i].count + ')' + '</option>';
    }
    p += '</div>';
    p += '<div class ="achieves_content">';
    p += '</div>';
    p += '</div>';
    return p;
}

function SortAchieveCats() {
    $(".achieves_title").each(function (i, elem) {
        if (i == 0) return true;
        let parnum = $(elem).attr("parent");
        let par = '#achCat_' + parnum;
        if (!$(par).hasClass("parentCat")) {
            $(par).addClass("parentCat");
            $(par).after('<div id="child_of_' + parnum + '" class="childs"></div>');
        }
        $(elem).appendTo("#child_of_" + parnum);
    });
}


function showAchieves(id) {
    $(".achieve").remove();
    for (let i in achieves) {
        a = achieves[i];
        if (a.categ_id == id) {
            $(".achieves_content").append(AchieveBlock(a));
        }
    }

}


function AchieveBlock(a) {
    let p = '<div class="achieve ' + ((a.hide) ? ("hidden") : ('')) + '">';
    p += '<div class achieve_name>' + change(a.name) + '</div>';
    p += '<img class="achieve_img" src="' + path + '/play/lib/jpg/' + change(a.image) + '.jpg">';
    p+= '<div class="achieve_bg"><img class="achieve_bg_left" src="img/ach_bg.jpg">'
    p+=                     '<img class="achieve_bg_right" src="img/ach_bg.jpg"></div>';
    p += '<div class="achieve_desc">' + change(a.descr) + '</div>';
    p += '<div class="achieve_points">' + a.points + '</div>';
    p += '</div>';
    return p;
}