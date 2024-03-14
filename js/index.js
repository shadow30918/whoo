var winW ,
    action = false,
    isMobile,
    from_pc = false;

$(window).load(function(){
    $('.set_slider').slick({
        arrows: false,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 7000
    });

    $('.KOL_slider').slick({
        arrows: false,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 7000
    });

    // $('.loading').fadeOut(500,function(){
    //     $(this).remove();
    // });
});

$(document).ready(function(){
    init();

    $(".menu").click(function(){
        if(!$(".menu_list_wrap").hasClass("PC")){
            $(".menu_list_wrap").toggleClass("open");
        }
    })

    $(".menu_list_wrap li").click(function(){
        togo = $(this).attr("togo");

        $("html").animate({
			scrollTop: $("."+togo).offset().top
        }, 1000, 'swing');
        
        if(!$(".menu_list_wrap").hasClass("PC")){
            $(".menu_list_wrap").toggleClass("open");
        }
    })

    $(".cta").click(function(){
        $("html").animate({
			scrollTop: $(".form").offset().top
        }, 1000, 'swing');
    })

    $(".product_slider_wrap .mask").click(function(){
        $(".product_slider_wrap").hide();
        $('.product_slider').slick('unslick');
    })

    $(".p_dtl").click(function(){

        index = $(this).attr("index");

        img_type = (isMobile)?"_mb":"";

        $(".product_slider").html("");

        for (let i = 0; i < 3; i++) {
        
            $(".product_slider").append('<li class="P_slider_0'+index+'"><img src="img/product_0'+index+'_slider'+img_type+'.png"></li>')
            
            if(index<3){
                index++;
            }else{
                index = 1;
            }
        }
        
        $(".product_slider_wrap").show();

        $('.product_slider').slick({
            arrows: true,
            //dots: true,
            infinite: true,
            slidesToShow: 1,
            prevArrow: ".left",
            nextArrow: ".right",
            autoplay: true,
            autoplaySpeed: 7000
        });
    })

    
    $(".form .btn").click(function(){
        //check
        if(true){
            finish();
        }
    })

    $(".thanks .mask, .thanks .close").click(function(){
        $(".thanks").fadeOut(300);
    })



    $(window).resize(function(){
        init();
    })

    $(window).load(function(){
        $(".first").addClass("act");
        $(".title2, .title").addClass("act");
    })
});



function finish () {
    $(".thanks").fadeIn(300);
}

function init() {

    if( $(window).width() < 1062 ) {
        $(".menu_list_wrap").removeClass("PC");
        isMobile = true;
    }else{
        $(".menu_list_wrap").addClass("PC");
        isMobile = false;
        from_pc = true;
    }

    if($(".product_slider_wrap").css("display")=="block"){
        $(".product_slider_wrap").hide();
        $('.product_slider').slick('unslick');
    }
    

    var count = $(".img_init").length;

    $(".img_init").each(function(i){

        if(!isMobile){

            srcArray = $(this).attr("src").split(".");

            $(this).attr("src",srcArray[0].replace("_mb","")+"."+srcArray[1]);

        }else if(from_pc){

            srcArray = $(this).attr("src").split(".");

            $(this).attr("src",srcArray[0].replace("_mb","")+"_mb."+srcArray[1]);

        }

        if(i===count-1){
            console.log("F");
            $(".loading").remove();
            action = true;
        }
    })
}