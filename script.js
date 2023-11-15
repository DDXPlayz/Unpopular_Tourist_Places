function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function goToHomePage() {
    window.location.href = "index.html";
}

document.getElementById("goHome").addEventListener("click", function() {
    if (window.location.pathname === "/index.html" || window.location.pathname === "/") {
        scrollToTop();
    } else {
        goToHomePage();
    }
});