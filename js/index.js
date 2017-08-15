/**
 * Created by Administrator on 2017/8/4.
 */
$(function () {
    // 点击置顶
    $('.tit3').click(function () {
        $(this).parent().parent().prependTo($('#scroller'));
    })

    // 侧滑
    touch.on('.title','drag',function (e) {
        // e.preventDefault();
        if($(this).attr('class')=='title'){
            if(e.x<-80){
                $(this).parent().find('.fa').css("display","none");
                $(this).parent().find('.power').css("display","block");
            }
            if(e.x>80){
                $(this).parent().find('.fa').css("display","block");
                $(this).parent().find('.power').css("display","none");
            }
        }else if($(this).parent().attr('class')=='title'){
            if(e.x<-80){
                $(this).parent().parent().find('.fa').css("display","none");
                $(this).parent().parent().find('.power').css("display","block");
            }
            if(e.x>80){
                $(this).parent().parent().find('.fa').css("display","block");
                $(this).parent().parent().find('.power').css("display","none");
            }
        }
    });
});
