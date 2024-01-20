
// Array Destructuring

const arr1 = [1,2,3,4,5,6,7,8];
const [ , a, , b, c, d] = arr1;

const arr2 = [ [1,2], [3,4] ];
const [ [x,y], [z,k] ] = arr2;

const names = ['hayk', 'anna', 'ani'];
const [q , ...qqq] = names;
console.log(qqq);   // ['anna', 'ani']
console.log(q);     // 'hayk'

