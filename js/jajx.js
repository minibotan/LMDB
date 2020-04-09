'use strict'

var text = '';
var mainText;


$(document).ready(function () {

    
    readCookie();

    if(settings.iAmTester.val == false && settings.showmeall.val == true){
        settings.showmeall.val = false;
        settings.iAmTester.val = true;
    }

    if(location.hostname === ""){
        settings.showmeall.val = true;
        settings.iAmTester.val = true;
    }
    

    if (!navigator.cookieEnabled) {
        alert('Включите cookie для комфортной работы с этим сайтом');
    }

    if (!settings.showmeall.val) {
        anal();
    }

    if(settings.iAmDebil.val){
        ShowMePony();
    }


    achievesCat.sort((a, b) => +a.orderm - +b.orderm);

    upgradeItems();
    mainText = $('.contentbox').html();

    
    //if(settings.iAmTester.val || settings.showmeall.val){
        if(window.location.search !== "")
            ParseSearchAndDoStuff();
    //}
    
    /*               NAVIGATOR  & SETTINGS                   */


    //settings
    $('.settings_bar').on('click', 'li', function () {
        var id = $(this).attr('id');
        settings[id].val = !settings[id].val;
        $(this).html(settings[id][settings[id].val]);
        updateCookie(id);
        change(id);
    });

    //nav_panel buttons
    $('.nav_bar').html(function () {
        var newHtml = '';
        for (var x in mainButtons) {
            newHtml += '<button class="nav_button" id="' + mainButtons[x] + '" >' + x + '</button>';
        }
        return newHtml;
    });


    $(function(){
        var curDown = false,
            curXPos = 0;
        $(".nav_bar").mousemove(function(m){
          if(curDown === true){
           $(".nav_bar").scrollLeft($(".nav_bar").scrollLeft() + (curXPos - m.pageX));
          }
        });
        
        $(".nav_bar").mousedown(function(m){
          curDown = true;
          curXPos = m.pageX;
        });
        
        $(".nav_bar").mouseup(function(){
          curDown = false;
        });
      })


    //navigation events
    $('.nav_button').click(function () {
        $('.contentbox').html('');
        $(curPage).css('color', '#ccc');
        $(this).css('color', '#07b155');
        curPage = this;
        curPageID = $(this).attr("id");
        switch (curPageID) {
            case 'home':
                $('.contentbox').html(mainText);
                break;
            case 'items':
            case 'mobs':
                $('.contentbox').html(makeSelectHTML(curPageID));
                $('.val_selector').trigger('change');
                break;
            case 'events':
                $('.contentbox').html(makeEventHTML());
                break;
            case 'maps':
                $('.contentbox').html(makeMapHTML());
                $('#beginning').trigger('click');
                break;
            case 'odevalka':
                $('.contentbox').html(makeOdevalka());
                recalculate($('.char'));
                break;
            case 'achievements':
                showAchieveCats();
                break;
            default:
                $('.contentbox').html('<p>Тут пока ничего нет, но возможно, скоро что-то появится</p>');
        }
        $(window).scrollTop(0);
    });


    /*                    CONTENT                       */

    //events
    $('.contentbox').on('click', ".event_title", function () {
        showEvent(events[$(this).val()]);
        return false;
    });


    //achieves
    $('.contentbox').on('click', ".achieves_title", function () {
        let id = $(this).attr("value");
        if($(this).attr("parent") == 0)
            $(".childs").hide();

        $(".selected_ach").removeClass("selected_ach");
        $(this).addClass("selected_ach");

        if($(this).hasClass("parentCat")){
            console.log($("#child_of_"+id).show());
            //$("#child_of_"+id).show("fast");
        }
        showAchieves(id);
        return false;
    });


    //maps
    $('.contentbox').on('click', ".map_button", function () {
        showMap(this);
        return false;
    });


    //items & mobs

    $('.contentbox').on('click', '.search_button', function(){
        search();
    });

    $('.contentbox').on('keydown', '.search_input', function(e){
        if(e.keyCode == 13)
        {
            search();
        }
    });

    $('.contentbox').on('change', ".prop_selector", function () {
        Property = $(this).val();
        $(this).parent().parent().children('.div_val').html(addSelect($(curPage).attr('id')));
        $(".val_selector").trigger("change");
        return false;
    });

    $('.contentbox').on('change', ".val_selector", function () {
        console.log("got chng");
        counter = 0;
        $('.stuff_holder').empty();
        Value = $(this).val();
        $('.stuff_holder').after('<div class ="moar_button"><button>ЕЩЕ!</button></div>');
        showContent();
        return false;
    });

    $('.contentbox').on('click', ".moar_button button", function () {
        showContent();
        return false;
    });


    // mob image/stats changer
    $('.row').on('click', ".click_to_hide", function () {
        let parent = $(this).parent();

        parent.children(".mob_stats").toggle();
        parent.children(".mobpic").toggle();
    });



    //mob loot
    $('.row').on('click', ".loot_block_title", function () {
        $(this).parent().children('.loot_block_content').fadeToggle("fast");
        return false;
    });

    $('.contentbox').on('click', ".drop", function () {
        var id = $(this).attr('value');
        $(".overlay").toggle();
        $(".overlay").html(makeItemBox(items[id]));
    });

    $('.contentbox').on('click', ".dropmob", function () {
        var id = $(this).attr('value');
        $(".overlay").toggle();
        $(".overlay").html(makeMobBlock(mobs[id]));
    });

    $('.overlay').click(function (e) {
        if(e.target != this) return;
        $(this).children('div').remove();
        $(".overlay").toggle();
    });


    //buffs

    $('.contentbox').on('mouseenter', ".buffimg", function(){
        $(this).after(BuffTooltipById($(this).attr("value")));
    })

    $('.contentbox').on('mouseleave', ".buff_block", function(){
        $('.buff_tooltip').remove();
    })



    // odevalka
    $('.contentbox').on('click', "#odevalka_change", function () {
        if (bull) {
            $(this).parent().parent().append(secondChar());
            recalculate($('.enemy'));
        } else {
            $('.enemy').remove();
        }
        bull = !bull;
        $('#odevalka_change').html(odevalkastate[bull]);
        return false;
    });

    $('.contentbox').on('click', ".char .itemslot", function () {
        $(this).html(chooseItem($(this)));
        return false;
    });

    $('.contentbox').on('mouseleave', '.char .itemselect', function () {
        $(this).remove();
    });

    $('.contentbox').on('click', ".char .option", function () {
        var selected = $(this);
        equipItem2($(this).parent().parent().empty(), selected.attr("value"));

        return false;
    });

    $('.contentbox').on('mouseenter', ".char tr>[value]", function () {
        var id = $(this).attr('value');
        $(this).append('<div><div>')
            .children('div')
            .css('position', 'relative')
            .html(makeItemBox(items[id]))
            .children('.item')
            .css('position', 'absolute')
            .css('width', '260px')
            .css('z-index', '3');
    });

    $('.contentbox').on('mouseleave', ".char tr>[value]", function () {
        $(this).empty();
    });


    //naked Trisha
    $('body').keyup(function (eventObject) {
        if (eventObject.which > 64 && eventObject.which < 91) {
            text += String.fromCharCode(eventObject.which);
        } else {
            text = '';
        }
        if (text.substr(text.length - 10) == 'TITSORGTFO') {
            var swfsrc = '' + path + '/play/lib/locationObjects/general/812.swf';
            var p = '<h2>Хорошо, вот тебе голая Триша</h2>';
            p += '<a href="' + swfsrc + '" download>Скачать</a>';
            p += '<object type="application/x-shockwave-flash" width="400" height="550">';
            p += '<param name="movie" value="' + swfsrc + '">';
            p += '<embeded src="' + swfsrc + '"></embeded>';
            p += '<param name="wmode" value="transparent" />';
            p += '<param name="allowScriptAccess" value="always" />';
            p += '<param name="flashvars" value="stage=1"/>';
            p += '<param name="play" value="true" />';
            p += '<param name="loop" value="true" />';
            p += '</object>';
            $('.contentbox').html(p);
        }
        if (window.btoa(text.substr(text.length - 14)) == 'SVNFRURFQURQRU9QTEU=') {
            settings.showmeall.val = !settings.showmeall.val;
            updateCookie('showmeall');
            $('.stuff_holder').html('<div class ="moar_button"><button>ЕЩЕ!</button></div>');
            counter--;
            showContent();
        }
        if (text.substr(text.length - 6) == 'PIKCHI') {
            $('.contentbox').html(pikchi());
        }
        if (text.substr(text.length - 11) == 'SHOWMECLANS') {
            $('.contentbox').html(showClanList());
        }
        if (text.substr(text.length - 5) == 'DEBIL') {
            ShowMePony();
        }
    });

});

