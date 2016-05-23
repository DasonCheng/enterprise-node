/**
 * Created by mac on 5/15/16.
 */
$(function () {
    $("ul.product-info-sort li").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
        $("ul.product-info-content li").eq($(this).index()).addClass("active").siblings().removeClass("active");
    })
    if ($(window).width() > 1340) {
        $("#charts").width(858).height(500);
    } else {
        $("#charts").width(568).height(300);
    }
})