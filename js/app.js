//js file
/* 
    student slider (lightslider)
*/
$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
});

/* 
    Active navigation link
*/
const navItem = document.querySelectorAll(".nav-item");
for (let i = 0; i < navItem.length; i++) {
    navItem[i].addEventListener("click", function(){
        var current = document.getElementsByClassName("active-link");
        current[0].className = current[0].className.replace("active-link", "");
        this.className += " active-link";
    });
}
/* 
    hero slider
*/
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("hero-content");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if(slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000);
}

/* 
    back to top 
*/
var goToTop = document.querySelector(".goto-top-btn");
// when user move the scroll down the document
window.onscroll = scrollDown;
function scrollDown(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        goToTop.style.visibility = "visible";
    }else {
        goToTop.style.visibility = "hidden";
    }
}
// when users clicks on the scrollTop button, document reset back to 0
goToTop.addEventListener("click", function(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

/* 
    responsive navigaton bar
*/ 
let navBtn = document.querySelector("#toggle-nav-list");
let nav = document.querySelector(".nav-list");
navBtn.addEventListener("click", function(){
    nav.classList.toggle("nav-active");
});

/* 
    responsive navbar will disappear when each is clicked
*/ 
// let navLinks = document.querySelectorAll(".nav-link");
// for (let i = 0; i < navLinks.length; i++) {
//     navLinks[i].addEventListener("click", function(){
//         nav.classList.toggle("nav-active");
//     });
// }