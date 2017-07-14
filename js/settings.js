var lmdbCookie;
var cT = new Date();
cT.setTime (cT.getTime () - 100);
var expiredTime = 'expires=' + cT.toUTCString();
var cT = new Date();
cT.setTime (cT.getTime () + 365 * 24 * 3600 * 1000);
var expireTime =  'expires=' + cT.toUTCString();

var settings = {
    gender: {
        true: "Мой перс - Мужчина",
        false: "Мой перс - Женщина",
        regexp: /\{g:([а-яё a-z]*):([а-яё a-z]*)\}/ig
    },
    ok: {
        true: "Я играю через ОК",
        false: "Я адекватный",
        regexp: /\{ok:([а-яё a-z0-9\-]*):([а-яё a-z0-9\-]*)\}/ig
    },
    showmeall: {
    }
}


function change(id) {
    console.log(id);
    var regexp = settings[id].regexp;
    regexp.compile(regexp);
    html = $('.content').html();
    $('.content').html(html.replace(regexp, (settings[id].val) ? ('$1') : ('$2')));
}


function readCookie() {
    console.log('readcookie');
    lmdbCookie = document.cookie.split('; ');
    console.log(lmdbCookie);
    for (let i of lmdbCookie) {
        var name = i.split('=')[0];
        var val = i.split('=')[1];
        console.log(name + ' --- ' + val);
        switch (name) {
            case 'ok':
            case 'gender':
            case 'showmeall':
                settings[name].val = val;
                break;
        }
    }
}

function updateCookie(name) {
    document.cookie = name + '=;' + expiredTime;
    document.cookie = name + '=' + settings[name].val + ';' + expireTime;
}