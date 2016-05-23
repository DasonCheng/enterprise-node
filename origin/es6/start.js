/**
 * Created by Origin on 2016/5/20.
 */
$(function () {
    var wHeight = $(window).height();
    if (wHeight > 739) {
        $(".notice-box").height(wHeight - 120);
        $("body").css("background-size", "cover");
    }
})