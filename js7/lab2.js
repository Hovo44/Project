


// Urok 5-5
var arr ='12345'
var i =0;
while(i<4){
    console.log(arr[i]);
    i++;
}

// Urok 5-6
var arr =[1, 2, 3, 4, 5];
var i =0;
var result =0;
while(i<5){
    result += arr[i]
    i++;
}
console.log(result);

// Urok 5-9
var arr ='2, 5, 9, 15, 0, 4'
var i =0;
while(i<6){
    if(arr[i] >3 && arr[i] <10) console.log( arr[i] );
    i++;
}

// Urok 5-10
var i =0;
var result =0;
while(i<6){
    if(arr[i]>0) result += arr[i];
    i++;
}
console.log(result);

// Urok 5-11
var arr = [1, 2, 5, 9, 4, 13, 4, 10];
var i =0;
while(i<8){
    if(arr[i] === 4) {
        console.log('Yes');
        break; // WHILE-IC DURS KGA
    }
    i++;
}

// Urok 5-12
var arr =[10, 20, 30, 50, 235, 3000]
var i =0;
while(i<6){
    if( arr[0], arr[i], arr[3]) console.log(arr[i]);
    i++;
}