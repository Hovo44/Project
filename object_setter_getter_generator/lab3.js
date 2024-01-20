let name = ['a', 'b', 'c'];
name.toString  = function(){
    return this.join(' ');
}

console.log(name);
console.log(''+name);