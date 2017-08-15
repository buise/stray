/**
 * Created by Administrator on 2017/8/8.
 */
$(function () {
    $(".to-top").click(function () {
        $(this).hide();
        $('.no-to-top').show();
    })
    $(".no-to-top").click(function () {
        $(this).hide();
        $('.to-top').show();
    })

    $(".is").click(function () {
        $(this).hide();
        $('.isnot').show();
    })
    $(".isnot").click(function () {
        $(this).hide();
        $('.is').show();
    })
})