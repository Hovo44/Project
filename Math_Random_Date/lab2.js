//MATH.RANDOM()
// 0 - 1


for(let i =0; i<100000000; i++){
    let x = Math.random();
    if(x===0 || x === 1) console.log('YES');
}
console.log('FINISHED!');