function ShowMePony(){
    $('body').css("background", "url('https://images.alphacoders.com/512/thumb-1920-512795.jpg') center center fixed");
}



function tmp() {
    var p = 'Добро пожаловать на сайтик <span title="(не путать с другой аббревиатурой, которая достаточно похожа)">ЛМДБ</span><br>';
    p += 'На этом сайте будет опубликовано очень много полезной информации, которая вам наверняка пригодится вовремя игры в <a href="http://lostmagic.ru">LostMagic</a>.';
    return p;
}


function tmpLocs() {
    var p = '<h2> Это список из локаций. Названий у меня нет. И скоро я уберу этот список.<br>Кто успел, тот посмотрел</h2>';
    p += '<ol>';
    for (var i = 1; i < 10; i++) {
        p += '<li><img src="' + path + '/play/lib/location/0' + i + '.jpg"></li>';
    }
    for (var i = 10; i < 300; i++) {
        p += '<li><img src="' + path + '/play/lib/location/' + i + '.jpg"></li>';
    }
    p += '</ol>';
    return p;
}


var last = 1;
var step = 50;

function locationObjects(k) {
    if (k !== undefined) {
        last = k * step + 1;
    }
    var p = '<h2> Это список из объектов в локациях. Названий у меня нет. И скоро я уберу этот список.<br>Кто успел, тот посмотрел</h2>';
    p += '<ol>';
    for (var i = last; i < last + step; i++) {
        p += '<li>';
        var swfsrc = '' + path + '/play/lib/locationObjects/general/' + i + '.swf';
        p += '<object type="application/x-shockwave-flash" width="970" height="330">';
        p += '<param name="movie" value="' + swfsrc + '">';
        p += '<embeded src="' + swfsrc + '"></embeded>';
        p += '<param name="wmode" value="transparent" />';
        p += '<param name="allowScriptAccess" value="always" />';
        p += '<param name="flashvars" value="stage=1"/>';
        p += '<param name="play" value="true" />';
        p += '<param name="loop" value="true" />';
        p += '<param name="scale" value="noScale" />';
        p += '</object>';
        p += '<a href="' + swfsrc + '"> ссылочка </a>';
        p += '<a href="' + swfsrc + '" download> скачать </a>';
        p += '</li>';
    }
    p += '</ol>';
    last += step;
    $('.contentbox').html(p);
}



