var ok = true;
var gender = true;
var okregexp = /\{ok:([а-яё a-z0-9\-]*):([а-яё a-z0-9\-]*)\}/ig;
okregexp.compile(okregexp);
var gregexp = /\{g:([а-яё a-z]*):([а-яё a-z]*)\}/ig;
gregexp.compile(gregexp);

function okcheck(){
    html = $('.contentbox').html();
    $('.contentbox').html(html.replace(okregexp, (ok)?('$1'):('$2')));
}

function gcheck(){
    html = $('.contentbox').html();
    $('.contentbox').html(html.replace(gregexp, (gender)?('$1'):('$2')));
}