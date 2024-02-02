// Javascript Closure (Zamikani kam  karch miacum)

function foo(a){
    return function(){
        console.log(a);
    }
}

var foo2 = foo(5); // Foo(a) darnuma foo(5) && tpuma 5 tivn 
    
foo2(); // 5