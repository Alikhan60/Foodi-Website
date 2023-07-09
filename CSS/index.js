let nav = document.querySelector(".navigation-wrap");
window.onscroll = function() {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("scroll");
    } else {
        nav.classList.remove("scroll");
    }
}



let navBar = document.querySelectorAll(".nav-link");
let navCollaps = document.querySelector(".navbar-collapse.collapse")
navBar.forEach(function(a) {
    a.addEventListener("click", function() {
        navCollaps.classList.remove("show")
    })

});