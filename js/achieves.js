var achievesCat;
var achieves;

function showAchieves(){
    var p = '<div class="achieves_block">';
    p += '<div class ="achieves_selector">';
    for(var i in achievesCat) {
        p += '<option class="achieves_title" value="'+i+'">' + achievesCat[i].name + '</option>';
    }
    p += '</div>';
    p += '<div class ="achievess_content">';
    p += '<div class="achieve_descr">Выберите Ачиву</div>';
    p += '<div class="achieve_img">Картиночка</div>';
    p += '</div>';
    p += '</div>';
    return p;
}