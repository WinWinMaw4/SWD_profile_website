$(document).ready(function(){
   
   
    //when scroll changing navbar
    let screenHeight = $(window).height();
    console.log("screenHeight"+screenHeight);

    $(window).scroll(function(){
        let currentPosition = $(document).scrollTop();
        console.log("currentPosition"+currentPosition);
        // currentPosition > screenHeight-110
        if(currentPosition > screenHeight-110){
            $(".site-nav").addClass("site-nav-scroll");
        }else{
            $(".site-nav").removeClass("site-nav-scroll");
        }
    });
 
    //changing the mobile menu icon
   $(".navbar-toggler").click(function(){
    let result = $(".navbar-collapse").hasClass("show");
    console.log(result);

    if(result){
        //if hasClass is true
        $(".menu-icon").removeClass("fa-close").addClass("fa-bars");

    }else{
        //if hasCass is false
        $(".menu-icon").removeClass("fa-bars").addClass("fa-close");

    }
   });
   
});
