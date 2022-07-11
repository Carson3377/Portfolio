// sidebarToggle when clicked on, it moves in and out
let btn = document.querySelector("#btn");
let sidemenu = document.querySelector(".side-menu");

btn.onclick = function() {
    sidemenu.classList.toggle("active");
}


function scrollMain() {
    window.scrollTo(0, 0);
}

function scrollAbout() {
    window.scrollTo(0, 800);
}

function scrollEducation() {
    window.scrollTo(0, 1880);
}

function scrollAchieve() {
    window.scrollTo(0, 3160);
}

function scrollPro() {
    window.scrollTo(0, 4800)
}

function scrollContact() {
    window.scrollTo(0, 6000)
}


