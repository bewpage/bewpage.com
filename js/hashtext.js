// Email obfuscator script 2.1 by Tim Williams, University of Arizona
// Random encryption key feature coded by Andrew Moulden
// This code is freeware provided these four comment lines remain intact
// A wizard to generate this code is at http://www.jottings.com/obfuscator/

function test(adress) {
    var coded = "b0wb@b0wb.s6P";
    var key = "ZxsfE9eBXuDVqkRwCmT0v2QHrAIaSKPjotN8MypJgL54l6bziY1cUO7dhGnF3W";
    var shift = coded.length;
    var link = "";
    for (var i = 0; i<coded.length; i++) {
        if (key.indexOf(coded.charAt(i))==-1) {
            var ltr = coded.charAt(i);
            link += (ltr)
        }
        else {
            ltr = (key.indexOf(coded.charAt(i)) - shift + key.length) % key.length;
            link += (key.charAt(ltr));
        }
    }
    // document.write("<a href='mailto:"+link+"'>"+link+"</a>");
}

