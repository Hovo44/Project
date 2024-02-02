

var a = 99;

function foo(){
    var a  = 55;
    foo2();
}


function foo2(){
    console.log(a); // 99 // CHI MTNUM FOO FUNKCIAYI MEJ GNA GLOBAL TIRUYT
}

foo();