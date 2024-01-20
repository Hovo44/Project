let u1 = {name: 'anna', age: 23, w: 81};
let u2 = {name: 'kim', age: 21, w: 83};

u1.valueOf = u2.valueOf = function(){
    return this.age;
}



if(u1 > u2){
    console.log('YES');
}else{
    console.log('NO');
}