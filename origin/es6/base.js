/**
 * Created by Origin on 2016/5/12.
 */
var width;
setFontSize();
$(window).resize(function () {
    setFontSize()
});
function setFontSize() {
    width = $(window).width();
    /*if (width > 1560) {
     width = 1560;
     } else if (width > 1280) {
     width = 1280;
     } else {
     width = 960;
     }*/
    if (width > 1340) {
        width = 1280;
    } else {
        width = 960;
    }
    document.documentElement.style.fontSize = width / 12.8 + 'px';
}