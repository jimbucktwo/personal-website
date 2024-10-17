document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelector("#main-menu");
    let idsetter = document.querySelector("#main-menu1");
    let original = document.querySelector(".home-page").innerHTML;

    idsetter.dataset.id = "resume";
    idsetter = document.querySelector("#main-menu2");
    idsetter.dataset.id = "projects";
    idsetter = document.querySelector("#main-menu3");
    idsetter.dataset.id = "contact";

    document.querySelector(".header img").addEventListener("click", function () {
        document.querySelector(".home-page").innerHTML = original;
    })

    buttons.addEventListener("click", function(e) {
        if (e.target && e.target.nodeName == "LI") {
            document.querySelector(".home-page").innerHTML = '';
        }
    })


})