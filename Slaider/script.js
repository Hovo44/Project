// SELECTORS
const slides = document.querySelectorAll('slide');


// EVENT LISTENERS
slides.forEach(el=>{
    el.addEventListener('click', ()=>{
        clearActiveClass();
        el.classList.add('active');
    });
});


function clearActiveClass(){
    slides.forEach(el=>{
        el.classList.remove('active');
    });
}


function slidesPlugin(activeSlide){
    slides[activeSlide].classList.add('active');
}

function randomNumber(min, max){
    return Math.round(Math.random() * (max-min) + min ); // MIN 0 MAX 3
}

const index = randomNumber(0, slides.length-1);  // 0 - 3
slidesPlugin(index);


