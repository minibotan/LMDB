var picway = 'https://i.gyazo.com/';
var pics = [
    'baa2f71ddd1fb9b21fec7a3dfff5d837',
    'bd9c4a737303ef26ef9fe51a15559e53',
    '0e8b46b038f4dd0d1b7d5f7a1f5364f2',
    'f47fda9619fb1a281d74561a285a2f57',
    '297b06485572b654130ebe062c61afae',
    '4e0e99b927e8dbc44dd664a5bb09345c',
    '0076b234d9fa09916fe036b98aa78abf',
    'f138a9f1e0ea2ec01a98082a20e04e80',
    'becdf5a9b8a2d4f0493f88827dda9c72',
    '07a818681517a8b500834f4f81a5fe03',
    'b40fdce02670a1f8f159fcb3a55c9f5d',
    'f5954f4624181a8dfcb24b01bc900481',
    '566a53236b762636e740e694e48d5e1f'
    ];

var gifs = [
    '8fbd87f1bd1e89c0471028ac0d753373',
];



function pikchi() {
    var p = '<div class="pikchi">';
    for(var i of pics) {
        p += '<img src="' + picway + i + '.png">';
    }
    for(var i of gifs) {
        p += '<img src="' + picway + i + '.gif">';
    }
    p += '</div>';
    return p;
}