function BuffTooltipById(id) {
    let p = '';
    if (buffs[id])
        p = GetBuffTooltip(buffs[id]);
    return p;
}


function GetBuffTooltip(buff) {
    let p = '<div class="buff_tooltip">';
    p += '<div class="buff_name">' + buff.name + '</div>';
    if (buff.descr)
        p += '<div class="buff_descr">' + change(buff.descr) + '</div>';
    if (buff.validtime)
        p += '<div class="buff_validtime">Время действия: ' + GetTime(buff.validtime*60) + '</div>';

    p += '</div>';
    return p;
}