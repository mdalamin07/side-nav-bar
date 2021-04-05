var navbar = $("#navbar_icon");
var overly = $("#content_overly");
var side_nav = $("#side_nav");
var menu_text = $(".ankor_tag");

function nav_open_close(){
    if(side_nav.hasClass("nav_close")){

        side_nav.removeClass("nav_close");
        side_nav.addClass("nav_open");

        menu_text.removeClass("d-none");
        overly.removeClass("content_overly_close");
        overly.addClass("content_overly_open");
    }else{
        side_nav.removeClass("nav_open");
        side_nav.addClass("nav_close");

        menu_text.addClass("d-none");
        overly.removeClass("content_overly_open");
        overly.addClass("content_overly_close");
    }
};

navbar.click(function(){
    nav_open_close();
});
overly.click(function(){
    nav_open_close();
});