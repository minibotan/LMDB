var lmdbCookie;
var cT = new Date();
cT.setTime (cT.getTime () - 1);
var expiredTime = 'expires=' + cT.toUTCString();
var cT = new Date();
cT.setTime (cT.getTime () + 365 * 24 * 3600 * 1000);
var expireTime =  'expires=' + cT.toUTCString();

var settings = {
    gender: {
        true: "Мой перс - Мужчина",
        false: "Мой перс - Женщина",
        val: true,
        regexp: /\{g:([а-яё a-z]*):([а-яё a-z]*)\}/ig
    },
    ok: {
        true: "Я играю через ОК",
        false: "Я адекватный",
        val: true,
        regexp: /\{ok:([а-яё a-z0-9\-]*):([а-яё a-z0-9\-]*)\}/ig
    },
    showmeall:{
        val:false
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
    console.log('куки Ж ' + document.cookie);
    lmdbCookie = document.cookie.split(';');
    for (let i of lmdbCookie) {
        switch (i.split('=')[0]) {
            case 'ok':
                ok = i.split('=')[1];
                break;
            case 'gender':
                gender = i.split('=')[1];
                break;
            case 'showmeall':
                showmeall = i.split('=')[1];
                break;
        }
    }
}

function updateCookie(name) {
    document.cookie = name + '=;' + expiredTime;
    console.log(name + '=;' + expiredTime);
    document.cookie = name + '=' + settings[name].val + ';' + expireTime;
    console.log(name + '=' + settings[name].val + ';' + expireTime);
    console.log('куки : ' + document.cookie);
}