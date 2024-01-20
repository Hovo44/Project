
// Reference

let arr1 = ['hayk', 'anna','ani'];
let arr2 = arr1;
arr1[0] = 'kim';
console.log(arr2);
console.log(typeof arr1);   // object 

let obj1 = {x:10};
let obj2 = obj1;
let obj3 = {x:10};
obj1.x = 20;
console.log(obj2.x);    // 20
console.log(obj3.x);    // 10


