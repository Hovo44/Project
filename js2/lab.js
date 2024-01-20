var i = 40; console.log(i++ + ++i + ++i );

var str = 'Привет, Мир!';
console.log(str);

var str1 = 'Привет, ';
var str2 = 'Мир!';
console.log(str1 + str2);

var name = 'Hayk!';
console.log('Привет, ' + name);

var age = 17;
console.log('Мне ' + age + ' лет!');

var i = 40;
console.log(i++ + --i + i++ + i--);


// urok 2 - 10

// var a = prompt();
// console.log("Ваше имя " + a);

// urok 2 - 11

// var a = prompt();
// console.log(a*a);

// urok 2 - 12

var str = 'abcde';
console.log(str[0]);
console.log(str[2]);
console.log(str[4]);

// urok 2 - 13

    var num = '12345';
    console.log(num[0] * num[1] * num[2] * num[3] * num[4]);

// urok 2 - 14

console.log(60*60);
console.log(60*60*24);
console.log(60*60*24*30);

// urok 2 - 15

var hour = '3';
var min = '51';
var sec = '02';
console.log(hour + ':' + min + ':' + sec);

// urok 2 - 16

var num = 5;
console.log(num * num);

// urok 2 - 17

var num = 47;
num = num + 7;
num = num - 18;
num = num * 10;
num = num / 15;
console.log(num);

var num = 47;
num += 7;
num -= 18;
num *= 10;
num /= 15;
console.log(num);

// urok 2 - 18

var num = 10;
num = num + 1;
num = num + 1;
num = num - 1;
console.log(num);

var num = 10;
num++
num++
num--
console.log(num);


var sequence = [1, 1, 2, 3, 5, 8, 13];
for (var i = 0; i < sequence.length; i++) {
  console.log(sequence[i]);
}