var elemContentNames = [
    'name',
    'descr'
]









function makeSelectHTML(t) {
    var p = '';
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
    for (var i in searchProps[t]) {
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
    var p = '<select class="val_selector">';
    //p += '<option selected hidden>Выберите ' + searchProps[t][Property] + '</option>';
    var par = searchValues[t][Property];
    var b = false;
    Value = "none";
    for (var i in par) {
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
    var k = counter * 40;
    var p = '';
    var contentList = getMobOrItem();
    for (var i in contentList) {
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


function showElement(elem){
    let content = (curPageID == "items")?(makeItemBox(elem)):(makeMobBlock(elem));
    content = change(content);
    $('.stuff_holder').append(content);
}


function search(){
    console.log($('.search_input').val());
    if($('.search_input').val()){
        str = $('.search_input').val().toLowerCase();
    } else {
        return false;
    }
    $('.stuff_holder').empty();
    $('.moar_button').remove();
    var attrs = str.split(', ');
    var arrToSearch;
    if($(curPage).attr("id") == "items") {
        arrToSearch = items;
    } else {
        arrToSearch = mobs;
    }
    for(var arrElem in arrToSearch){
        element = arrToSearch[arrElem];
        if(searchCheck(element, attrs)){
            showElement(element);
        }
    }
}


function searchCheck(element, attrs){
    let elementContent = '';
    for(var i of elemContentNames)
        elementContent += ' ::: ' + element[i];
    elementContent = elementContent.toLowerCase();
    for(var attr of attrs){
        if(elementContent.indexOf(attr) != -1)
            return true;
    }
    return false;
}