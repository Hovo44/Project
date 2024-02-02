
var a = 5;
function foo(){
    console.log(a); // undefined
    var a = 7;
}


var b = 7;
function foo(){
    console.log(b); // Cannot access 'b'
    let b = 7;
}