//keep the current page selected 

const currentPage = document.querySelector("nav-selector");

currentPage.addEventListener("click", event => {
    currentPage.addClass('.current-page');
});