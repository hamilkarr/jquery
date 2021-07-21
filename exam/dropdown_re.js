$(function() {
    
    
    $(".menu_open").click(function () {
        if($("nav").hasClass("on")) 
            {$("nav").removeClass("on")} 
            else { $("nav").addClass("on") }
        
    });
});