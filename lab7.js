// REST PARAMETER

function foo(...arr){
    console.log(arr); 
}
foo(9,8,3,4,5);
foo(true,true,false);

//////////////////////////////////////////////////

function foo2(a, b, ...arr){
    console.log(arr);   // [3,4,5]
}
foo2(1, 2, 3, 4, 5);

//////////////////////////////////////////////////

// ERROR
//function foo3(...arr1, ...arr2){}
//foo3(1, 2, 3, 4, 5);

///////////////////////////////////////////////////


// ERROR
//function foo4(a, ...arr2, b){} //  Rest parameter must be last formal parameter
//foo4(1, 2, 3, 4, 5);


