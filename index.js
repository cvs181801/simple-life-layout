//keep the current page selected using event listeners.

//first, grab the ID's for each navbar selector.
const home = document.getElementById("home-selector");
const aboutMe = document.getElementById("about-me-selector");
const recentPosts = document.getElementById("recent-posts-selector");


//highlight home nav selector
home.addEventListener("click", event => {
    aboutMe.classList.remove("current-page");
    recentPosts.classList.remove("current-page");
    home.classList.add("current-page");
    
});
   
//highlight about me nav selector    


aboutMe.addEventListener("click", event => {
    home.classList.remove("current-page");
    recentPosts.classList.remove("current-page");
    aboutMe.classList.add("current-page");
});

//highlight recent posts nav selector


recentPosts.addEventListener("click", event => {
    home.classList.remove("current-page");
    aboutMe.classList.remove("current-page");
    recentPosts.classList.add("current-page");
});
        
        