'use strict'

var elemContentNames = [
    'name',
    'descr'
]









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
    if  (a[Property] == Value  || 
        (typeof a[Property] == Value) || 
        ((Property == 'location' && a[Property])?(a[Property].indexOf(Value) !== -1):(false)))
        return true;
        
    if(Value == 'boss' && a.isboss)
        return true;

    return false;
}


function showElement(elem){
    let content = (curPageID == "items")?(makeItemBox(elem)):(makeMobBlock(elem));
    content = change(content);
    $('.stuff_holder').append(content);
}


function search(){
    console.log($('.search_input').val());
    if($('.search_input').val()){
        var str = $('.search_input').val().toLowerCase();
    } else {
        return false;
    }
    $('.stuff_holder').empty();
    $('.moar_button').remove();
    let attrs = str.split(', ');
    let arrToSearch;
    if($(curPage).attr("id") == "items") {
        arrToSearch = items;
    } else {
        arrToSearch = mobs;
    }
    for(let arrElem in arrToSearch){
        let element = arrToSearch[arrElem];
        if(element.hidden) continue;
        if(searchCheck(element, attrs)){
            showElement(element);
        }
    }
}


function searchCheck(element, attrs){
    let elementContent = '';
    for(let i of elemContentNames)
        elementContent += ' ::: ' + element[i];
    elementContent = elementContent.toLowerCase();
    for(let attr of attrs){
        if(elementContent.indexOf(attr) != -1)
            return true;
    }
    return false;
}