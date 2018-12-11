$(function(){
    $("#m_gnb>ul>li").on("mouseover focusin",function(){
        $(this).children(".m_sub_wrap").stop().fadeIn(300);
    });
    $("#m_gnb>ul>li").on("mouseout focusout",function(){
        $(this).children(".m_sub_wrap").stop().fadeOut(300);
    });
    
    $("#m_must_have>div>div>ul>li").click(function(){
        var ch_con=$(this).children().attr("href");
        $(".tab_container>div").hide();
        $(ch_con).show();
        
        $("#m_must_have>div>div>ul>li").removeClass("m_active");
        $(this).addClass("m_active");
        
        return false;
    });
    
    $("#mb_toggle").click(function(){
        $(this).next("#mb_gnb").fadeToggle(250);
    });
    
    $("#mb_gnb>ul>li>a").click(function(){
        $("#mb_gnb>ul>li>a").next().stop().slideUp(250);
        $(this).next().stop().slideDown(250);
    });
    
    $("#mb_toggle").click(function(){
        $(this).toggleClass("active");
    });
    
    $("#m_con1>div>button").click(function(){
        $(this).parents("#m_con1").prevAll("header").toggleClass("active");
        $(this).toggleClass("active");
    });
    
    var n=0;
    $(".m_global_wrap").click(function(){
        n++;
        if(n%2 == 1 ){
            $(this).next("ul").fadeIn(500);
        }else{
            $(this).next("ul").fadeOut(500);
        };
    });
    
    
});





























