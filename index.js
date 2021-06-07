// //keep the current page selected using event listeners.

// //first, grab the ID's for each navbar selector.
// const home = document.getElementById("home-selector");
// const aboutMe = document.getElementById("about-me-selector");
// const recentPosts = document.getElementById("recent-posts-selector");


// //highlight home nav selector
// home.addEventListener("click", event => {
//     aboutMe.classList.remove("current-page");
//     recentPosts.classList.remove("current-page");
//     home.classList.add("current-page");
    
// });
   
// //highlight about me nav selector    


// aboutMe.addEventListener("click", event => {
//     home.classList.remove("current-page");
//     recentPosts.classList.remove("current-page");
//     aboutMe.classList.add("current-page");
// });

// //highlight recent posts nav selector


// recentPosts.addEventListener("click", event => {
//     home.classList.remove("current-page");
//     aboutMe.classList.remove("current-page");
//     recentPosts.classList.add("current-page");
// });
        
//this solution works for other kinds of elements like div's but not working for our navbar.  I think it's because the li's in the nav bar form a node list which is not an array but similar

//try again

//const navigationBar = Array.from(document.querySelectorAll('#navbar>ul>li'));

//try again

const currentLocation = location.href;
const menuItem = document.querySelectorAll('a');
const menuLength = menuItem.length;
for(let i = 0; i < menuLength; i++ ) {
   if(menuItem[i].href === currentLocation) {
       menuItem[i].className = "active";
   }
}