

// Urok 4-9
if(test === true){
    console.log('Ok');
}else{
    console.log('No');
}
if(test === false){
    console.log('No');
}else{
    console.log('Ok');
}

// Urok 4-10
var test = false;
if(!test) console.log('Ok');
else console.log('No');

(!test) ? console.log('Ok') : console.log('No');

// Urok 4-11
if(a > 0 && a <5) console.log('Ok');
else console.log('No');

(a > 0 && a <5) ? console.log('Ok') : console.log('No');


// Urok 4-12
var a = 7;
if(a===0 || a===2) a = a+7;
else a = a/10;
console.log(a);

(a===0 || a===2) ? a = a+7 : a = a/10;
console.log(a);

// Urok 4-13
var a = 3;
var b = 5;
var result;
if(a<=1 && b>=3) result = a+b;
else result = a-b;
console.log(result);

(a<=1 && b>=3) ? result = a+b : result = a-b;
console.log(result);

// URok 4-14
var a = 2;
var b = 4;
if(a > 2 && a < 11 || b >= 6 && b < 14) console.log("True");
else console.log("False");

(a > 2 && a < 11 || b >= 6 && b < 14) ? console.log("True") : console.log("False");

 


