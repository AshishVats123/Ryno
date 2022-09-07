/* --------Brand <page------*/
"use strict";
let MainImg = document.querySelector("#mainimg");
let smallimg = document.getElementsByClassName("small-img");
let zoom = document.querySelector(".zoom");
let w = zoom.offsetWidth / 100;
let h = zoom.offsetHeight / 100;
      
       smallimg[0].onclick = function() {
        MainImg.src = smallimg[0].src;
        MainImg.addEventListener("mousemove",function(e){
        zoom.style.backgroundImage= "url(./img/shop/1.jpg)";
        zoom.style.backgroundRepeat= "no-repeat";
        zoom.style.zIndex=5;
        zoom.style.backgroundSize = MainImg.width*w+"px "+MainImg.height*h+"px";
        
        let x = e.clientX;
        let y = e.clientY; 
        
        zoom.style.backgroundPosition = "-" + (x*w-500) + "px -" + (y*h-600) + "px";
        
    }); 
    
    MainImg.addEventListener("mouseout",function(){
        zoom.style.backgroundImage= "";
        zoom.style.zIndex=-6;
    })
    }
    smallimg[1].onclick = function() {
    MainImg.src = smallimg[1].src;
    MainImg.addEventListener("mousemove",function(e){
        zoom.style.backgroundImage= "url(./img/shop/24.jpg)";
        zoom.style.backgroundRepeat= "no-repeat";
        zoom.style.zIndex=5;
        zoom.style.backgroundSize = MainImg.width*w+"px "+MainImg.height*h+"px";
        
        let x = e.clientX;
        let y = e.clientY; 
    
    zoom.style.backgroundPosition = "-" + (x*w-500) + "px -" + (y*h-600)+ "px";
    })
    
    MainImg.addEventListener("mouseout",function(){
        console.log("out");
        zoom.style.backgroundImage= "";
        zoom.style.zIndex=-6
    })   
    }
    smallimg[2].onclick = function() {
    MainImg.src = smallimg[2].src;
    MainImg.addEventListener("mousemove",function(e){
        zoom.style.backgroundImage= "url(./img/shop/25.jpg)";
        zoom.style.backgroundRepeat= "no-repeat";
        zoom.style.zIndex=5;
        zoom.style.backgroundSize = MainImg.width*w+"px "+MainImg.height*h+"px";
        
        let x = e.clientX;
        let y = e.clientY; 
    
    zoom.style.backgroundPosition = "-" + (x*w-500) + "px -" + (y*h-600) + "px";
    })
    
    MainImg.addEventListener("mouseout",function(){
        console.log("out");
        zoom.style.backgroundImage= "";
        zoom.style.zIndex=-6
    })
    }
    smallimg[3].onclick = function() {
    MainImg.src = smallimg[3].src;
    MainImg.addEventListener("mousemove",function(e){
        zoom.style.backgroundImage= "url(./img/shop/26.jpg)";
        zoom.style.backgroundRepeat= "no-repeat";
        zoom.style.zIndex=5;
        zoom.style.backgroundSize = MainImg.width*w+"px "+MainImg.height*h+"px";
        
        let x = e.clientX;
        let y = e.clientY; 
    
    zoom.style.backgroundPosition = "-" + (x*w-500) + "px -" + (y*h-600) + "px";
    })
    
    MainImg.addEventListener("mouseout",function(){
        console.log("out");
        zoom.style.backgroundImage= "";
        zoom.style.zIndex=-6
    })
    }
    
    // hemberg------**
    $(document).ready( function(){
    $(".wrap-1 .mob").click(function (e) { 
        e.preventDefault();
         console.log("hi");
        $(this).toggleClass("active");
        $(".wrap-1 .mob-hide").animate({width:"toggle"},350);   
    });

 });

 // ---logIn----
 $('.log').click(function (e) { 
    e.preventDefault();
    $('body').append('<div class=overlay></div>');
    $('body').append('<div class=model></div>');
    $(".model").append('<button class="close">&times;</button>');
    
    var account = $(".account").html();
    $('.model').append(account);

    $(window).keydown(function (e) { 
        if(e.which == 27) {
            $(".overlay ,.model").remove();
        }
    });
    $('.model .close, .overlay').click(function () {

        $(".overlay ,.model").remove();

    });

    $(".signup").click(function (e) { 
        e.preventDefault();
        $(".model").remove(); 
        $('body').append('<div class=model></div>');
        $(".model").append('<button class="close">&times;</button>');
        var acc = $(".account-1").html();
        $('.model').append(acc);
        $(window).keydown(function (e) { 
            if(e.which == 27) {
                $(".overlay ,.model").remove();
            }
        });
        $('.model .close, .overlay').click(function () {

            $(".overlay ,.model").remove();

        });
    });
});



       







