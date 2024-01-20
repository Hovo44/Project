
// MAP, FILTER

const arr = ['1', '2', '3', 4, 5];


const res = arr.map( (el) => parseInt(el) );
const res2 = arr.map( (el) => el*el );

const res3 = arr.map( el=>parseInt(el) ).filter(el=> el%2);
console.log(res3);



