$(function(){
    // 이미지 슬라이드 슬릭적용
    $(".slide_img_m").slick({
        arrows: true,
        dots:true,
        autoplay: true
    });

    // 서치버튼 설정
    $(".search_btn_m, .search_btn_pc").click(function(){
        $(".search_area_m").css({"top":"0","z-index":"200"});
        $(".search_area_modal_m").css({"opacity":"1","z-index":"199"});
    })

    $(".search_area_modal_m").click(function(){
        $(".search_area_m").css({"top":"-200px"});
        $(".search_area_modal_m").css({"opacity":"0","z-index":"-1"});
    })

    $(".menu_list_body_m>li>a").click(function(){
        var me = $(this).siblings();
        var sib = $(this).parent("li").siblings().find(".sub_m");

        if(me.hasClass("on") == true){
            me.removeClass("on");
            me.slideUp();
        }else{
            me.addClass("on");
            me.slideDown();

            sib.removeClass("on");
            sib.slideUp();
        }
    })

    $(".toggle_btn_m").click(function(){
        $(".main_menu_m").css({"left":"0"});
        $(".menu_list_modal_m").css({"opacity":"1","z-index":"199"});
    })

    $(".menu_list_modal_m").click(function(){
        $(".main_menu_m").css({"left":"-370px"});
        $(this).css({"opacity":"0","z-index":"-2"});
    })

    $(".global_pc").click(function(){
        $(".global_pc span").toggleClass("img_on");
        $(".global_sub_pc").slideToggle();
    })

    // 메인메뉴 pc형
    $(".main_menu_pc>li, .sub_bg_pc").hover(function(){
        $(".sub_pc, .sub_bg_pc").stop().slideDown();
    }, function(){
        $(".sub_pc, .sub_bg_pc").stop().slideUp();
    })

    
})// jq 끝