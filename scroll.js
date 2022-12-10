// window.onscroll = function() {scrollFunction()};
// function scrollFunction() {
//     if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//         document.getElementsByClassName("site-header").style.background = "#1b181b";
//     } else {
//         document.getElementsByClassName("site-header").style.background = "None";
//     }
// }

let toggled = 0;

function changeNavColor() {
    var nav = document.getElementById('site-header');
    var scrollValue = window.scrollY;
    if (scrollValue < 150) {
        if (nav.classList.contains('site-header-black')){   
            if (toggled == 0) {
                nav.classList.add('site-header-transparent');
                nav.classList.remove('site-header-black');
            }
            else {
                // Do nothing 
            }
        }
        else {
            nav.classList.add('site-header-transparent');
            nav.classList.remove('site-header-black');          
        }
        
    } 
    else {
        if (nav.classList.contains('site-header-black')){
            // Do nothing
        }
        else {
            nav.classList.add('site-header-black'); 
            nav.classList.remove('site-header-transparent');   
        }
    }
}

window.addEventListener('scroll', changeNavColor);

function changeColor() {
    var nav = document.getElementById('site-header');
    nav.classList.add('site-header-black');
    nav.classList.remove('site-header-transparent');
    if (toggled==0){
        toggled = 1;
    }
    else {
        toggled = 0;
    }
    var scrollValue = window.scrollY;
    if (scrollValue < 150) {
        if (toggled==0){
            nav.classList.add('site-header-transparent');
            nav.classList.remove('site-header-black');
        }
    }
}

document.getElementById('menu-toggle').addEventListener('click', changeColor);
// $(".menu-toggle").click(function() {
//     $(".site-header").addClass("activated");
//   });