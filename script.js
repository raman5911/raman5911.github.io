var scrollBtn = document.getElementById("top-scroll");
var rootElement = document.documentElement;

var nav = document.getElementById("navbar");

window.onscroll = function() {
    if(rootElement.scrollTop > 20)
    {
        scrollBtn.style.display="block";
        nav.classList.remove("no-color");
        nav.classList.remove("navbar-dark");

        nav.classList.add("white");
        nav.classList.add("navbar-light");
    }

    else
    {
        scrollBtn.style.display="none";

        nav.classList.remove("white");
        nav.classList.remove("navbar-light");

        nav.classList.add("no-color");
        nav.classList.add("navbar-dark");
    }
}

function scrollToTop() {
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

scrollBtn.addEventListener("click", scrollToTop);