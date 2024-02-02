


var arr = [];
for(let i = 0; i<5; i++){
    arr[i] = function(){
        console.log(i);
    }
}

// console.log(i); i is not defined
arr[0]();   // 0
arr[1]();   // 1
arr[2]();   // 2
arr[3]();   // 3