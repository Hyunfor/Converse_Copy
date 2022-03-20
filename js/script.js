$(document).ready(function(){
  
    // 상황 1차 메뉴를 누르면 ... 기능이 작동한다.
    // 기능 1. 메뉴에 active
    // 기능 2. nav-2-depth-wrap에 active
    // 기능 3. 2차 메뉴가 나온다
    
    $(".top-bar-wrap .nav-box > li").click(function(){
      
      let indexNum = $(this).index()
      
      if($(this).hasClass("active")) {
        // 메뉴야 꺼져
        $(this).removeClass("active")
        $(".nav-2-depth-wrap").removeClass("active")
        $(".nav-2-depth-wrap .left > .nav").eq(indexNum).removeClass("active")
      } else {
        // 기본 기능
        $(this).addClass("active")
        $(this).siblings().removeClass("active")
  
        $(".nav-2-depth-wrap").addClass("active")
  
        $(".nav-2-depth-wrap .left > .nav").eq(indexNum).addClass("active")
        $(".nav-2-depth-wrap .left > .nav").eq(indexNum).siblings().removeClass("active")
        // 기본 기능
      }
      
  
    })
    
    $(".nav-2-depth-wrap .right").click(function(){
      $(".top-bar-wrap .nav-box > li.active").removeClass("active")
      $(".nav-2-depth-wrap").removeClass("active")
      $(".nav-2-depth-wrap .left > .nav.active").removeClass("active")
    })
    
    //끝
  })