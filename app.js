let navLinks = Array.from(document.getElementsByClassName("nav-link"));
let activeNav = document.getElementsByClassName("active");

for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", function () {
        activeNav[0].classList.remove("active");
        navLinks[i].classList.toggle("active");
    });
}
