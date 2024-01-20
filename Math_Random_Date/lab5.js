function random(min, max){
    let a = max-min; 
    return Math.round(Math.random()*a) + min;
}

let arr = [];
for(let i=0; i<5; i++){
    arr.push( random(-1, 1) );
}

console.log(arr);