


let a = Math.round(Math.random()*10); // 0 - 10 patahakan mi tiv beri

//               5  &&  10
function random(min, max){
    const diff = max-min; // 5
    return Math.round(Math.random()*diff) + min; // 5 - 10
}

console.log( random(5, 10) );