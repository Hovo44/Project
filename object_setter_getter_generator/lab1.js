let u1 = {
    name :'kim',
    age: 21
};

u1.toString = function(){
    return this.name + ' jan';
}

console.log( '' + u1 );
