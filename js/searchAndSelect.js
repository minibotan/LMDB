'use strict'

var defaultSearchParams = [
    'name',
    'descr'
]
// true - равенство
// false - присутствие
var hardsearch = false;


function makeSelectHTML(t) {
    let p = '';
    //if(settings.showmeall.val){
        p += '<div class ="search">';
        p += '<input type="text" placeholder="ура, поиск!" class="search_input">';
        p += '<button class="search_button">Поиск</button>';
        p += '</div>';
    //}
    p += '<div class="selector_parent">';
    p += '<div class="div_prop selector">';
    p += '<select class="prop_selector">';
    //p += '<option selected hidden>Параметр Выбора</option>';
    Property = "none";
    for (let i in searchProps[t]) {
        if (Property == "none") Property = i;
        p += '<option class="prop_option" value="' + i + '">' + searchProps[t][i] + '</option>';
    }
    p += '</select>';
    p += '</div>';
    p += '<div class="div_val selector">' + addSelect(t) + '</div>';
    p += '</div>';
    p += '<div class="stuff_holder content"></div>';
    return p;
}


function addSelect(t) {
    let p = '<select class="val_selector">';
    //p += '<option selected hidden>Выберите ' + searchProps[t][Property] + '</option>';
    let par = searchValues[t][Property];
    let b = false;
    Value = "none";
    for (let i in par) {
        if (Value == "none") Value = i;
        if (i.indexOf('group') != -1) {
            if (b) p += '</optgroup>';
            p += '<optgroup label="' + par[i] + '">';
            b = true;
        } else {
            p += '<option value="' + i + '">' + par[i] + '</option>';
        }
    }
    if (b) p += '</optgroup>';
    p += '<select>';
    return p;
}


function getMobOrItem(){
    return (curPageID == "items") ? items : mobs;
}

function showContent() {
    let k = counter * 40;
    let p = '';
    let contentList = getMobOrItem();
    for (let i in contentList) {
        let elem = contentList[i];
        if (check(elem)) {
            if (k < 1) {
                showElement(elem);
            }
            if (k < -38) break;
            k--;
        }
    }
    if (k > -39) {
        $('.moar_button').remove();
    }
    counter++;
    return p;
}


function check(a) {
    //if hidden
    if  (a.hidden) return false;
    //
    if  (a[Property] == Value) return true;
    // для разных undefined
    if  (typeof a[Property] == Value) return true;
    if  (typeof a[Property] == 'undefined' && Value == 0) return true;
    // если ищем по локации и локация у моба установлена, то смотрим, совпадает ли. иначе фолс.
    if ((Property == 'location' && a[Property])?(a[Property].indexOf(Value) !== -1):(false))  return true;
    // если ищем боссов
    if(Value == 'boss' && a.isboss) return true;
    // поиск по ступеням
    if(Property == 'reqlevel'){
        console.log("level")
        if (Value.indexOf('par') !== -1){
            console.log("par")
            if (a.reqparagon == Value.substr(3)) return true;
        }
    }

    return false;
}


function showElement(elem){
    let content = (curPageID == "items")?(makeItemBox(elem)):(makeMobBlock(elem));
    content = change(content);
    $('.stuff_holder').append(content);
}


function search(params, values){
    if(!params)
        var params = defaultSearchParams;
    
    if(!values)
        if($('.search_input').val())
            var values = $('.search_input').val().toLowerCase().split(', ');
        else 
            return false;

    $('.stuff_holder').empty();
    $('.moar_button').remove();


    var content = getMobOrItem();

    console.log(params)
    console.log(values)

    for(let e in content){
        let element = content[e];
        if(!settings.showmeall.val && element.hidden) continue;
        if(searchCheck(element, params, values)){ 
            showElement(element);
        }
    }
}


function searchCheck(element, params, values){
    let elementContent = '';
    for(let i of params){
        for(let val of values){
            if(hardsearch){
                if(element[i] == val) return true;
            }else{
                if(element[i].indexOf(val) != -1) return true;
            }
        }
    }
    return false;
}



/*
    't',//type "m" or "i" for mobs and items
    'i', // id of it
    'p',// propery 
    'v',// value of property
    'n'// search by name
*/





function ParseSearchAndDoStuff(){
    $('.contentbox').html('<div class="stuff_holder"></div>');
    let args = window.location.search.replace('?','').split('&');
    let props = {};
    for (const arg of args) {
        let a = decodeURIComponent(arg.split('=')[0]);
        let b = decodeURIComponent(arg.split('=')[1]);
        props[a] = b;
    }

    console.log(props);

    curPageID = (props.t == 'm')?('mobs'):('items');

    if(props.i){
        hardsearch = true;
        search(['id'], props.i.split(','));
    }

    if(props.n)
        search(['name'], props.n.split(','));

}