function showWeeks() {
    var p = '<h2> Это список из локаций. Названий у меня нет. И скоро я уберу этот список.<br>Кто успел, тот посмотрел</h2>';
    p += '<ol>';
    for (var y = 2010; y < 2018; y++) {
        for (var m = 1; m < 13; m++) {
            for (var d = 1; d < 32; d++) {
                p += '<li>' + ((d < 10) ? ('0' + d) : (d)) + ((m < 10) ? ('0' + m) : (m)) + y + '<img src="http://www.lostmagic.ru/useruploads/images/news/' + ((d < 10) ? ('0' + d) : (d)) + ((m < 10) ? ('0' + m) : (m)) + y + '.png"></li>';
                p += '<li>' + ((d < 10) ? ('0' + d) : (d)) + ((m < 10) ? ('0' + m) : (m)) + ('' + y).substr(2) + '<img src="http://www.lostmagic.ru/useruploads/images/news/' + ((d < 10) ? ('0' + d) : (d)) + ((m < 10) ? ('0' + m) : (m)) + ('' + y).substr(2) + '.png"></li>';
            }
        }
    }
    p += '</ol>';
    $('.contentbox').html(p);
    clearImgs();
}


function downloadAll() {
    for (var mob in mobs) {
        var src = path + '/play/lib/dolls/' + mobs[mob].doll + '.swf';
        window.open(src, '_blank');
        wt(100);
    }
}

function wt(sleeptime) {
    stTime = new Date().getMilliseconds;
    while (true) {
        if (sleeptime < new Date().getMilliseconds - stTime) break;
    }

}

function upgradeItems() {
    let itemloot = {};
    var upgraded_items = items;
    for (var mob in mobs) {
        if(mobs[mob].hidden) continue;
        let mobid = mob;
        for (var loottype in mobs[mob].loot) {
            if (loottype.indexOf("loot") != -1) {
                let l = mobs[mob].loot[loottype];
                var iids = getUpDrop(l);
                for(var drop in iids){
                    if (!itemloot[iids[drop]])
                        itemloot[iids[drop]] = [];
                    itemloot[iids[drop]].push(mobid);
                }
            }
        }
    }

    for (let iid in itemloot) {
        if(!upgraded_items[iid]) continue;
        upgraded_items[iid].dropfrom = [];
        let prev = 0;
        itemloot[iid].sort();
        for(let mid in itemloot[iid]){
            if(itemloot[iid][mid] == prev) continue;
            prev = itemloot[iid][mid];
            upgraded_items[iid].dropfrom.push("adsf:" + prev);
        }
    }
    items = upgraded_items;
}


function getUpDrop(l){
    let r = [];
    for (let lvl in l) {
        let drops = l[lvl];
        if (typeof (drops) == "object") {
            r = r.concat(getUpDrop(drops));
        } else
            r.push(lvl);
    }
    return r;
}

function showClanList() {
    let p = '<h2> Это список Кланов. Названий у меня нет. И скоро я уберу этот список.<br>Кто успел, тот посмотрел</h2>';
    p += '<ol  align="left">';
    for (let i = 1; i < 300; i++) {
        p += '<li><img src="' + path + '/play/lib/clan/' + i + '.png"></li>';
    }
    p += '</ol>';
    return p;
}