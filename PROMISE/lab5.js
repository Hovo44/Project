
function random(max){
    return Math.round(Math.random()*max);
}

new Promise(function(resolve, reject){
    let a = random(10);
    a>5 ? resolve(a) : reject('A poqr e 5-ic'); // ? SA IFNA KARCH GRELAZEV
}).then(function(value){console.log('THEN= ' + value);});