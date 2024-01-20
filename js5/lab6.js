

// Urok 4 - 15
var num = 2;
var result;
switch (num) {
    case 1: result = 'Dzmer'; break;
    case 2: result = 'Garun'; break;
    case 3: result = 'Amar'; break;
    case 4: result = 'Ashun'; break;
    default: result = 'tvyal tivy cucakum che';
}   
console.log('Result = ' + result);

// Urok 4 - 16
var day = 8;
if( day >=1 && day<=9) console.log('1');
if( day >=10 && day <=19) console.log('2');
if( day >=20 && day<=31) console.log('3');

// Urok 4 - 17
var month = 5;
switch(month){
    case 12: 
    case 1:
    case 2: console.log('Dzmer'); break;
    case 3:
    case 4: 
    case 5: console.log('Garun'); break;
    case 6: 
    case 7: 
    case 8: console.log('Amar'); break;
    case 9: 
    case 10: 
    case 11: console.log('Ashun'); break;
    default: console.log('CHKA TENC TIV');
}

