var mobProperty;
var mobValue;


function makeMobHTML(){
    var newHTML = '';
    
    return newHTML;
}


function swowMobs(){
    var newHTML = '';
    for(var i in mobs) {
        if(mobs[i].level === 3) {
            newHTML += makeMobBlock(mobs[i]);
        }
    }
    return newHTML;
}



function makeMobBlock(mob){
    var p='<div class="moboblock">';
    //p+= '<img src="http://static.lostmagic.ru/play/lib/jpg/'+mob.doll+'.jpg">'
    p+= '<div class="mobinfo">'
    p+= '<p class="mobname">' + mob.name + '</p>';
    p+= '<p class="mobhp">' + mob.maxhp +'/'+mob.maxhp+ '</p>';
    p+= '</div>';
    p+= '<img class="avatar" src="http://static.lostmagic.ru/play/lib/avatar/'+mob.avatar+'.png">'
    p+= '<img class="mobpic"src="img/mobs/'+mob.doll+'.png">';
    p+= '</div>';
    return p;
}




function addLMLoginer(){
    var r ='';
    r+= '<div id="login" class="logined"><object data="http://static.lostmagic.ru/flash/logined.swf" type="application/x-shockwave-flash" id="flash_428931508" width="217" height="163"><param name="params" value="menu=false&amp;wmode=opaque"><param name="allowScriptAccess" value="always"><param name="flashvars" value="name=Just%20Bot&amp;race=1&amp;level=20&amp;avatar=186&amp;hp=3388&amp;maxhp=3388&amp;inner=0&amp;isgamexp=0&amp;lang=ru&amp;cdn=http://static.lostmagic.ru"><param name="movie" value="http://static.lostmagic.ru/flash/logined.swf"><param name="wmode" value="opaque"></object></div>';
    return r;
}

function addFlash(mob){
    /* флеш объект отображается не так, как должен =( */
    /* на гитхабе вообще не грузит, так как не https */
    var swfsrc = 'http://static.lostmagic.ru/play/lib/dolls/'+mob.doll+'.swf'
    var p = '';
    p+= '<object type="application/x-shockwave-flash">'
    p+= '<param name="movie" value="'+swfsrc+'">'
    p+= '<embeded src="'+swfsrc+'"></embeded>'
    p+= '<param name="wmode" value="transparent" />';
    p+= '<param name="allowScriptAccess" value="always" />';
    p+= '<param name="flashvars" value="stage=1"/>';
    p+= '<param name="play" value="true" />';
    p+= '<param name="loop" value="true" />';
    p+= '</object>';
    return p;
}


