/**
 * Created by Administrator on 2017/8/7.
 */
$(function () {
    $('.set-down').click(function () {
        $(this).parent().children('.hide').show();
    })
    $('.ok').click(function () {
        var obj=$(this).parent().find("label").find('input');
        var s='';
        var text='';
        for(let i=0; i<obj.length; i++){
            if(obj[i].checked){
                s++;
                text=obj[i].value;
            }
        }
        if(s==1){
            $(this).parent().prev().val(text);
        }else if(s==0){
            $(this).parent().prev().val("");
        }else{
            $(this).parent().prev().val('组合提醒');
        }
        $(this).parent().hide();
    })
})