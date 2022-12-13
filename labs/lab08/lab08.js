$(document).ready(function(){
    // табы на js
    $(".dws-form").on("click",".tab",function(){
        
        //удаление класса active
        $(".dws-form ").find(".active").removeClass("active");
        
        //добавляем active
        $(this).addClass("active");
        
        //выборка элемента по индексу 
        $(".tab-form").eq($(this).index()).addClass("active");
    })
});
