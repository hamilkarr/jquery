$(function() {
    // 메뉴 열고 닫기
    $(".menu_open").click(function(){
        const nav = $("nav");
        const menuOpen = $(".menu_open");
       
        if (nav.hasClass("on")) { //메뉴가 열려있는 상태
            // 메뉴 닫기
             // hasClass - classList.contains()
            nav.removeClass("on");       
            // classList.remove()
            //문구 변경 - 메뉴 열기
            menuOpen.text("메뉴열기");
            

        } else { //메뉴가 닫혀있는 상태
            //메뉴 열기
            // classList.add()
            nav.addClass("on");

            // 문구변경 - 메뉴닫기
            menuOpen.text("메뉴닫기");
        }
    });
});