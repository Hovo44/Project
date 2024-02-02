// CLOSURE

var a = 99;

function foo(){
    var a = 55;
    return function(){
        console.log(a);
    }
}

var foo2 = foo();
foo2(); 