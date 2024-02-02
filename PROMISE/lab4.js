let button = document.querySelector('button');
button.addEventListener('click', stopTimer);


let t = setInterval(timer, 1000);

function stopTimer(){
    clearInterval(t);
}


function timer(){
    let date = new Date();
    let sec = date.getSeconds();
    document.querySelector('p').innerHTML = sec;
}
