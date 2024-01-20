function random(min, max){
    let a = max-min; 
    return Math.round(Math.random()*a) + min;
}


let arr = [];
for(let i=0; i<5; i++){
    arr.push( random(100,200) );
}

let max = arr[0];
for(let i=1; i< arr.length; i++){
    if( arr[i]>max ) max = arr[i];
}

console.log( 'max = ' + max );