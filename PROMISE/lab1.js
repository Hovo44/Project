// Promise


function randomValue(max){
    return Math.round(Math.random()*max);
}

console.log('A');

setTimeout(function(){
    console.log( randomValue(3) );
}, 0);

console.log('B');

