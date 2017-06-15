var ok = true;
var gender = true;

var settings = {
    gender : {
        true : "Мой перс - Мужчина",
        false : "Мой перс - Женщина",
        val : true,
        regexp : /\{g:([а-яё a-z]*):([а-яё a-z]*)\}/ig
    }, 
    ok : {
        true : "Я играю через ОК",
        false : "Я адекватный",
        val : true,
        regexp : /\{ok:([а-яё a-z0-9\-]*):([а-яё a-z0-9\-]*)\}/ig
    }
}
function change(id){
    console.log(id);
    regexp = settings[id].regexp;
    regexp.compile(regexp);
    html = $('.content').html();
    $('.content').html(html.replace(regexp, (settings[id].val)?('$1'):('$2')));
}