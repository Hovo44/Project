var arr = [];
for(var i = 0; i<5; i++){
    arr[i] = function(){
        console.log(i);
    }
}


arr[0]();
i = 0;
arr[0]();   // 0;   


arr[3](); // 5