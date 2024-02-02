var arr = [];
for(var i = 0; i<5; i++){
    arr[i] = function(){
        console.log(i);
    }
}


console.log(i); // 5
arr[0]();   // 5
arr[0]();   // 5;

i = 0; // var i sarqum enq 0
arr[0]();   // 0;   