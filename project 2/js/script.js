
let searchBtn = document.querySelector('header .icons .fa-search');
let searchBar = document.querySelector('header .search-bar');
let loginBtn = document.querySelector('header .icons .fa-user');
let loginBar = document.querySelector('.login-form');
let closeLoginBarBtn = document.querySelector('.login-form #form-close'); 
let menuBtn = document.querySelector('header #menu-bar');
let navbar = document.querySelector('header .navbar');
let videoBtn = document.querySelectorAll('.home .controls .vid-btn');
 
  
window.onscroll = ()=>{
    navbar.classList.remove('active');
    menuBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    searchBtn.classList.remove('fa-times');
    loginBar.classList.remove('active');
};
    

loginBtn.addEventListener('click', ()=>{
    searchBar.classList.toggle('active');
    searchBtn.classList.toggle('fa-times');
});

closeLoginBarBtn.addEventListener('click', ()=>{
    loginBar.classList.remove('active');
});


menuBtn.addEventListener('click', ()=>{
    menuBtn.classList.toggle('fa-times');    
});







