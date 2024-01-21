let searchBtn = document.querySelector('header .icons .fa-search');
let searchBar = document.querySelector('header .search_bar');
let loginBtn = document.querySelector('header .icons .fa-user');
let loginBar = document.querySelector('.login_form')
let closeLoginBarBtn = document.querySelector('.login_form #form_close'); 
 
  



searchBtn.addEventListener('click', ()=>{
    searchBar.classList.toggle('active');
});

loginBtn.addEventListener('click', ()=>{
    loginBar.classList.toggle('active')
});

closeLoginBarBtn.addEventListener('click', ()=>{
    loginBar.classList.remove('active')
});