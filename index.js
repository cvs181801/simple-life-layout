//keep the current page selected 

const currentPage = document.getElementById("nav-selector");

currentPage.addEventListener("click", function() {
    currentPage.addClass('current-page');
});