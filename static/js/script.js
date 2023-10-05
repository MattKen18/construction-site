AOS.init();

const navBar = document.getElementById("site-nav");

// window.addEventListener("scroll", () => {
//     let pos = $(window).scrollTop();
//     const navOpacity = getComputedStyle(navBar).opacity;

//     if (pos >= 100 && navOpacity != "0.7"){
//         document.getElementById("site-nav").style.opacity = "0.7";
//     } else if (pos < 100 && navOpacity != "1") {
//         document.getElementById("site-nav").style.opacity = "1";

//     }

//     if ($(window).scrollTop() >= 100) {
//         $("#site-nav").hover(function(){
//             $(this).css("opacity", "1");
//             }, function(){
//                 $(this).css("opacity", "0.7");
//             });
//     }
// })

// document.getElementById("site-nav").onscroll