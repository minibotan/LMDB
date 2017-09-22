var lmdbCookie;
var cT = new Date();
cT.setTime (cT.getTime () - 100);
var expiredTime = 'expires=' + cT.toUTCString();
var cT = new Date();
cT.setTime (cT.getTime () + 365 * 24 * 3600 * 1000);
var expireTime =  'expires=' + cT.toUTCString();
var APIkey = 'AIzaSyDDfqYSyJiT27e_06gd9DR-LncrXggzflI';
var moboTableID = '19Oc7dnSkyR2oA8CwOamqbReNQ911-vf5sVECROdi';

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


function change(str) {
    var regexp = settings['ok'].regexp;
    regexp.compile(regexp);
    str = str.replace(regexp, (settings['ok'].val) ? ('$1') : ('$2'));
    regexp = settings['gender'].regexp;
    regexp.compile(regexp);
    str = str.replace(regexp, (settings['gender'].val) ? ('$1') : ('$2'));
    return str;
}


function readCookie() {
    
    lmdbCookie = document.cookie.split('; ');
    
    for (let i of lmdbCookie) {
        var name = i.split('=')[0];
        var val = i.split('=')[1];
        
        switch (name) {
            case 'ok':
            case 'gender':
            case 'showmeall':
                settings[name].val = (val == 'true');
                break;
        }
    }
}

function updateCookie(name) {
    document.cookie = name + '=;' + expiredTime;
    document.cookie = name + '=' + settings[name].val + ';' + expireTime;
}