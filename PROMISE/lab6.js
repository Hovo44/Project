const a = new Promise(function(resovle, reject){
    let rand = Math.random().toFixed(1); 
    rand > .5 ? resovle('YES') : reject('NO'); 
}); 


const foo = function(){
    console.log('START');
    a.then(function(value){console.log('Then=' + value);})
    .catch(function(error){console.log('Catch=' + error);});
    console.log('END');
}
foo();