$(window).scroll(function() {           
    if($(document).scrollTop() > 200){
        $('.b_rich_ss').addClass( "b_rich_ss_open");
        $('.b_rich_ss img').addClass( "b_rich_ss_scale");
    }
    else {
        $('.b_rich_ss').removeClass("b_rich_ss_open");
        $('.b_rich_ss img').removeClass( "b_rich_ss_scale");
    }
});