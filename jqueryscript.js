$(document).ready(function(){
	
    $(".toggle").click(function(){
        $(".dropdown-content").toggle();
    });

    $(".dropdown-content").mouseleave(function(){
        $(".dropdown-content").toggle();
    });
    
    $("#menu_icon").hover(function(){
        $(".menu_background").toggle('fade','fast',function(){
            $(".menu_background").addClass("icon_background");
        });       
    });


    
    $("#title").click(function(){
        $("html,body").animate({scrollTop: $(".content").offset().top}, 'slow');    
    });
    $("#about_me_footer").click(function(){
        $("html,body").animate({scrollTop: $(".content").offset().top}, 'slow');    
    });
    $("#resume_footer").click(function(){
        $("html,body").animate({scrollTop: $("#resume").offset().top}, 'slow');    
    });
    $("#things_ive_done_footer").click(function(){
        $("html,body").animate({scrollTop: $("#things_ive_done").offset().top}, 'slow');    
    });
    $("#contact_me_footer").click(function(){
        $("html,body").animate({scrollTop: $("#contact_me").offset().top}, 'slow');    
    });
    $("#aboutmelink").click(function(){
        $("html,body").animate({scrollTop: $(".content").offset().top}, 'slow');    
    });
    $("#resumelink").click(function(){
        $("html,body").animate({scrollTop: $("#resume").offset().top}, 'slow');    
    });
    $("#thingsivedonelink").click(function(){
        $("html,body").animate({scrollTop: $("#things_ive_done").offset().top}, 'slow');    
    });
    $("#contactmelink").click(function(){
        $("html,body").animate({scrollTop: $("#contact_me").offset().top}, 'slow');    
    });
   
});